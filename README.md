# webpack-react-workflow-app
## _simple react wrokflow using webpack bundler to create simple app with_

steps of workflow :

    1- npm init -y (intialize package.json with yes to all config)
    2- npm install webpack webpack-cli --save-dev (install webpack to project)
    3- created src folder
    4- added index.js in src folder
    5- added html.js in src folder
    6- added two modes of run(build) in package.json -> [development ,production] 
        -  "scripts": {
                "start" : "webpack --mode development" ,
                "build" : "webpack --mode production"
            }
    7- make webpack works with html[install HtmlWebpackPlugin]
    8- pass configrations to HtmlWebpackPlugin constructor ({template : './src/index.html'}) to get data from index.html to dist 
    9- install babel loader[to transbile js to old browsers]
    10- add babel loader rules to package.json
    11- install React preset to transbile jsx files
    12- install react [npm i react react-dom]
    13- install webpack-dev-server
    14- add in package.json [webpack-dev-server] in development
    15- make importing of files without extensions [use reslove in package.json]
    16- to use css [install css loader,style loader]
    19- to make app use imgs [install url-loader]
    
## Plugins

| Plugin | link
| ------ | ------ |
| HtmlWebpackPlugin | https://webpack.js.org/plugins/html-webpack-plugin/#root
| babel loader | https://webpack.js.org/loaders/babel-loader/#root
| @babel/preset-react| https://babeljs.io/docs/en/babel-preset-react
| devServer| https://webpack.js.org/configuration/dev-server/
| css loader| https://webpack.js.org/loaders/css-loader/#root
| style loader| https://webpack.js.org/loaders/style-loader/#root
| url loader | https://webpack.js.org/guides/asset-modules/#root


first install node_modules:
```sh
npm install
```

to run in developent mode:
```sh
npm start
```

to run in production mode:
```sh
npm run build
```
