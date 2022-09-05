const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  
  "entry": { 
      "app": "./src/js/index.js",
  }, 
  "output": {
    "path": path.resolve(__dirname, 'dist'),
  },
  "mode": "development",
  "module": { "rules": [ 
    {
      test: /\.m?js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [
            ['@babel/preset-env', { targets: "defaults" }]
          ]
        }
      }
    }, 
    {
      "test": /\.css$/,
      "use": [
        "style-loader",
        "css-loader"
      ]
    },
    {
      "test": /(.png|.jpg|.gif|.svg|.ttf|.woff|.woff2|.eot)$/i,
      "type": "asset/resource",
    }
    ]
  },
  "plugins": [
    new HtmlWebpackPlugin({
      "template": "./index.html",
    })
  ]
};
