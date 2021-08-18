#Webpack install command
npm install -g lite-server
npm install --save-dev webpack webpack-cli webpack-dev-server typescript ts-loader
npm run build
npm start

#Webpack Configuarion
"start": "webpack-dev-server" -> Dist bundle file will be in memory not saved to disk, App loads from Memory 
- Note: For WebPack dev server need to add one configuration in webpack.config.js file -> publicPath: 'dist'
"start": "lite-server" -> Bundle file will be in disk, App loads from disk

#Configuring Webpack in PROD
npm install --save-dev clean-webpack-plugin

#Official Documentation link -> https://webpack.js.org/