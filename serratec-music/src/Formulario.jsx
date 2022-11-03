import React from "react";

const Formulario = (props) => {
  const [artista, setArtista] = React.useState("");
  const [titulo, setTitulo] = React.useState("");
  const [foto, setFoto] = React.useState("");

  const [exibicao, setExibicao] = React.useState(false);

  const handleEnvio = (e) => {
    e.preventDefault();
    const novo = { artista, titulo, foto };
    const url = "http://localhost:8080/musicas";
    const config = { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(novo) };

    fetch(url, config).then((res) => {
      console.log(res.status);
      setArtista("");
      setTitulo("");
      setFoto("");
      setExibicao(false);
    });
  };

  if (!exibicao)
    return (
      <div>
        <button onClick={() => setExibicao(true)}>Nova música</button>
      </div>
    );

  return (
    <form onSubmit={handleEnvio}>
      <label>Artista</label>
      <input type="text" name="artista" value={artista} onChange={(e) => setArtista(e.target.value)} />
      <br />
      <label>Título</label>
      <input type="text" name="titulo" value={titulo} onChange={(e) => setTitulo(e.target.value)} />
      <br />
      <label>Foto</label>
      <input type="text" name="foto" value={foto} onChange={(e) => setFoto(e.target.value)} />
      <br />
      <button type="submit">Cadastrar</button>
    </form>
  );
};

export default Formulario;
