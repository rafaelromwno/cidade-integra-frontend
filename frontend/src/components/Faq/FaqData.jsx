import React from "react";

export const faqData = [
  {
    question: "O que é a Cidade Unida?",
    answer: (
      <p>
        A Cidade Unida é uma iniciativa fictícia de software dedicada ao
        desenvolvimento de soluções tecnológicas para promover cidades mais
        organizadas, sustentáveis e conectadas.
      </p>
    ),
  },
  {
    question: "Quais são os principais objetivos da Cidade Unida?",
    answer: (
      <ul className="list-disc list-inside text-gray-700">
        <li>Facilitar a denúncia de problemas ambientais e urbanos.</li>
        <li>Promover a participação cidadã em decisões públicas.</li>
        <li>Monitorar e melhorar a qualidade ambiental.</li>
        <li>
          Apoiar a implementação de políticas públicas voltadas à
          sustentabilidade.
        </li>
      </ul>
    ),
  },
  {
    question: "Como o software Cidade Unida pode ajudar minha comunidade?",
    answer: (
      <>
        <p className="mb-2">
          O software Cidade Unida oferece diversas funcionalidades, como:
        </p>
        <ul className="list-disc list-inside text-gray-700">
          <li>Gerenciamento de denúncias de problemas ambientais.</li>
          <li>Plataforma para participação cidadã.</li>
          <li>Monitoramento de indicadores ambientais.</li>
          <li>Gestão de políticas públicas municipais.</li>
        </ul>
      </>
    ),
  },
  {
    question: "Como posso contribuir para a Cidade Unida?",
    answer: (
      <p>
        Entre em contato conosco pelo email{" "}
        <a href="mailto:suporte@cidadeunida.com" className="text-green-500">
          suporte@cidadeunida.com
        </a>
        . Estamos sempre abertos a parcerias e colaborações com pessoas e
        organizações que compartilham nossa visão de cidades sustentáveis.
      </p>
    ),
  },
  {
    question: "Onde posso obter mais informações sobre a Cidade Unida?",
    answer: (
      <p>
        Visite nossos perfis no LinkedIn, disponíveis na seção "Nossa Equipe" na
        página inicial do site.
      </p>
    ),
  },
  {
    question: "O projeto é uma iniciativa governamental?",
    answer: (
      <p>
        Não, o Projeto Cidade Unida é uma iniciativa acadêmica desenvolvida por
        alunos da Fatec Matão - “Luiz Marchesan”. Nosso objetivo é facilitar o
        processo de relatar problemas no seu município.
      </p>
    ),
  },
  {
    question: "Como posso entrar em contato com vocês?",
    answer: (
      <p>
        Utilize nosso email para{" "}
        <a href="mailto:suporte@cidadeunida.com" className="text-green-500">
          suporte@cidadeunida.com
        </a>
        . Verifique as Perguntas Frequentes antes de enviar sua mensagem.
      </p>
    ),
  },
  {
    question: "O que posso relatar?",
    answer: (
      <p>
        Utilize a Cidade Unida para relatar problemas como lixo,
        buracos ou luzes de rua quebradas que necessitam de conserto, limpeza ou
        remoção.
      </p>
    ),
  },
  {
    question: "O que não devo relatar?",
    answer: (
      <ul className="list-disc list-inside text-gray-700">
        <li>
          Para questões urgentes, como vazamentos de gás ou quedas de árvores,
          entre em contato diretamente com as autoridades competentes.
        </li>
      </ul>
    ),
  },
  {
    question: "As denúncias são públicas?",
    answer: (
      <p>
        Sim, mas você pode optar por denunciar{" "}
        <span className="font-bold">anonimamente</span>, ocultando seus dados
        pessoais. Todos os usuários devem estar logados para realizar uma
        denúncia.
      </p>
    ),
  },
  {
    question: "Por que preciso fornecer meu nome e email?",
    answer: (
      <p>
        Essas informações são necessárias para que o departamento responsável
        possa contatá-lo. Seu email não será publicado, e você pode optar por
        enviar sua denúncia anonimamente.
      </p>
    ),
  },
  {
    question: "Como faço para me registrar?",
    answer: (
      <p>
        Acesse a página "Criar Conta" disponível 
        no site da Cidade Unida.
      </p>
    ),
  },
  {
    question: "Esqueci minha senha. O que devo fazer?",
    answer: (
      <p>
        Acesse a página "Recuperar Senha", forneça seu email e uma nova senha. Você receberá um email para
        confirmar a alteração.
      </p>
    ),
  },
  {
    question: "Quero alterar minha senha ou endereço de email.",
    answer: (
      <p>
        Você pode realizar essas alterações na página "Entrar".
        .
      </p>
    ),
  },
  {
    question: "O site não está funcionando. O que fazer?",
    answer: (
      <ul className="list-disc list-inside text-gray-700">
        <li>Verifique sua conexão com a internet.</li>
        <li>
          Se o problema persistir, envie-nos uma mensagem pelo email{" "}
          <a href="mailto:suporte@cidadeunida.com" className="text-green-500">
            suporte@cidadeunida.com
          </a>
          , incluindo detalhes do erro e do navegador utilizado.
        </li>
      </ul>
    ),
  },
  {
    question: "Meu endereço não está no Cidade Unida. O que fazer?",
    answer: (
      <ul className="list-disc list-inside text-gray-700">
        <li>Certifique-se de que o endereço está correto e completo.</li>
        <li>
          Caso o endereço ainda não seja encontrado, envie uma mensagem pelo email{" "}
          <a href="mailto:suporte@cidadeunida.com" className="text-green-500">
            suporte@cidadeunida.com
          </a>
          , incluindo os detalhes do endereço que deseja adicionar.
        </li>
      </ul>
    ),
  },
];

export default faqData;
