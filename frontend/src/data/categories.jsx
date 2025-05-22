import { AlertCircle, Droplet, Trash, Lightbulb, Loader, TreeDeciduous } from "lucide-react";

export const categories = [
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