import React from "react";

class Gostei extends React.Component {
  constructor(props) {
    super(props);
    this.state = { valor: "👍🏻", votou: false };
  }

  render() {
    const handleVoto = () => {
      this.setState({ valor: "⭐", votou: true });
    };

    const handleQtde = () => {
      this.props.handleExecucao(this.props.item.id);
    };

    return (
      <div>
        <button disabled={this.state.votou} onClick={handleVoto}>
          🎵
        </button>
        {this.state.valor}
        <button onClick={handleQtde}>📀</button> <code>{this.props.item.execucao}</code>{" "}
        <button onClick={() => this.props.handleAdd(this.props.item)}>✏️ Add</button>
      </div>
    );
  }
}

export default Gostei;
