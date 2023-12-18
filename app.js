//// app
require("dotenv").config();
const express = require('express');
const app = express();
const db = require("./models/tasksModels");
const router = require('./tasksRouter');
const port = process.env.PORT;

//
// permite recebimento POST no formato json
app.use(express.json());
app.use(router);
/////  app

// inicia o servidor
app.listen(port);
console.log('API funcionando!');

// exporta o modulo
module.exports = app;