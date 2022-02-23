//criando o server

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const multer = require('multer');
const mysql = require('mysql') 

const db = mysql.createPool({
    host: 'localhost',
    user: 'brunopm',
    password:'brunopm',
    database: 'agenda'
});

app.use(bodyParser.urlencoded({extended: true}))

app.post("/api/insert", (req,res) =>{

    const nomeP = req.body.nomeP
    const emailP = req.body.emailP
    const telefoneP = req.body.telefoneP
    const imagemP = req.body.imagemP

    const sqlInsert = "INSERT INTO tabelaAgenda (nome, email, telefone, imagem) VALUES (?,?,?,?)"
    db.query(sqlInsert, [nomeP, emailP, telefoneP, imagemP], (err, result) => {

    })
});

const port = 3010

app.listen(port, () =>{
    console.log(`Rodando na porta ${port}`);
});
