import {useState} from 'react';
import { FiSearch } from "react-icons/fi";
import './styles.css';
import api from './services/api';

function App() {
  const [cep,setCep] = useState('');
  const [dados,setDados] = useState({});

  async function buscarCep(){
    if(cep===''){
      alert("Preencha algum cep!");
      return;
    }
    try{
      const response = await api.get(`${cep}/json`);
      setDados(response.data);
      setCep("");
    }
    catch{
      alert("Oops erro ao buscar!");
      setCep("");
    }
  }

  return (
    <div className="container">
      <h1 className="title">Buscador de Cep</h1>

      <div className="containerInput">
        <input type="text" placeholder="Digite seu cep..." 
        value={cep} onChange={(e)=>setCep(e.target.value)}/>
        <button className="buttonSearch" onClick={buscarCep}>
          <FiSearch size={25} color="#fff" />
        </button>
      </div>

      {Object.keys(dados).length>0 && (
        <main className="main">
          <h2>Cep:{dados.cep}</h2>
          <span>Logradouro:{dados.logradouro}</span>
          <span>Complemento:{dados.complemento}</span>
          <span>Bairro:{dados.bairro}</span>
          <span>{dados.localidade} {dados.uf}</span>
        </main>
      )}

    </div>
  );
}

export default App;
