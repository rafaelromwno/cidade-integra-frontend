const BemVindo = () => {

    return (
      <section className="bg-azul-paleta text-white p-8 rounded-lg shadow-md m-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <h1 className="text-3xl font-bold mb-4">
              Bem-vindo ao <span className="text-verde-paleta">Cidade Unida</span>!
            </h1>
            <p className="text-lg leading-relaxed">
              Aqui, você pode ajudar a transformar sua cidade ao reportar problemas urbanos como lixo nas ruas e iluminação deficiente. Juntos, vamos tornar nossos <span className="text-verde-paleta">ambientes</span> mais limpos e seguros.
            </p>
            <a href="/CreateDenuncia" className="inline-block bg-verde-paleta hover:bg-verde-escuro-paleta text-white font-bold py-3 px-4 duration-500 rounded-lg shadow-lg transition mt-4">
              Denuncie Já
            </a>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img 
              src="/src/assets/trabalho-equipe.jpg" 
              alt="Imagem de uma equipe de colaboradores trabalhando em um projeto de melhoria urbana" 
              className="w-full h-auto max-w-sm rounded-lg shadow-lg" 
              title="Imagem gerada por Inteligência Artificial"
            />
          </div>
        </div>
      </section>

    );
  };
  
  export default BemVindo;
  