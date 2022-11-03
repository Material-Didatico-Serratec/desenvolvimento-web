import React from "react";
import "./App.css";
import Formulario from "./Formulario";
import Musica from "./Musica";
import Navegacao from "./Navegacao";
import Playlist from "./Playlist";

function App() {
  const [data, setMusicas] = React.useState([]);

  const top = { borderBottom: "2px solid #fff", paddingBottom: "14px", margin: "10px" };

  const listar = () => {
    const url = "http://localhost:8080/musicas";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setMusicas(data);
        cbDestaque(data);
      });
  };

  React.useEffect(listar, []);

  const handleExecucao = (id) =>
    setMusicas((anterior) =>
      anterior.map((item) => (item.id === id ? { ...item, execucao: item.execucao + 1 } : item))
    );

  const [destaque, setDestaque] = React.useState({});

  function cbDestaque(data) {
    if (data.length === 0) return;

    const nro = Math.floor(Math.random() * data.length);
    setDestaque(data[nro]);

    document.title = `Destaque: ${data[nro].artista}`;

    return function Desmontagem() {
      console.log("destruindo o componente");
    };
  }

  return (
    <div className="App">
      <main className="App-header">
        <header>
          <h2 style={top}>🎶 Serratec Music 🎶</h2>
          <Navegacao />
        </header>

        <Formulario />

        <h2>Destaque</h2>
        <Musica key={destaque.id} item={destaque} />

        <Playlist musicas={data} handleExecucao={handleExecucao} />
      </main>
    </div>
  );
}

export default App;
