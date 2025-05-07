
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";



const StudentCard = ({ name, role, avatar, description, github, linkedin, email }) => {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <CardHeader className="text-center pb-2">
        <div className="mx-auto mb-4">
          <Avatar className="h-24 w-24">
            <AvatarImage src={avatar} alt={name} />
            <AvatarFallback className="bg-verde text-white text-xl">
              {name.split(" ").map(n => n[0]).join("")}
            </AvatarFallback>
          </Avatar>
        </div>
        <CardTitle className="text-azul">{name}</CardTitle>
        <CardDescription className="font-medium text-verde-escuro">{role}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground text-center">{description}</p>
      </CardContent>
      <CardFooter className="flex justify-center gap-2 pt-2">
        {github && (
          <Button variant="ghost" size="icon" asChild>
            <a href={github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="h-5 w-5" />
            </a>
          </Button>
        )}
        {linkedin && (
          <Button variant="ghost" size="icon" asChild>
            <a href={linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>
        )}
        {email && (
          <Button variant="ghost" size="icon" asChild>
            <a href={`mailto:${email}`} aria-label="Email">
              <Mail className="h-5 w-5" />
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

const SobrePage = () => {
  const students = [
    {
      name: "Ana Silva",
      role: "Desenvolvedora Frontend",
      description: "Especialista em React e interfaces responsivas, focada em experiência do usuário e acessibilidade.",
      github: "https://github.com/anasilva",
      linkedin: "https://linkedin.com/in/anasilva"
    },
    {
      name: "Lucas Oliveira",
      role: "Desenvolvedor Backend",
      description: "Desenvolvedor com experiência em API RESTful, bancos de dados e segurança de aplicações.",
      github: "https://github.com/lucasoliveira",
      email: "lucas@email.com"
    },
    {
      name: "Juliana Santos",
      role: "UX/UI Designer",
      description: "Designer apaixonada por criar interfaces intuitivas e acessíveis para todos os usuários.",
      linkedin: "https://linkedin.com/in/julianasantos"
    },
    {
      name: "Rafael Costa",
      role: "Desenvolvedor Full Stack",
      description: "Programador versátil com conhecimento em diversas tecnologias web e desenvolvimento ágil.",
      github: "https://github.com/rafaelcosta",
      linkedin: "https://linkedin.com/in/rafaelcosta"
    },
    {
      name: "Fernanda Lima",
      role: "DevOps",
      description: "Especialista em infraestrutura, automação e integração contínua para aplicações web.",
      email: "fernanda@email.com"
    },
    {
      name: "Bruno Martins",
      role: "QA & Tester",
      description: "Profissional dedicado a garantir a qualidade e estabilidade das aplicações desenvolvidas.",
      linkedin: "https://linkedin.com/in/brunomartins"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-azul mb-4">Sobre o Projeto</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              O Urban Watch Verde é um projeto desenvolvido por estudantes de Tecnologia da Informação
              com o objetivo de conectar cidadãos e autoridades para a solução de problemas urbanos.
              Nossa plataforma facilita o registro, acompanhamento e resolução de denúncias relacionadas
              a infraestrutura, meio ambiente e serviços públicos.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-bold text-azul mb-8 text-center">Nossa Equipe</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {students.map((student, index) => (
                <StudentCard key={index} {...student} />
              ))}
            </div>
          </div>

          <div className="bg-cinza/20 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-azul mb-4 text-center">Nosso Compromisso</h2>
            <p className="text-center text-muted-foreground">
              Estamos comprometidos com a transparência, acessibilidade e eficiência na resolução de problemas urbanos.
              O Urban Watch Verde é mais que um projeto acadêmico - é uma iniciativa que busca melhorar a qualidade
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
