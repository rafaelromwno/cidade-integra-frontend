import Jeronimo from "../../../public/jeronimo-barbieri.jpg";
import Rafael from "../../../public/rafael-romano.jpg";
import Miguel from "../../../public/miguel-morandini.jpg";
import Victor from "../../../public/victor-hugo.jpg";
import Pedro from "../../../public/pedro-ferreira-leite.png";

const NossaEquipe = () => {
    
    const equipe = [
      {
        nome: "Jeronimo Barbieri",
        cargo: "Designer UI/UX",
        imagem: Jeronimo,
        link: "https://www.instagram.com/jbarbieri__/"
      },
      {
        nome: "Rafael Romano Silva",
        cargo: "Gestor de Projeto",
        imagem: Rafael,
        link: "https://www.linkedin.com/in/rafael-romano-silva"
      },
      {
        nome: "Miguel Morandini",
        cargo: "Desenvolvedor",
        imagem: Miguel,
        link: "https://www.linkedin.com/in/miguel-morandini-19350128a"
      },
      {
        nome: "Pedro Ferreira Leite",
        cargo: "Analista de Dados",
        imagem: Pedro,
        link: ""
      },
      {
        nome: "Victor Hugo Testi", 
        cargo: "Desenvolvedor",
        imagem: Victor,
        link: "https://www.linkedin.com/in/victor-hugo-malipense-testi-994297324/"
      }
    ];
  
    return (
      <div className="bg-white py-12 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-azul-paleta sm:text-4xl">Nossa Equipe</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 text-justify">
              Somos um grupo de estudantes do curso de Desenvolvimento de Software Multiplataforma da FATEC Matão. Este projeto é parte do nosso trabalho acadêmico, nossa equipe está comprometida a utilizar o conhecimento adquirido no curso para desenvolver uma solução eficaz e inovadora que contribua para uma cidade mais limpa e segura.
            </p>
          </div>
          <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
            {equipe.map((membro, index) => (
              <li key={index}>
                <div className="flex items-center gap-x-6">
                  <img className="h-24 w-24 rounded-full" src={membro.imagem} alt={membro.nome} />
                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900 cursor-pointer">
                      {membro.link ? (
                        <a href={membro.link} target="_blank" rel="noopener noreferrer">{membro.nome}</a>
                      ) : (
                        membro.nome
                      )}
                    </h3>
                    <p className="text-sm font-semibold leading-6 text-indigo-600">{membro.cargo}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };
  
  export default NossaEquipe;
  