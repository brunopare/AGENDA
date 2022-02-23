import React, {useState, useEffect} from "react";
import './App.css';
import axios, { Axios } from 'axios';
function App() {

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')
  const [agendaLista, setAgendaLista] = useState([]);
  //mostar os dados no front
  useEffect(()=>{
    axios.get("http://localhost:3010/api/get").then((response)=>{
      setAgendaLista(response.data)
    })
  },[])

  const submitRegister = () => {
    axios.post("http://localhost:3010/api/insert", {
      nomeP: nome, 
      emailP: email, 
      telefoneP: telefone
    }).then(()=>{
      alert("Cadastro Realizado!")
    });
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
       

        <button onClick={submitRegister}>Submit</button>

        {agendaLista.map((val)=>{
          return <h1>Nome: {val.nome} | Telefone: {val.telefone} | Email: {val.email}</h1>
         
        })}

      </div>

    </div>
  );
}

export default App;
