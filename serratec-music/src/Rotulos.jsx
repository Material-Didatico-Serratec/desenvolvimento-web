import React from "react";

function Rotulos(props) {
  const estilo = {
    color: "#000",
    backgroundColor: "rgba(13,202,240)",
    borderRadius: "0.375rem",
    fontSize: "14px",
    fontWeight: "bold",
    padding: "1px 5px",
    margin: "5px",
  };

  return <span style={estilo}>{props.rotulo}</span>;
}

export default Rotulos;
