import { useState } from "react";
import { calcularIMC, classificarIMC } from "../js/func.js";

function App() {
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [resultado, setResultado] = useState("");

  function calcular() {
    if (!nome || !idade || !peso || !altura) {
      setResultado("Preencha todos os campos.");
      return;
    }

    if (peso <= 0 || altura <= 0 || idade <= 0) {
      setResultado("Digite valores válidos.");
      return;
    }

    const imc = calcularIMC(Number(peso), Number(altura));
    const classificacao = classificarIMC(imc);

    setResultado(
      `${nome}, idade: ${idade} anos. Seu IMC é ${imc.toFixed(
        2
      )}. Classificação: ${classificacao}`
    );
  }

  function limpar() {
    setNome("");
    setIdade("");
    setPeso("");
    setAltura("");
    setResultado("");
  }

  return (
    <div>
      <h1>Calculadora de IMC</h1>

      <p>Nome:</p>
      <input
        type="text"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />

      <p>Idade:</p>
      <input
        type="number"
        value={idade}
        onChange={(e) => setIdade(e.target.value)}
      />

      <p>Peso (kg):</p>
      <input
        type="number"
        value={peso}
        onChange={(e) => setPeso(e.target.value)}
      />

      <p>Altura (m):</p>
      <input
        type="number"
        value={altura}
        onChange={(e) => setAltura(e.target.value)}
      />

      <br />
      <br />

      <button onClick={calcular}>Calcular IMC</button>

      <button onClick={limpar}>Limpar</button>

      <h2>{resultado}</h2>

    </div>
  );
}

export default App;

