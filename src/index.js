//importa os módulos http e express
const http = require('http');
const express = require('express');
//constrói um objeto express
const app = express();
//importa o body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());
//configura a porta do servProdIdor e o coloca em execução.
const porta = 3000;
app.set('port', porta);
const server = http.createServer(app);
server.listen(3000);


let ProdId = 2;
let produtos = [
 {
 ProdId: 1,
 ProdNome: "garrafa",
 ProdUnidade: "2",
 ProdValorUnit: "4"
 },
 {
 ProdId: 2,
 ProdNome: "Sorvete",
 ProdUnidade: "1",
 ProdValorUnit: "8"
 }
];

//tratamento de requisições POST
app.post ("/produtos", (req, res, next) => {
    const produto = {
    ProdId: ProdId +=1,
    ProdNome: req.body.ProdNome,
    ProdUnidade: req.body.ProdUnidade,
    ProdValorUnit: req.body.ProdValorUnit
    }
    produtos.push (produto)
    res.status(201).json(produto);
   });
   //tratamento de requisições GET
   app.get ("/produtos", (req, res, next) => {
    res.status(200).json(produtos);
   })
   //tratamento de requisições PUT
   app.put("/produtos", (req, res, next) => {
    produtos.forEach ((produto) => {
    if (produto.ProdId === req.body.ProdId){
    produto.ProdUnidade = req.body.ProdUnidade
    produto.ProdValorUnit = req.body.ProdValorUnit
    }
    })
    res.status(204).end();
   }); 