import React from "react";

export const mockDenuncias = [
  {
    id: 1,
    titulo: "Buraco na Rua das Flores",
    descricao: "Há um grande buraco na pista que já causou acidentes e está dificultando o trânsito local.",
    categoria: "buracos",
    data: new Date("2023-05-15"),
    local: "Rua das Flores, 123 - Centro",
    status: "resolvido",
    imagem: "https://images.unsplash.com/photo-1594378915011-515ccb0f57bd?q=80&w=2069&auto=format&fit=crop",
    usuario: "Carlos Silva",
  },
  {
    id: 2,
    titulo: "Iluminação pública quebrada",
    descricao: "Poste de luz com lâmpada queimada há mais de duas semanas, deixando a área muito escura durante a noite.",
    categoria: "iluminacao",
    data: new Date("2023-05-20"),
    local: "Avenida Brasil, 500 - Jardim América",
    status: "pendente",
    imagem: "https://images.unsplash.com/photo-1504544790255-0f5acd3d0cf7?q=80&w=2069&auto=format&fit=crop",
    usuario: "Maria Oliveira",
  },
  {
    id: 3,
    titulo: "Lixo acumulado na praça",
    descricao: "Acúmulo de lixo na Praça da República que está atraindo insetos e gerando mau cheiro.",
    categoria: "lixo",
    data: new Date("2023-05-25"),
    local: "Praça da República - Centro",
    status: "em_analise",
    imagem: "https://images.unsplash.com/photo-1604187354263-33b3181d0018?q=80&w=2070&auto=format&fit=crop",
    usuario: "João Santos",
  },
  {
    id: 4,
    titulo: "Vazamento de água na calçada",
    descricao: "Vazamento constante de água na calçada que está causando desperdício e dificultando a passagem de pedestres.",
    categoria: "vazamentos",
    data: new Date("2023-06-01"),
    local: "Rua dos Pinheiros, 300 - Pinheiros",
    status: "em_analise",
    imagem: "https://images.unsplash.com/photo-1583854630964-a594121188c9?q=80&w=2070&auto=format&fit=crop",
    usuario: "Ana Costa",
  },
  {
    id: 5,
    titulo: "Árvore em risco de queda",
    descricao: "Árvore com tronco comprometido e inclinada, apresentando risco de queda sobre a rua e veículos estacionados.",
    categoria: "areas-verdes",
    data: new Date("2023-06-05"),
    local: "Avenida Paulista, 1000 - Bela Vista",
    status: "resolvido",
    imagem: "https://images.unsplash.com/photo-1619994121345-b161036a3648?q=80&w=2069&auto=format&fit=crop",
    usuario: "Pedro Souza",
  },
  {
    id: 6,
    titulo: "Semáforo com defeito",
    descricao: "Semáforo no cruzamento principal está piscando em amarelo desde ontem, causando confusão e risco de acidentes.",
    categoria: "outros",
    data: new Date("2023-06-10"),
    local: "Cruzamento da Av. Santo Amaro com Rua Joaquim Floriano",
    status: "rejeitado",
    imagem: "https://images.unsplash.com/photo-1614271438954-c3778f99435c?q=80&w=2070&auto=format&fit=crop",
    usuario: "Juliana Ferreira",
  },
  {
    id: 7,
    titulo: "Falta de sinalização em obra",
    descricao: "Obra na calçada sem sinalização adequada, criando riscos para pedestres, especialmente à noite.",
    categoria: "outros",
    data: new Date("2023-06-15"),
    local: "Rua Augusta, 500 - Consolação",
    status: "pendente",
    imagem: "https://images.unsplash.com/photo-1553341640-33f68a30284d?q=80&w=2069&auto=format&fit=crop",
    usuario: "Roberto Almeida",
  },
  {
    id: 8,
    titulo: "Bueiro entupido",
    descricao: "Bueiro completamente entupido que causa alagamentos sempre que chove, já danificou veículos estacionados.",
    categoria: "vazamentos",
    data: new Date("2023-06-20"),
    local: "Rua Voluntários da Pátria, 200 - Santana",
    status: "em_analise",
    imagem: "https://images.unsplash.com/photo-1594226801341-41427b9e8df4?q=80&w=2069&auto=format&fit=crop",
    usuario: "Fernanda Lima",
  },
];

const MockDenunciasComponent = () => {
  return (
    <div>
      {mockDenuncias.map((denuncia) => (
        <div key={denuncia.id} style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
          <h2>{denuncia.titulo}</h2>
          <p>{denuncia.descricao}</p>
          <p><strong>Categoria:</strong> {denuncia.categoria}</p>
          <p><strong>Data:</strong> {denuncia.data.toLocaleDateString()}</p>
          <p><strong>Local:</strong> {denuncia.local}</p>
          <p><strong>Status:</strong> {denuncia.status}</p>
          <p><strong>Usuário:</strong> {denuncia.usuario}</p>
          <img src={denuncia.imagem} alt={denuncia.titulo} style={{ width: "100%", height: "auto" }} />
        </div>
      ))}
    </div>
  );
};

export default MockDenunciasComponent;