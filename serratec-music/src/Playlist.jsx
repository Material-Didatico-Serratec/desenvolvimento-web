import React from "react";
import Musica from "./Musica";

class Playlist extends React.Component {
  constructor(props) {
    super(props);

    this.state = { lista: [], musicas: [] };
  }

  componentDidMount() {
    const listar = () => {
      const url = "http://localhost:8080/musicas";
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          this.setState({ musicas: data });
          //cbDestaque(data);
        });
    };

    listar();
  }

  render() {
    const card = { display: "flex", margin: "10px", border: "1px solid #fff", borderRadius: "4px", fontSize: "16px" };

    const adicionar = (novo) => this.setState((p) => ({ lista: [novo, ...p.lista] }));

    const itens = [];

    for (const [i, musica] of this.state.lista.entries()) {
      itens.push(<li key={`play_${i}`}>{musica.titulo}</li>);
    }

    return (
      <>
        <h3>Playlist</h3>
        <section style={card}>
          <ul>{itens}</ul>
        </section>

        <h3>Mais tocadas</h3>

        {this.state.musicas.map((item) => (
          <Musica key={item.id} item={item} handleAdd={adicionar} handleExecucao={this.props.handleExecucao} />
        ))}
      </>
    );
  }
}

export default Playlist;
