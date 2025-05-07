import React from 'react'
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

export default StudentCard