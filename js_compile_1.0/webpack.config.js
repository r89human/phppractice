const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    mode: 'development',
    devServer: {
        static : {
            directory : path.join(__dirname, "/dist/")
        }, 
        port: 9000
  } 
};
