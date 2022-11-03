import React from "react";

class Titulo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div className="titulo">Título: {this.props.titulo}</div>;
  }
}

export default Titulo;
