
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { AlertCircle, Droplet, Trash, Lightbulb, Loader, TreeDeciduous } from "lucide-react";

const CategoryCard = ({ icon, title, description, link }) => (
  <Card className="hover:shadow-lg transition-shadow">
    <Link to={link}>
      <CardContent className="p-6 flex flex-col items-center text-center">
        <div className="mb-4 text-verde-escuro">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Link>
  </Card>
);

const CategoriesSection = () => {
  const categories = [
    {
      icon: <Droplet className="h-10 w-10" />,
      title: "Vazamentos",
      description: "Problemas com água e esgoto, vazamentos e enchentes",
      link: "/denuncias?categoria=vazamentos"
    },
    {
      icon: <Lightbulb className="h-10 w-10" />,
      title: "Iluminação",
      description: "Postes com problemas ou áreas sem iluminação adequada",
      link: "/denuncias?categoria=iluminacao"
    },
    {
      icon: <Loader className="h-10 w-10" />,
      title: "Buracos",
      description: "Buracos em ruas, calçadas e outros espaços públicos",
      link: "/denuncias?categoria=buracos"
    },
    {
      icon: <Trash className="h-10 w-10" />,
      title: "Lixo",
      description: "Acúmulo de lixo, problemas na coleta ou descarte irregular",
      link: "/denuncias?categoria=lixo"
    },
    {
      icon: <TreeDeciduous className="h-10 w-10" />,
      title: "Áreas Verdes",
      description: "Manutenção de praças, parques e áreas verdes",
      link: "/denuncias?categoria=areas-verdes"
    },
    {
      icon: <AlertCircle className="h-10 w-10" />,
      title: "Outros",
      description: "Demais problemas urbanos que precisam de atenção",
      link: "/denuncias?categoria=outros"
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4 text-azul">Categorias de Problemas</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Reporte problemas urbanos de diversas categorias e ajude a melhorar a cidade para todos.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <CategoryCard 
              key={index}
              icon={category.icon}
              title={category.title}
              description={category.description}
              link={category.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
