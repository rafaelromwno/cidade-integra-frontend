# 🌐 Cidade Unida - Frontend

Este repositório contém o código-fonte do **frontend** da plataforma **Cidade Unida**, desenvolvido pela equipe **frontend-team**. O projeto utiliza **React**, **Tailwind CSS** e **Firebase** para oferecer uma experiência moderna e responsiva aos usuários.

## 🚀 Tecnologias Utilizadas

- **React** – Biblioteca para construção da interface do usuário.
- **Tailwind CSS** – Framework CSS para estilização eficiente.
- **Firebase** – Autenticação, banco de dados e hospedagem.

## 📦 Instalação e Configuração

Para rodar o projeto localmente, siga os passos abaixo:

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/cidade-unida/cidade-unida-frontend.git
   cd frontend
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Configure as variáveis de ambiente:**
   Crie um arquivo `.env` na raiz do projeto e adicione suas credenciais do Firebase:
   ```
   REACT_APP_FIREBASE_API_KEY=...
   REACT_APP_FIREBASE_AUTH_DOMAIN=...
   REACT_APP_FIREBASE_PROJECT_ID=...
   REACT_APP_FIREBASE_STORAGE_BUCKET=...
   REACT_APP_FIREBASE_MESSAGING_SENDER_ID=...
   REACT_APP_FIREBASE_APP_ID=...
   ```

4. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

O projeto estará disponível em `http://localhost:5173`.

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