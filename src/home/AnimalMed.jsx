import "../styles/App.css";
 import { useState } from "react";
import { findAll } from "../services/AnimalMedApi";

function AnimalMed() {
  const [animais, setAnimais] = useState([]);

  const pesquisar = async () => {
    console.log("Consultando os animais cadastrados");
    const dados = await findAll();
    setAnimais(dados);
  }; 

  return (
    <div className="Conteiner">
      <div className="conteudo">
        <div className="titulo-container">
          <h1 className="titulo">Cadastro de Animais</h1>
        </div>

        <div className="formulario-container">
          <button className="button" onClick={pesquisar}>Consultar</button>
        </div>

        <div className="cards-container">
          <div className="cards">
            {animais.map((a, index) => (
              <div key={index} className="card">
                <p>
                  <strong>Nome:</strong> <span>{a.nome}</span>
                </p>
                <p>
                  <strong>Data de Nascimento:</strong> <span>{a.dataNascimento}</span>
                </p>
                <p>
                  <strong>Sexo:</strong> <span>{a.sexo}</span>
                </p>
                <p>
                  <strong>Espécie:</strong> <span>{a.especie}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnimalMed;
