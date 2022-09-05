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