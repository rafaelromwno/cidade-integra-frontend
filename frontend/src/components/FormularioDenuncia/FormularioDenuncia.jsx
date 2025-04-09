import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase/config"; 
import { useEffect, useState } from "react";
import Select from "react-select";
import { InputField } from "./InputField";
import { Upload } from "lucide-react";
import axios from "axios";

const FormularioDenuncia = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [formData, setFormData] = useState({
    descricao: "",
    categoria: null,
    cep: "",
    rua: "",
    numero: "",
    bairro: "",
    cidade: "",
    estado: null,
    imagens: [],
    isAnonimo: "0",
    observacao: "",
  });

  // verifica o estado de autenticação do usuário
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsLoggedIn(!!user); `false`
    });

    return () => unsubscribe(); // limpa o listener ao desmontar o componente (limpeza de memória)
  }, []);

  const categoriaOptions = [
    { value: "0", label: "Lixo na Rua ou Calçada" },
    { value: "1", label: "Árvore Caída ou Danificada" },
    { value: "2", label: "Vazamento de Água ou Esgoto" },
    { value: "3", label: "Obra Irregular ou Sem Licença" },
    { value: "4", label: "Poluição Sonora" },
    { value: "5", label: "Iluminação Pública Deficiente" },
    { value: "6", label: "Buracos ou Problemas no Asfalto" },
    { value: "7", label: "Animais Abandonados" },
    { value: "8", label: "Outros Problemas Urbanos" },
  ];

  const estadoOptions = [
    { value: "AC", label: "Acre (AC)" },
    { value: "AL", label: "Alagoas (AL)" },
    { value: "AP", label: "Amapá (AP)" },
    { value: "AM", label: "Amazonas (AM)" },
    { value: "BA", label: "Bahia (BA)" },
    { value: "CE", label: "Ceará (CE)" },
    { value: "DF", label: "Distrito Federal (DF)" },
    { value: "ES", label: "Espírito Santo (ES)" },
    { value: "GO", label: "Goiás (GO)" },
    { value: "MA", label: "Maranhão (MA)" },
    { value: "MT", label: "Mato Grosso (MT)" },
    { value: "MS", label: "Mato Grosso do Sul (MS)" },
    { value: "MG", label: "Minas Gerais (MG)" },
    { value: "PA", label: "Pará (PA)" },
    { value: "PB", label: "Paraíba (PB)" },
    { value: "PR", label: "Paraná (PR)" },
    { value: "PE", label: "Pernambuco (PE)" },
    { value: "PI", label: "Piauí (PI)" },
    { value: "RJ", label: "Rio de Janeiro (RJ)" },
    { value: "RN", label: "Rio Grande do Norte (RN)" },
    { value: "RS", label: "Rio Grande do Sul (RS)" },
    { value: "RO", label: "Rondônia (RO)" },
    { value: "RR", label: "Roraima (RR)" },
    { value: "SC", label: "Santa Catarina (SC)" },
    { value: "SP", label: "São Paulo (SP)" },
    { value: "SE", label: "Sergipe (SE)" },
    { value: "TO", label: "Tocantins (TO)" },
  ];

  // função para buscar dados do CEP
  const fetchAddressByCEP = async (cep) => {
    try {
      const sanitizedCEP = cep.replace(/\D/g, ""); // remove caracteres não numéricos
      if (sanitizedCEP.length === 8) {
        const response = await axios.get(`https://viacep.com.br/ws/${sanitizedCEP}/json/`);
        if (!response.data.erro) {
          const { logradouro, bairro, localidade, uf } = response.data;
          setFormData((prevData) => ({
            ...prevData,
            rua: logradouro || "",
            bairro: bairro || "",
            cidade: localidade || "",
            estado: { value: uf, label: `${uf}` } || null,
          }));
        } else {
          alert("CEP não encontrado.");
        }
      }
    } catch (error) {
      console.error("Erro ao buscar o CEP:", error);
      alert("Erro ao buscar o CEP. Verifique o valor e tente novamente.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "cep" && value.length >= 8) {
      fetchAddressByCEP(value);
    }
  };

  const handleSelectChange = (selectedOption, actionMeta) => {
    setFormData({ ...formData, [actionMeta.name]: selectedOption });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, imagens: e.target.files });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8">
      <div className="bg-azul-paleta shadow-md rounded-lg px-6 py-8 max-w-lg w-full">
        <h1 className="text-xl font-bold text-center mb-6 text-gray-200">
          Faça sua Denúncia
        </h1>
        <p className="text-center text-gray-400 mb-6">
          Relate problemas urbanos ou ambientais preenchendo o formulário
          abaixo. Para denunciar anonimamente, escolha a opção adequada.
        </p>

        {/* exibe o aviso apenas se o usuário não estiver logado */}
        {!isLoggedIn && (
          <div className="mb-6">
            <p className="text-center text-sm font-semibold text-red-500">
              Nota: Você deve estar logado para realizar uma denúncia.
            </p>
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="descricao"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Descrição do Problema
            </label>
            <textarea
              id="descricao"
              name="descricao"
              value={formData.descricao}
              onChange={handleChange}
              className="block w-full rounded-md border-0 py-2 px-3 text-gray-900 placeholder-gray-500 shadow-sm ring-1 ring-gray-300  focus:ring-verde-paleta focus:border-verde-paleta sm:text-sm"
              placeholder="Descreva o problema detalhadamente"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="categoria"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Categoria
            </label>
            <Select
              inputId="categoria"
              name="categoria"
              options={categoriaOptions}
              value={formData.categoria}
              onChange={handleSelectChange}
              placeholder="Selecione uma categoria"
              className="text-gray-900 placeholder-gray-500"
              styles={{
                control: (base) => ({
                  ...base,
                  borderColor: "#d1d5db",
                  boxShadow: "none",
                  "&:hover": { borderColor: "#38a169" },
                }),
                option: (base, state) => ({
                  ...base,
                  backgroundColor: state.isFocused ? "#38a169" : "white",
                  color: state.isFocused ? "white" : "black",
                  "&:active": {
                    backgroundColor: "#38a169",
                  },
                }),
              }}
            />
          </div>

          {/* Campo de CEP */}
          <div className="mb-6">
            <label
              htmlFor="cep"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              CEP (opcional)
            </label>
            <InputField
              id="cep"
              name="cep"
              value={formData.cep}
              onChange={handleChange}
              placeholder="Ex.: 12345-678"
              required={false}
            />
          </div>

          {["rua", "numero", "bairro", "cidade"].map((field) => (
            <div key={field} className="mb-6">
              <label
                htmlFor={field}
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                {field === "rua"
                  ? "Rua/Avenida"
                  : field === "numero"
                  ? "Número (Opcional)"
                  : field.charAt(0).toUpperCase() + field.slice(1)}
              </label>
              <InputField
                id={field}
                name={field}
                value={formData[field]}
                onChange={handleChange}
                placeholder={
                  field === "rua"
                    ? "Ex.: Rua das Flores, Avenida Brasil"
                    : field === "bairro"
                    ? "Ex.: Centro, Jardim América"
                    : field === "cidade"
                    ? "Ex.: São Paulo, Rio de Janeiro"
                    : field === "numero"
                    ? "Ex.: 123"
                    : ""
                }
                required={field !== "numero"}
              />
            </div>
          ))}

          <div className="mb-6">
            <label
              htmlFor="estado"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Estado
            </label>
            <Select
              inputId="estado"
              name="estado"
              options={estadoOptions}
              value={formData.estado}
              onChange={handleSelectChange}
              placeholder="Selecione um estado"
              className="text-gray-900 placeholder-gray-500"
              aria-labelledby="estado-label"
              styles={{
                control: (base) => ({
                  ...base,
                  borderColor: "#d1d5db",
                  boxShadow: "none",
                  "&:hover": { borderColor: "#38a169" },
                }),
                option: (base, state) => ({
                  ...base,
                  backgroundColor: state.isFocused ? "#38a169" : "white",
                  color: state.isFocused ? "white" : "black",
                  "&:active": {
                    backgroundColor: "#38a169",
                  },
                }),
              }}
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="observacao"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Ponto de Referência/Observação (opcional)
            </label>
            <textarea
              id="observacao"
              name="observacao"
              value={formData.observacao}
              onChange={handleChange}
              className="block w-full rounded-md border-0 py-2 px-3 text-gray-900 placeholder-gray-500 shadow-sm ring-1 ring-gray-300 focus:ring-2 focus:ring-verde-paleta sm:text-sm"
              placeholder="Ex.: Próximo ao mercado, em frente à praça, etc."
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="imagens"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Imagens (opcional)
            </label>
            <div className="relative">
              <Upload
                className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400 pointer-events-none"
                size={25} 
              />
              <input
                id="imagens"
                type="file"
                multiple
                onChange={handleFileChange}
                className="block w-full text-gray-300 py-2 pl-3 pr-10 bg-gray-700 border border-gray-600 rounded-md shadow-sm focus:ring-2 focus:ring-verde-paleta sm:text-sm"
              />              
            </div>
          </div>

          <fieldset className="mb-6">
            <legend className="text-sm font-semibold text-gray-300">
              Escolha a Forma de Denúncia
            </legend>
            <div className="mt-4 space-y-4">
              <div className="flex items-center">
                <input
                  id="denuncia-logado"
                  type="radio"
                  name="isAnonimo"
                  value="0"
                  checked={formData.isAnonimo === "0"}
                  onChange={handleChange}
                  className="h-4 w-4 text-verde-paleta"
                />
                <label
                  htmlFor="denuncia-logado"
                  className="ml-2 text-sm text-gray-300"
                >
                  Denunciar como usuário logado
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="denuncia-anonima"
                  type="radio"
                  name="isAnonimo"
                  value="1"
                  checked={formData.isAnonimo === "1"}
                  onChange={handleChange}
                  className="h-4 w-4 text-verde-paleta"
                />
                <label
                  htmlFor="denuncia-anonima"
                  className="ml-2 text-sm text-gray-300"
                >
                  Denunciar anonimamente
                </label>
              </div>
            </div>
          </fieldset>

          <div className="mb-4">
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-semibold text-white bg-verde-paleta hover:bg-verde-escuro-paleta duration-500 focus:outline-none focus:ring-2 focus:ring-verde-paleta"
            >
              Enviar Denúncia
            </button>
          </div>

          <p className="text-sm text-gray-400 text-center">
            Nota: Se você escolher denunciar anonimamente, suas informações
            pessoais não serão vinculadas à denúncia. No entanto, recomendamos
            que se registre para um acompanhamento mais eficaz.
          </p>
        </form>
      </div>
    </div>
  );
};

export default FormularioDenuncia;
