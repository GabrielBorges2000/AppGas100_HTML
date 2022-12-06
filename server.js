const express = require('express');
const app = express();

app.get("/", function (req, res){
    res.sendFile(__dirname + "/src/Home.html");
});

app.get("/Header", function (req, res){
    res.sendFile(__dirname + "/src/Header.html");
});

app.get("/Card", function (req, res){
    res.sendFile(__dirname + "/src/Card.html");
});

app.get("/cadastro", function (req, res){
    res.sendFile(__dirname + "/src/Cadastro.html");
});

app.get("/cadastro/name", function (req, res){
    res.sendFile(__dirname + "/src/CadastroName.html");
});

app.get("/Compra", function (req, res){
    res.sendFile(__dirname + "/src/compra.html");
});

app.get("/Pagamento", function (req, res){
    res.sendFile(__dirname + "/src/Pagamento.html");
});

app.get("/Confirmacao", function (req, res){
    res.sendFile(__dirname + "/src/Confirmacao.html");
});

app.listen(3000);
console.log(
    "Rodando Servidor!",
    "Acesse: http://localhost:3000/",
    );

