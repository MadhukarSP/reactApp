# reactApp

## ReactJS - Environment Setup

* Make sure the version of Nodejs is latest. At least > 4.0
* Install global packages
  * C:\Users\username>npm install -g babel
  * C:\Users\username>npm install -g babel-cli
* Create root folder in Desktop and create package.json file by running npm init.
  * C:\Users\username\Desktop>mkdir reactApp
  * C:\Users\username\Desktop\reactApp>npm init
* Add dependency and plugins, run following commands.
  * C:\Users\username>npm install webpack --save
  * C:\Users\username>npm install webpack-dev-server --save
  * C:\Users\username\Desktop\reactApp>npm install webpack-dev-server --save
  * C:\Users\username\Desktop\reactApp>npm install react --save
  * C:\Users\username\Desktop\reactApp>npm install react-dom --save
  * C:\Users\username\Desktop\reactApp>npm install babel-core
  * C:\Users\username\Desktop\reactApp>npm install babel-loader
  * C:\Users\username\Desktop\reactApp>npm install babel-preset-react
  * C:\Users\username\Desktop\reactApp>npm install babel-preset-es2015
* Create following empty files in reachApp folder.
  * Webpack.config.js
  * Index.html
  * App.jsx
  * Main.js  
* Add below code in Webpack.config.js.

		var config = {
		   entry: './main.js',

		   output: {
		      path:'./',
		      filename: 'index.js',
		   },

		   devServer: {
		      inline: true,
		      port: 8080
		   },

		   module: {
		      loaders: [
			 {
			   test: /\.jsx?$/,
			   exclude: /node_modules/,
			   loader: 'babel-loader',

			   query: {
			       presets: ['es2015', 'react']
			    }
			}
		      ]
		   }
		}

		module.exports = config;

* Add below code in Index.html 

		<!DOCTYPE html>
			<html lang = "en">

			<head>
			  <meta charset = "UTF-8">
			  <title>React App</title>
			</head>

			<body>
			  <div id = "app"></div>
			  <script src = "index.js"></script>
			</body>

		</html>
* Add below code in App.jsx

		import React from 'react';

		class App extends React.Component {
			render() {
				return (
				   <div>
				      Hello World!!!
				   </div>
				);
			}
		}

		export default App;
* Add below code in main.js

		import React from 'react';
		import ReactDOM from 'react-dom';
		import App from './App.jsx';

		ReactDOM.render(<App />, document.getElementById('app'));
* Add below command to package.json [Note: replace "scripts": {"test": error …} with below code]
  * "scripts": {"start": "webpack-dev-server --hot"},
  * --hot : This command will add live reload after something is changed inside our files.
* Run following command to start the server.
  * C:\Users\username\Desktop\reactApp>npm start
* After starting the server, the output will look something like below

		reactApp@1.0.0 start C:\Users\Inspi\Desktop\reactApp
		webpack-dev-server --hot
		http://localhost:8080/
		webpack result is served from /
		content is served from C:\Users\Inspi\Desktop\reactApp
		webpack: wait until bundle finished: /
		…
* Open browser and type : http://localhost:8080/, you will see “Hello World!!!” on screen.
* Additionally install react-router and react-redux as well
  * npm install react-router
  * npm install --save react-redux
