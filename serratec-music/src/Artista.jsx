import React from "react";

function Artista(props) {
  const estilo = {
    fontSize: "1.5rem",
    fontWeight: "400",
    lineHeight: "1.334",
    letterSpacing: "0em",
  };

  return <span style={estilo}>{props.nome}</span>;
}

export default Artista;
