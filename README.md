
# 🌐 Cidade Integra - Frontend

Este repositório contém o código-fonte do  **frontend**  da plataforma  **Cidade Integra**, desenvolvido pela equipe  **frontend-team**. O projeto utiliza  **React**,  **Tailwind CSS**,  **Supabase**  e  **Firebase**  para oferecer uma experiência moderna e responsiva aos usuários.

Confira o deploy do projeto:  [Cidade Integra](https://cidadeintegra.web.app)

## 🌍 Sobre o Projeto

O  **Cidade Integra**  é uma plataforma online que permite aos cidadãos registrarem denúncias urbanas, facilitando a comunicação entre a população e as autoridades responsáveis e a resolução de problemas que impactam diretamente a qualidade de vida nas cidades. O projeto está alinhado ao  **Objetivo de Desenvolvimento Sustentável (ODS) 11 da ONU**, que visa tornar as cidades mais  **inclusivas, seguras, resilientes e sustentáveis**.

### 🚩 Objetivo

Nosso objetivo é desenvolver um site funcional que aplique os conhecimentos adquiridos ao longo do curso, promovendo boas práticas de desenvolvimento web, design e colaboração em equipe. Além disso, buscamos gerar impacto social real ao fomentar o engajamento cívico e facilitar a atuação do poder público na resolução de demandas urbanas.

### 🎯 Qual o Problema a ser Resolvido?

Atualmente, a comunicação entre os cidadãos e os serviços públicos muitas vezes é ineficiente, descentralizada ou inacessível, dificultando a resolução de problemas urbanos cotidianos. Isso gera frustração na população, acúmulo de demandas não atendidas e degradação do espaço público.

### ✅ Solução Proposta

O  **Cidade Integra**  propõe uma  **plataforma web responsiva**  e de fácil uso, onde os cidadãos possam:

-   Registrar e acompanhar denúncias urbanas;
    
-   Interagir com atualizações das autoridades ou administradores do sistema.
    

### 🧑‍🤝‍🧑 Público-Alvo

A plataforma é voltada principalmente para:

-   **Cidadãos**  que desejam reportar problemas urbanos de forma prática e transparente;
    
-   **Órgãos públicos municipais**  interessados em aprimorar a gestão de demandas urbanas;
    

## ⚙️ Funcionalidades

-   📌  **Cadastro de denúncias:**  com campos para descrição, localização (CEP ou Endereço) e upload de imagens;
    
-   👥  **Cadastro de Usuários:**  com campos para nome, e-mail e senha;
    
-   🔍  **Consulta pública:**  listagem das denúncias por localidade, status ou categoria;
    
-   👤  **Sistema de autenticação:**  para usuários (cidadãos) e administradores (órgãos responsáveis);
    
-   🧭  **Painel administrativo:**  para acompanhamento, priorização e resposta das denúncias;
    
-   📝  **Histórico de atualizações**  das denúncias (timeline);
    
-   📱  **Interface responsiva**  e acessível via dispositivos móveis e desktop.
    

Esse modelo visa  **centralizar a comunicação**,  **organizar dados úteis para as prefeituras**  e  **fortalecer a cultura da cidadania ativa**.

## 🧑‍💻 Boas Práticas Adotadas

O desenvolvimento do projeto é guiado por boas práticas que garantem a qualidade, organização e sustentabilidade do código:

-   ✅  **Versionamento com Git**  e organização por branches (`main`,  `develop`,  `feature/*`)
    
-   ✅  **Commits semânticos**  utilizando  [Conventional Commits](https://www.conventionalcommits.org/)
    
-   ✅  **Código limpo**  com padronização e uso de linters
    
-   ✅  **Documentação clara**  em arquivos README, Notion e Artigo Científico
    
-   ✅  **Componentização**  no frontend (React)
    
-   ✅  **Separação de responsabilidades**  entre frontend, backend e banco de dados
    
-   ✅  **Testes de integração manuais**  e  **Testes Funcionais**, além de Smoke test e Lighthouse
    
-   ✅  **Adoção de princípios SOLID e DRY**  quando aplicável
    

## 🔧 Tecnologias Utilizadas

-   React.js (frontend)
    
-   Firebase Authentication e Firestore (backend e banco de dados)
    
-   Supabase Storage (apenas armazenamento de imagens)
    
-   Firebase Hosting
    
-   Figma (protótipos e UI)
    
-   Git e GitHub
    

## 🛠 Estrutura do Projeto

```
/frontend
├── src
|    ├──📁 components    # Componentes reutilizáveis da interface 
|    ├──📁 context 	     # Gerenciamento de estado global com React Context API
|    ├──📁 data          # Dados mockados ou estáticos
|    ├──📁 firebase      # Configuração e serviços do Firebase
|    ├──📁 hooks         # Hooks personalizados reutilizáveis
|    ├──📁 lib           # Integrações com bibliotecas externas e serviços auxiliares
|    ├──📁 pages         # Páginas principais da aplicação
|    ├──📁 routes        # Definição e proteção de rotas da aplicação
|    ├──📁 schema        # Esquemas de validação de formulários e dados      
|    ├──📁 supabase      # Configuração do Supabase para testes ou alternativa ao Firebase       
|    ├──📁 utils         # Funções utilitárias gerais
| 	 ├──📄 App.jsx       # Componente principal da aplicação React      
| ├──📄 package.json     # Dependências e scripts do projeto   
| ├──📄 vite.config.js   # Configurações do Vite


```

## 🔀 Estrutura de Branches

-   `main`: Contém a versão estável do projeto.
-   `develop`: Branch principal para o desenvolvimento e integração de novas funcionalidades antes de serem mescladas na  `main`.

## 🔹 Padrões de Commits e Pull Requests

Para manter um histórico limpo, siga os padrões abaixo:

### Commits

Utilize  **Conventional Commits**, por exemplo:

```
feat: adicionar botão de envio no formulário
fix: corrigir bug no modal de login

```

Tipos comuns:

-   `feat`: Nova funcionalidade
-   `fix`: Correção de erro
-   `docs`: Alterações na documentação
-   `style`: Estilização (sem impacto no código)
-   `refactor`: Melhorias no código sem mudar funcionalidades

### Pull Requests

1.  **Crie uma nova branch**:
    
    git checkout -b feature/nome-da-feature
    
2.  **Faça suas alterações e commit**  seguindo o padrão.
    
3.  **Envie para o repositório remoto:**
    
    git push origin feature/nome-da-feature
    
4.  **Abra um Pull Request**  e aguarde a revisão da equipe.
    

### 🔹 Como Enviar um Pull Request (PR)

1.  **Crie um Fork**  do repositório.
    
2.  **Crie uma nova branch**  descritiva:
    

```bash
git checkout -b feature/nome-da-feature

```

3.  **Faça as alterações e commits**  seguindo o padrão.
    
4.  **Envie as alterações para seu Fork:**
    

```bash
  git push origin feature/nome-da-feature

```

5.  **Abra um Pull Request**  no repositório principal e descreva suas alterações.
