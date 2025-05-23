import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const StudentCard = ({
  name,
  role,
  avatar,
  description,
  github,
  linkedin,
  email,
}) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="h-full"
    >
      <Card className="h-full flex flex-col border-t-4 border-t-verde hover:shadow-xl transition-all overflow-hidden">
        <CardHeader className="text-center pb-2 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
          <div className="mx-auto mb-4">
            <Avatar className="h-24 w-24 ring-2 ring-verde ring-offset-2">
              <AvatarImage src={avatar} alt={name} />
              <AvatarFallback className="bg-verde text-white text-xl">
                {name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
          </div>
          <CardTitle className="text-azul">{name}</CardTitle>
          <CardDescription className="font-medium text-verde-escuro">
            {role}
          </CardDescription>
        </CardHeader>

        {/* Conteúdo com crescimento para empurrar o rodapé */}
        <CardContent className="pt-4 px-6 flex-grow">
          <p className="text-muted-foreground text-center">{description}</p>
        </CardContent>

        {/* Rodapé fixo na parte inferior */}
        <CardFooter className="flex justify-center gap-2 pt-2 bg-gray-50 dark:bg-gray-800">
          {github && (
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="hover:bg-verde/10 hover:text-verde-escuro"
            >
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </Button>
          )}
          {linkedin && (
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="hover:bg-verde/10 hover:text-verde-escuro"
            >
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
          )}
          {email && (
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="hover:bg-verde/10 hover:text-verde-escuro"
            >
              <a href={`mailto:${email}`} aria-label="Email">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default StudentCard;
