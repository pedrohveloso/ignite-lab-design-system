*Comece o projeto executando o comando > npm create vite@latest*

- Em seguida instale as dependências com > npm install

Inicie o projeto com > npm run dev

Instale as bibliotecas (Como dependências de desenvolvimento) >

- Tailwind
- Postcss
- Autoprefixer

> npm install -D tailwindcss postcss autoprefixer

Depois execute > npx tailwindcss init -p

Adicione o Storybook com o comando:

> npx sb init --builder @storybook/builder-vite --use-npm

Para executar o Storybook execute o comando > npm run storybook

Instale o pacote clsx com o comando > npm install --save clsx

Instale o pacote Slot do Radix UI com o comando:
> npm install @radix-ui/react-slot

Instale a biblioteca PhosphorReact
> npm install phosphor-react

Instale o pacote Checkbox do Radix UI com o comando:
> npm install @radix-ui/react-checkbox

Instale o pacote Deployer do Storybook com o comando:
> npm i @storybook/storybook-deployer --save-dev

Instale o addon de acessibilidade a11y do Storybook:
> npm install @storybook/addon-a11y

Instale o addon de testes do Storybook:
> npm install @storybook/addon-interactions @storybook/jest @storybook/testing-library @storybook/test-runner -D

Instale o Axios para fazer chamadas http (chamada entre o front-end e o back-end)
> npm install axios


# Testes no Storybook 

- Adicione ao package.json o seguinte:
  > "test-storybook": "test-storybook"

- Depois execute no terminal:
  > npm run test-storybook
  Ou
  > npm run test-storybook -- --watch
  Para rodar testes enquanto realiza alterações nos componentes (Não funcionou)

- Instale o MSW (Mock Service Worker) integrado ao storybook
 > npm install msw msw-storybook-addon -D
 Depois execute o comando
  > npx msw init public/
# GitHub CLI
 
 **Chocolatey install**
  - Install: > choco install gh
  - Upgrade: > choco upgrade gh

> gh auth login
- Para conectar o seu dispositivo ao GitHub

> gh repo create
- Para criar o repositorio