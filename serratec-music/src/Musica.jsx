import React from "react";
import Artista from "./Artista";
import Titulo from "./Titulo";
import Gostei from "./Gostei";
import Rotulos from "./Rotulos";

class Musica extends React.Component {
  render() {
    const card = { display: "flex", margin: "10px", border: "1px solid #fff", borderRadius: "4px" };
    const info = { display: "flex", flexDirection: "column", flex: 1 };
    const midia = { display: "block", width: "100px", height: "100px", padding: "1px", objectFit: "cover" };

    const musica = this.props.item;

    return (
      <section style={card}>
        <div style={info}>
          <Artista nome={this.props.item.artista} />
          <Titulo titulo={musica.titulo} />
          <div>
            <Rotulos rotulo={musica.genero} />
            {musica.execucao >= 5 && <Rotulos rotulo="mais pedidas" />}
          </div>

          {this.props.handleAdd ? (
            <Gostei item={musica} handleAdd={this.props.handleAdd} handleExecucao={this.props.handleExecucao} />
          ) : null}
        </div>
        <div>
          <img src={musica.foto} alt="Capa do álbum" style={midia} />
        </div>
      </section>
    );
  }
}

export default Musica;
