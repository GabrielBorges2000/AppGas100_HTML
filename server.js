const express = require('express');
const app = express();

app.get("/", function (req, res){
    res.sendFile(__dirname + "/src/pages/Home/index.html");
});

app.get("/cadastro", function (req, res){
    res.sendFile(__dirname + "/src/pages/Cadastro/index.html");
});

app.get("/cadastro/name", function (req, res){
    res.sendFile(__dirname + "/src/pages/CadastroName/index.html");
});

app.get("/pagamento/compra", function (req, res){
    res.sendFile(__dirname + "/src/pages/pagamento/compra/index.html");
});
app.get("/pagamento/pagemento", function (req, res){
    res.sendFile(__dirname + "/src/pages/pagemento/pagamento/index.html");
});
app.get("/pagamento/confirmacao", function (req, res){
    res.sendFile(__dirname + "/src/pages/pagemento/confirmacao/index.html");
});

app.listen(3000);
console.log("Rodando Servidor!");

