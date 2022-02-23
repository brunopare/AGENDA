import React, {useState, useEffect} from "react";
import './App.css';
import axios from 'axios';
function App() {

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')

  const submitRegister = () =>{
    axios.post('http://http://localhost:3010/api/insert', {
      nomeP: nome, 
      emailP: email, 
      telefoneP: telefone
    }).then(()=>{
      alert("Cadastro Realizado!")
    })
  };

  return (
    <div className="App">
      <h1>AGENDA</h1>
      <div className="form_pessoa">
        <label>Nome: </label>
        <input type={"text"} name={"nomePessoa"} onChange = {(e) => {
          setNome(e.target.value)
        }}/>
        <label>Email: </label>
        <input type={"email"} name={"email"} onChange = {(e) => {
          setEmail(e.target.value)
        }} />
        <label>telefone: </label>
        <input type={"tel"} name={"telefone"} onChange = {(e) =>{
          setTelefone(e.target.value)
        }} />
       <sobeArquivo/>

        <button onclick={submitRegister}>Submit</button>
      </div>

    </div>
  );
}

export default App;
