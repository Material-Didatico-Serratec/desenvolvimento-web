import React from "react";
import { Link } from "react-router-dom";

function Navegacao() {
  const cor = { color: "white" };

  return (
    <nav>
      <Link to="/" style={cor}>
        Home
      </Link>{" "}
      |{" "}
      <Link to="/top" style={cor}>
        Mais tocadas
      </Link>{" "}
      |{" "}
      <Link to="/cadastro" style={cor}>
        Nova música
      </Link>
    </nav>
  );
}

export default Navegacao;
