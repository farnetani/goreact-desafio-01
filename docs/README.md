# Anotações - Farnetani:

## Desafio 01

Configure uma estrutura ReactJS do zero com Babel, Webpack e Webpack Dev Server. Além disso, utilize as ferramentas ESLint, EditorConfig e Prettier durante o desenvolvimento desse projeto.

### Configurando Estrutura ReactJS do zero com Babel, Webpack e Webpack Dev Server

1. Criar o repositório no `github`

![New Repository](https://imgur.com/a/kULjyKT)

![Repository Created](https://imgur.com/a/yy0826B)

Url: `https://github.com/farnetani/goreact-desafio-01`

SSH: `git@github.com:farnetani/goreact-desafio-01.git`

:clap:

2. Criar o diretório

```
mkdir desafio-01
```

3. cd `desafio-01`

```
yarn init -y
```

4. Adicionar projeto ao github pela primeira vez

```
git init
git remote add origin git@github.com:farnetani/goreact-desafio-01.git
git add --all
git commit -m "yarn init da aplicação"

git pull origin master --allow-unrelated-histories

git push -u origin master
```

5. Instalando todas as dependências (pacotes) para a aplicação:

```
## Eslint no modo DEV
yarn add eslint eslint-config-standard eslint-plugin-import eslint-plugin-node eslint-plugin-promise eslint-plugin-standard -D

## Babel e Webpack / Webpack-dev-server no modo DEV
yarn add @babel/core @babel/preset-env @babel/preset-react babel-loader webpack webpack-cli webpack-dev-server -D

## React
yarn add react react-dom

## Lib prop-types para fazermos uma tipagem dentro do nosso código
yarn add prop-types

## Para converter propriedades como estáticas @babel/plugin-proposal-class-properties
yarn add @babel/plugin-proposal-class-properties

```
