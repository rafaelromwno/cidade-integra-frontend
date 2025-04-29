import EscudoPrivacidade from '/src/assets/escudo-privacidade.jpg';
import CidadeSustentavel from '/src/assets/cidade-sustentavel.jpg';
import Acessibilidade from '/src/assets/acessibilidade.jpg';


const NossosValores = () => {
    return (
      <div className="m-6">
        <h2 className="text-3xl font-bold tracking-tight text-azul-paleta sm:text-4xl mb-6">Nossos Valores</h2>
        
        {/* Card 1 */}
        <div className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg overflow-hidden mb-5">
          <img 
            src={EscudoPrivacidade}
            alt="Escudo que representa a confiança e a privacidade" 
            className="w-1/3 md:w-1/5 h-auto object-cover" 
            title="Fonte: gerado por Inteligência Artificial Canva em 27/08/2024." 
          />
          <div className="p-6 text-azul-paleta md:w-4/5">
            <h2 className="text-lg font-bold mb-4 sm:text-center">Priorizamos a segurança das suas informações para garantir a sua confiança.</h2>
          </div>
        </div>
  
        {/* Card 2 */}
        <div className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg overflow-hidden mb-5">
          <img 
            src={CidadeSustentavel}
            alt="Elemento gráfico de cidade sustentável com várias árvores e paisagens naturais" 
            className="w-1/3 md:w-1/5 h-auto object-cover" 
            title="Fonte: gerado por Inteligência Artificial Canva em 27/08/2024." 
          />
          <div className="p-6 text-azul-paleta md:w-4/5">
            <h2 className="text-lg font-bold mb-4 text-center">Facilitamos denúncias de problemas ambientais para promover a proteção do nosso planeta.</h2>
          </div>
        </div>
  
        {/* Card 3 */}
        <div className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg overflow-hidden mb-5">
          <img 
            src={Acessibilidade}
            alt="Elemento gráfico que simboliza a acessibilidade" 
            className="w-1/3 md:w-1/5 h-auto object-cover" 
            title="Fonte: gerado por Inteligência Artificial Canva em 27/08/2024." 
          />
          <div className="p-6 text-azul-paleta md:w-4/5">
            <h2 className="text-lg font-bold mb-4 text-center">Nosso site é acessível a todos, garantindo que todos possam participar e ajudar.</h2>
          </div>
        </div>
      </div>
    );
  };
  
  export default NossosValores;
