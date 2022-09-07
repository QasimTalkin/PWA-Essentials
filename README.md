---
marp: true
theme: gaia
style: |
  section.lead h1 {
  text-align: center;
  }
  section.middle li{
  text-align: center;
  }
---
<!-- headingDivider: 2 -->
<!--
theme: gaia
class: lead
-->

# Progressive Web Applications (PWA)

## Why PWA!
* Progressive Web Apps (PWA) are a new way to build web apps that are faster, more responsive, and more secure.
* PWAs can ensure applications work without an internet connection by using the Service Worker and Cache APIs to cache assets and API responses.

## Webpack
* Webpack is a module bundler for modern JavaScript applications.
* Webpack helps in optimizations and bundle compressing assets.\

## IndexedDB
* IndexedDB is a database that stores data locally on the user's device.
  

## Workbox
* Workbox is a service worker that helps in caching assets and API responses.

# Client-Server Model
* Client-Server model is a model where the client communicates with the server.


## `Client`
 A client is any device that can communicate with a server and request information through a browser. This includes desktop computers, laptops, smartphones, iPads, smart televisions, gaming systems, and even an Alexa! 
 
 As the Internet of Things (IoT) expands to household appliances such as smart refrigerators or security cameras, the list of possible clients expands.

 ## `Server`
A server is a computer program or device that provides services using a request and response cycle to another device, which is known as the client. Servers are often housed within large data centers, but they can also be kept on-site and even on the same machine as the client.

The primary objective of any server is to wait and listen for incoming requests and then to respond with the appropriate data, much like the staff from our restaurant analogy!

## `Concurrently`
Concurrently is a term that refers to the fact that a server can respond to multiple requests at the same time.
the tool `Concurrently` will allow us to execute and run multiple commands simultaneously.

## `Webpack`
Webpack is a module bundler for modern JavaScript applications.
Webpack is both flexible and configurable, and relies on five core concepts: entry, output, mode, plugins, and loaders.
* `entry` is the starting point for the bundle. It can be a single file or an array of files. 
* `output` is where the bundle is stored. It can be a directory or a file.
* `mode` is a flag that tells Webpack to use its built-in optimizations for either development or production builds.
* `plugins` are a collection of plugins that Webpack can use to transform modules.
* `loaders` are a collection of loaders that Webpack can use to transform modules.
* `module` is a flag that tells Webpack to use its built-in module system.
```js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
 
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
};
```

# Images and CSS Assets in webpack
* Images and CSS assets are often stored in the `public` directory.
* We can bundle these assets into our bundle.js file using the `file-loader` and `url-loader` loaders.
```js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          'css-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css'
    })
  ]
};
```
## the HtmlWebpackPlugin
* The HtmlWebpackPlugin is a plugin that allows us to use a template file to generate an HTML file for us. 
`npm install --save-dev html-webpack-plugin`
`const HtmlWebpackPlugin = require('html-webpack-plugin');`

* To use the plugin we much create an instance of the plugin and pass it an object with the following properties:
```js
new HtmlWebpackPlugin({
  template: './src/index.html'
});
```

# IndexedDB API
* IndexedDB is a database that stores data locally on the user's device.
* `IndexedDB API` is a transactional, client-side storage API that can store significant amounts of structured data. In other words, it allows access to a database in the browser that developers can leverage. 
* During times of slow or non-existent connectivity, the end user can interact directly with an IndexedDB database and when the end user is able to gain internet connectivity once again, the data from the IndexedDB database can be synced with the traditional database. And this would all take place with minimal disruption to the end user.
* we will be using a package called `idb` which is a relatively small library that enables us to develop modular and maintainable code whenever we want to create or access IndexedDB databases.

## creating an IndexedDB database
* `idb` is a relatively small library that enables us to develop modular and maintainable code whenever we want to create or access IndexedDB databases.
* * first we need to import the `idb` package, this will give access to the IndexedDB API.
* then we need to create a variable called `dbPromise` and assign it to the `idb.open` method.
* `ibd.open` takes three arguments: the name of the database, the version of the database, and a callback function.
* we check if the database already exists and if it does not, we create it.
* within the callback function we need to create an object store called `restaurants` and assign it to the `db.createObjectStore` method.


## `idb` code snippet
```js
import idb from 'idb';

export const dbPromise = idb.open('restaurant-reviews', 1, db => {
  if (!db.objectStoreNames.contains('restaurants')) {
    db.createObjectStore('restaurants', { keyPath: 'id' });
  }
  if (!db.objectStoreNames.contains('reviews')) {
    db.createObjectStore('reviews', { keyPath: 'id' });
  }
});
```
## 