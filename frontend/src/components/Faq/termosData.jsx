import React from "react";

export const termosData = [
  {
    question: "Termos de Uso do Site Cidade Unida",
    answer: (
      <ul className="list-disc list-inside text-gray-700">
        <li>
          Não utilize o site para reportar informações falsas ou enganosas.
        </li>
        <li>Respeite as leis locais ao enviar denúncias.</li>
        <li>
          Entenda que as informações fornecidas podem ser compartilhadas com
          autoridades competentes, quando necessário.
        </li>
      </ul>
    ),
  },
  {
    question: "Direitos Autorais das Imagens",
    answer: (
      <>
        <p className="mb-4 text-gray-700">
          As imagens utilizadas neste site foram geradas por Inteligência
          Artificial através da plataforma Canva. Todas as imagens foram criadas
          exclusivamente para o projeto "Cidade Unida" e seguem as diretrizes de
          uso da ferramenta.
        </p>
        <p className="mb-4 text-gray-700">
          Cada imagem possui uma referência de autoria mencionada diretamente no
          código HTML, utilizando o atributo <code>title</code> nas tags{" "}
          <code>&lt;img&gt;</code>. Ao passar o mouse sobre as imagens, você
          verá uma descrição com a fonte e a data de geração.
        </p>
        <p className="text-gray-700">
          Caso tenha dúvidas sobre os direitos autorais das imagens ou precise
          de mais informações, entre em contato conosco pelo email  <a href="mailto:suporte@cidadeunida.com" className="text-green-500">
          suporte@cidadeunida.com
        </a>
          .
        </p>
      </>
    ),
  },
];

export default termosData;
