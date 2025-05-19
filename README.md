# 🌐 Cidade Integra - Frontend

Este repositório contém o código-fonte do **frontend** da plataforma **Cidade Integra**, desenvolvido pela equipe **frontend-team**. O projeto utiliza **React**, **Tailwind CSS** e **Firebase** para oferecer uma experiência moderna e responsiva aos usuários.

## 🌍 Sobre o Projeto

O **Cidade Integra** é uma plataforma online que permite aos cidadãos registrarem denúncias urbanas, facilitando a comunicação entre a população e as autoridades responsáveis. O projeto está alinhado ao **Objetivo de Desenvolvimento Sustentável (ODS) 11 da ONU**, que visa tornar as cidades mais **inclusivas, seguras, resilientes e sustentáveis**.

### 🚩 Objetivo

Nosso objetivo é desenvolver um site funcional que aplique os conhecimentos adquiridos ao longo do curso, promovendo boas práticas de desenvolvimento web, design e colaboração em equipe.

### 🎯 Qual o Problema a ser Resolvido?

Atualmente, a comunicação entre os cidadãos e os serviços públicos muitas vezes é ineficiente, descentralizada ou inacessível, dificultando a resolução de problemas urbanos cotidianos. Isso gera frustração na população, acúmulo de demandas não atendidas e degradação do espaço público.

### ✅ Solução Proposta

O **Cidade Integra** propõe uma **plataforma web responsiva** e de fácil uso, onde os cidadãos possam:

-   Registrar e acompanhar denúncias urbanas;
    
-   Interagir com atualizações das autoridades ou administradores do sistema.

### 🧑‍🤝‍🧑 Público-Alvo

A plataforma é voltada principalmente para:

-   **Cidadãos** que desejam reportar problemas urbanos de forma prática e transparente;
    
-   **Órgãos públicos municipais** interessados em aprimorar a gestão de demandas urbanas;

## ⚙️ Funcionalidades

-   📌 **Cadastro de denúncias:** com campos para descrição, localização via mapa e upload de imagens;
    
-   🔍 **Consulta pública:** listagem das denúncias por região, status ou categoria;
    
-   👤 **Sistema de autenticação:** para usuários e administradores;
    
-   🧭 **Painel administrativo:** para acompanhamento, priorização e resposta das denúncias;
    
-   📝 **Histórico de atualizações** das denúncias (timeline);
    

Esse modelo visa **centralizar a comunicação**, **organizar dados úteis para as prefeituras** e **fortalecer a cultura da cidadania ativa**.

## 🧑‍💻 Boas Práticas Adotadas

O desenvolvimento do projeto é guiado por boas práticas que garantem a qualidade, organização e sustentabilidade do código:

-   ✅ **Versionamento com Git** e organização por branches (`main`, `develop`, `feature/*`)
    
-   ✅ **Commits semânticos** utilizando [Conventional Commits](https://www.conventionalcommits.org/)
    
-   ✅ **Código limpo** com padronização e uso de linters
    
-   ✅ **Documentação clara** em arquivos README, Wiki e comentários no código
    
-   ✅ **Componentização** no frontend (React)
    
-   ✅ **Separação de responsabilidades** entre frontend, backend e banco de dados
    
-   ✅ **Testes unitários e de integração** (a ser implementado)
    
-   ✅ **Adoção de princípios SOLID e DRY** quando aplicável

## 🚀 Tecnologias Utilizadas

- **React** – Biblioteca para construção da interface do usuário.
- **Tailwind CSS** – Framework CSS para estilização eficiente.
- **Firebase** – Autenticação, banco de dados e hospedagem.

## 🛠 Estrutura do Projeto

```
/frontend
│-- src
│   │-- components   # Componentes reutilizáveis
│   │-- pages        # Páginas principais
│   │-- hooks        # Hooks customizados
│   │-- services     # Integração com Firebase e APIs
│   │-- styles       # Estilos globais
│   └-- App.jsx      # Arquivo principal
│-- public           # Arquivos estáticos
│-- package.json     # Dependências do projeto
└-- vite.config.js   # Configuração do Vite
```

## 🔀 Estrutura de Branches

- `main`: Contém a versão estável do projeto.
- `develop`: Branch principal para o desenvolvimento e integração de novas funcionalidades antes de serem mescladas na `main`.


## 🔹 Padrões de Commits e Pull Requests

Para manter um histórico limpo, siga os padrões abaixo:

### Commits

Utilize **Conventional Commits**, por exemplo:
```
feat: adicionar botão de envio no formulário
fix: corrigir bug no modal de login
```

Tipos comuns:
- `feat`: Nova funcionalidade
- `fix`: Correção de erro
- `docs`: Alterações na documentação
- `style`: Estilização (sem impacto no código)
- `refactor`: Melhorias no código sem mudar funcionalidades

### Pull Requests

1. **Crie uma nova branch**:
   ```bash
   git checkout -b feature/nome-da-feature
   ```
2. **Faça suas alterações e commit** seguindo o padrão.
3. **Envie para o repositório remoto:**
   ```bash
   git push origin feature/nome-da-feature
   ```
4. **Abra um Pull Request** e aguarde a revisão da equipe.



