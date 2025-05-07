import StudentCard from "@/components/sobre/StudentCard";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Jeronimo from "../../public/jeronimo-barbieri.jpg";
import Rafael from "../../public/rafael-romano.jpg";
import Miguel from "../../public/miguel-morandini.jpg";
import Victor from "../../public/victor-hugo.jpg";
import Pedro from "../../public/pedro-ferreira-leite.png";

const SobrePage = () => {

  const equipe = [
    {
      name: "Jeronimo Barbieri",
      role: "Designer UI/UX",
      avatar: Jeronimo,
      description: '',
      github: '',
      linkedin: "https://www.instagram.com/jbarbieri__/",
      email: ''
    },
    {
      name: "Rafael Romano Silva",
      role: "Gestor de Projeto",
      avatar: Rafael,
      description: '',
      github: '',
      linkedin: "https://www.linkedin.com/in/rafael-romano-silva",
      email: ''
    },
    {
      name: "Miguel Morandini",
      role: "Desenvolvedor FullStack",
      avatar: Miguel,
      description: '',
      github: '',
      linkedin: "https://www.linkedin.com/in/miguel-morandini-19350128a",
      email: ''
    },
    {
      name: "Pedro Ferreira Leite",
      role: "Designer UI/UX",
      avatar: Pedro,
      description: '',
      github: '',
      linkedin: "",
      email: ''
    },
    {
      name: "Victor Hugo Testi", 
      role: "Desenvolvedor FullStack",
      avatar: Victor,
      description: '',
      github: '',
      linkedin: "https://www.linkedin.com/in/victor-hugo-malipense-testi-994297324/",
      email: ''
    },
    {
      name: "Luiz Felipe", 
      role: "Mentor",
      avatar: '',
      description: '',
      github: '',
      linkedin: "",
      email: ''
    },
    {
      name: "Lemuel", 
      role: "Mentor",
      avatar: '',
      description: '',
      github: '',
      linkedin: "",
      email: ''
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">

            <h1 className="text-4xl font-bold text-azul mb-4">Sobre o Projeto</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-justify">
              O Cidade Unida é um projeto desenvolvido por estudantes de Desenvolvimento de Software Multiplataforma com o objetivo de conectar cidadãos e autoridades para a solução de problemas urbanos.
              Nossa plataforma facilita o registro, acompanhamento e resolução de denúncias relacionadas
              a infraestrutura, meio ambiente e serviços públicos.
            </p>

          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-bold text-azul mb-8 text-center">Nossa Equipe</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {equipe.map((student, index) => (
                <StudentCard key={index} {...student} />
              ))}
            </div>
          </div>

          <div className="bg-cinza/20 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-azul mb-4 text-center">Nosso Compromisso</h2>
            <p className="text-center text-muted-foreground">
              Estamos comprometidos com a transparência, acessibilidade e eficiência na resolução de problemas urbanos.
              O Cidade Unida é mais que um projeto acadêmico - é uma iniciativa que busca melhorar a qualidade
              de vida nas cidades através da tecnologia e participação cidadã.
            </p>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SobrePage;
