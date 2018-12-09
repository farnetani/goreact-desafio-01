# Anotações - Farnetani:

## Desafio 01

Configure uma estrutura ReactJS do zero com Babel, Webpack e Webpack Dev Server. Além disso, utilize as ferramentas ESLint, EditorConfig e Prettier durante o desenvolvimento desse projeto.

### Configurando Estrutura ReactJS do zero com Babel, Webpack e Webpack Dev Server

1. Criar o repositório no `github`

![New Repository](https://i.imgur.com/rlzTpO5.png)

![Repository Created](https://i.imgur.com/VitiUBx.png)

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

## Para converter propriedades como estáticas @babel/plugin-proposal-class-properties
yarn add @babel/plugin-proposal-class-properties -D

## React
yarn add react react-dom

## Lib prop-types para fazermos uma tipagem dentro do nosso código
yarn add prop-types

## SASS
yarn add css-loader node-sass sass-loader style-loader -D
```

Devemos ter algo conforme o nosso `package.json` abaixo:

```json
{
  "name": "desafio-01",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT",
  "scripts": {
    "dev": "webpack-dev-server --mode development"
  },
  "devDependencies": {
    "@babel/core": "^7.2.0",
    "@babel/plugin-proposal-class-properties": "^7.2.1",
    "@babel/preset-env": "^7.2.0",
    "@babel/preset-react": "^7.0.0",
    "babel-loader": "^8.0.4",
    "css-loader": "^2.0.0",
    "eslint": "^5.10.0",
    "eslint-config-standard": "^12.0.0",
    "eslint-plugin-import": "^2.14.0",
    "eslint-plugin-node": "^8.0.0",
    "eslint-plugin-promise": "^4.0.1",
    "eslint-plugin-standard": "^4.0.0",
    "node-sass": "^4.11.0",
    "sass-loader": "^7.1.0",
    "style-loader": "^0.23.1",
    "webpack": "^4.27.1",
    "webpack-cli": "^3.1.2",
    "webpack-dev-server": "^3.1.10"
  },
  "dependencies": {
    "prop-types": "^15.6.2",
    "react": "^16.6.3",
    "react-dom": "^16.6.3"
  }
}
```

6. Criar o arquivo `.editorconfig` na raiz do projeto

```js
root = true

[*]
ident_style = space
ident_size = 2
charset = utf-8
trim_Trailing_whitespace = true
insert_final_newline = true
end_of_line = 'lf'
```

7. Criar o arquivo `.eslintrc.json` na raiz do projeto

```json
{
  "extends": "standard"
}
```

8. Criar o arquivo `webpack.config.js` na raiz do projeto

```js
const path = require('path')

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Aqui uso uma expressão regular
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
}
```

9. Criar o arquivo `.babelrc`

```js
{
  "presets": ["@babel/preset-env", "@babel/preset-react"],
  "plugins": ["@babel/plugin-proposal-class-properties"]
}

```

10. Configurar o script `dev` da aplicação no `package.json`

```json
  "scripts": {
    "dev": "webpack-dev-server --mode development"
  },
```

11. Criar a pasta `public` e dentro dela o arquivo `index.html` referenciando o nosso `bundle.js`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Desafio-01</title>
  </head>
  <body>
    <div id="app"></div>
    <script src="./bundle.js"></script>
  </body>
</html>
```

12. Criar a pasta `src` do projeto e o arquivo `index.js` dentro dela:

```js
import React, { Component } from 'react'
import { render } from 'react-dom'

class App extends Component {
  render() {
    return <h1>Hello World</h1>
  }
}

render(<App />, document.getElementById('app'))
```

13. Testar se a aplicação está rodando

```
yarn run dev

Abrir o navegador e carregar: http://localhost:8080

Result deve ser: Hello World
```

**Para baixar a estrutura do zero acima mencionada, basta digitar:**

```
git clone git@github.com:farnetani/goreact-desafio-01.git -b estrutura-inicial-do-projeto

yarn
```

Agora mãos na massa!
