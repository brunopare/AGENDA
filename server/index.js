//api

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const mysql = require('mysql') 

const db = mysql.createPool({
    host: 'localhost',
    user: 'brunopm',
    password:'brunopm',
    database: 'agenda'
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}))

//pegando os registros 
app.get("/api/get/", (req,res) => {
    const sqlSelect = "SELECT * FROM tabelaAgenda";
    db.query(sqlSelect, (err, result) => {
        res.send(result);

    });
});


//inserindo no banco os registros 
app.post("/api/insert", (req,res) =>{

    const nomeP = req.body.nomeP
    const emailP = req.body.emailP
    const telefoneP = req.body.telefoneP

    const sqlInsert = "INSERT INTO tabelaAgenda (nome, email, telefone) VALUES (?,?,?)"
    db.query(sqlInsert, [nomeP, emailP, telefoneP], (err, result) => {
        console.log(result)

    })
});

//deletar registro
app.delete("/api/delete/:nomeP", (req,res) =>{
    const nomeP = req.params.nomeP
    const sqlDelete = "DELETE  FROM tabelaAgenda WHERE nome = ?";

    db.query(sqlDelete, nomeP, (err,result)=>{
        if (err) console.log(err);
    });
})

//atualizar registro
app.put("/api/update/", (req,res) =>{
    const nomeP = req.body.nomeP
    const emailP = req.body.emailP
    const telefoneP = req.body.telefoneP
    const sqlUptade = "UPDATE tabelaAgenda SET  nome, email ,telefone = ??? WEHRE nome = ? ";

    db.query(sqlUptade, [nomeP, emailP, telefoneP], (err,result)=>{
        if (err) console.log(err);
    });
})


const port = 3010

app.listen(port, () =>{
    console.log(`Rodando na porta ${port}`);
});
