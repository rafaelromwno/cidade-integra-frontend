import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

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

export default CategoryCard;