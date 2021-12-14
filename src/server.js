const express = require('express');
const route = require('./route');
const path = require('path')

const server = express();

server.set('view engine', 'ejs'); /**Configuracao do ejs */
server.use(express.static('public')) /**onde irá ficar guardado o cnteudo publico */
server.set('views', path.join(__dirname, 'views')) //**Define o local de onde vai puxar o html */

server.use(express.urlencoded({extended: true})); // midleware

server.use(route);

server.listen(3000, () => console.log('Rodando'));
