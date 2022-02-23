import React, {useState, useEffect} from "react";
import './App.css';
import axios, { Axios } from 'axios';
function App() {

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')
  const [agendaLista, setAgendaLista] = useState([]);

  const [novoNome, setNovoNome] = useState('');
  const [novoEmail, setNovoEmail] = useState('');
  const [novoTelefone, setNovoTelefone] = useState('');
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
    });

  
    setAgendaLista([...agendaLista, 
        {nome:nome, email: email, telefone: telefone},
      ]);

  };

  const deletaRegistro =  (nompessoa) =>{
    axios.delete(`http://localhost:3010/api/delete/${nompessoa}`)
  }

  const atualizaRegistro = (nompessoa,emailpessoa,telefonepessoa) => {
    axios.put("http://localhost:3010/api/update/", {
      nomeP: nompessoa, 
      emailP: emailpessoa, 
      telefoneP: telefonepessoa
    });
    setNovoNome("")
    setNovoEmail("")
    setNovoTelefone("")
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
          return (
            <div className="card">
              <h1>{val.nome}</h1>
              <p>{val.telefone}</p>
              <p>{val.email}</p>
              
              <input type="text" id="updateInput" placeholder="Editar Nome" onChange={(e) =>{
                setNovoNome(e.target.value)
              }}/>
              <input type="text" id="updateInput" placeholder="Editar telefone"/>
              <input type="text" id="updateInput" placeholder="Editar email"/>
              <button onClick={()=>{deletaRegistro(val.nome)}}>Deletar</button>
              <button onClick={()=>{atualizaRegistro(val.nome,val.telefone,val.email)}}>Update</button>

            </div>
          )
        })}

      </div>

    </div>
  );
}

export default App;
