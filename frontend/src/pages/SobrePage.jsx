import StudentCard from "@/components/sobre/StudentCard";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { equipe } from "@/data/equipe";

const SobrePage = () => {
  

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          {/* Seção: Sobre o Projeto */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-azul mb-6">
              Sobre o Projeto
            </h1>

            <div className="bg-white shadow-md p-8 rounded-lg border border-gray-200 text-justify text-lg text-gray-700">
              <p className="mb-4 ">
                O Software{" "}
                <span className="text-azul font-semibold">Cidade Unida</span> é
                um projeto desenvolvido por estudantes da{" "}
                <span className="font-semibold">
                  Faculdade de Tecnologia do Estado de São Paulo - Matão "Luiz
                  Marchesan"
                </span>{" "}
                do curso de{" "}
                <span className="font-semibold">
                  Desenvolvimento de Software Multiplataforma
                </span>
                , com o objetivo de conectar cidadãos e autoridades para a
                solução de problemas urbanos.
              </p>
              <p>
                Nossa plataforma facilita o{" "}
                <span className="text-verde font-semibold">registro</span>,{" "}
                <span className="text-verde font-semibold">acompanhamento</span>{" "}
                e <span className="text-verde font-semibold">resolução</span> de
                denúncias relacionadas à infraestrutura, meio ambiente e
                serviços públicos.
              </p>
            </div>
          </div>

          <h1 className="text-4xl font-bold text-azul mb-6 text-center">
            Nosso Compromisso
          </h1>

          {/* Seção: Nosso Compromisso */}
          <div className="bg-white shadow-md p-8 rounded-lg border border-gray-200 mb-12">
            <blockquote className="text-lg text-gray-700 border-l-4 border-azul pl-4">
              <p className="text-justify text-gray-700">
                Estamos comprometidos com a{" "}
                <span className="text-verde font-semibold">transparência</span>,{" "}
                <span className="text-verde font-semibold">acessibilidade</span>
                , <span className="text-verde font-semibold">privacidade</span>{" "}
                e <span className="text-verde font-semibold">eficiência</span>{" "}
                na resolução de problemas urbanos. O Cidade Unida é mais que um
                projeto acadêmico - é uma iniciativa que busca melhorar a
                qualidade de vida nas cidades através da tecnologia e
                participação cidadã!
              </p>
            </blockquote>
          </div>

          <h2 className="text-4xl font-bold text-azul mb-6 text-center">
            Nossa Equipe
          </h2>

          {/* Seção: Nossa Equipe */}
          <div className="mb-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {equipe.map((student, index) => (
                <StudentCard key={index} {...student} />
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SobrePage;
