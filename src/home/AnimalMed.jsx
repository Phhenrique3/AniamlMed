import "../styles/App.css";
import { useState, useRef } from "react";
import { findAll, insert } from "../services/AnimalMedApi";

function AnimalMed() {
  const [animais, setAnimais] = useState([]);

  const inputNome = useRef();
  const inputDataNascimento = useRef();
  const inputSexo = useRef();
  const inputEspecie = useRef();

  const salvar = async () => {
    const nome = inputNome.current.value;
    const dataNascimento = inputDataNascimento.current.value;
    const sexo = inputSexo.current.value;
    const especie = parseInt(inputEspecie.current.value);

    console.log("salvando o cadastro do animal", nome, dataNascimento, sexo, especie);

    if (isNaN(especie)) {
      alert("Campo espécie deve ser um número");
      return;
    }

    await insert(nome, dataNascimento, sexo, especie);

    console.log("animal salvo com sucesso");

    // Limpa os campos
    inputNome.current.value = "";
    inputDataNascimento.current.value = "";
    inputSexo.current.value = "";
    inputEspecie.current.value = "";

    await pesquisar();
  };

  const pesquisar = async () => {
    console.log("consultando os animais cadastrados");
    const dados = await findAll();
    setAnimais(dados);
  };

  return (
    <div className="Conteiner">
      <div className="conteudo">
        <div className="titulo-container">
          <h1 className="titulo">Cadastro de Animais</h1>
        </div>
        <input
          placeholder="Nome"
          name="nome"
          id="nome"
          type="text"
          ref={inputNome}
        />
        Data Nascimento
        <input
          placeholder="yyyy/mm/dd"
          name="dataNascimento"
          id="dataNascimento"
          type="text"
          ref={inputDataNascimento}
        />
        Sexo
        <input
          placeholder="M ou F"
          name="sexo"
          id="sexo"
          type="text"
          ref={inputSexo}
        />
        Espécie
        <input
          placeholder="Código da espécie (número)"
          name="especie"
          id="especie"
          type="number"
          ref={inputEspecie}
        />
        <button onClick={salvar}>Salvar</button>
        <button onClick={pesquisar}>Consultar</button>
        <div className="cards-container">
          <div className="cards">
            {animais.map((a, index) => (
              <div key={index} className="card">
                <p>
                  <strong>Nome:</strong> <span>{a.nome}</span>
                </p>
                <p>
                  <strong>Data de Nascimento:</strong>{" "}
                  <span>{a.dataNascimento}</span>
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
