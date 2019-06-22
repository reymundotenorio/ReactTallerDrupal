// Movies API
const seed = [
  {
    id: "tt0117705",
    name: "Space Jam",
    year: 1996,
    votes: 5,
    cover:
      "https://m.media-amazon.com/images/M/MV5BMDgyZTI2YmYtZmI4ZC00MzE0LWIxZWYtMWRlZWYxNjliNTJjXkEyXkFqcGdeQXVyNjY5NDU4NzI@._V1_SX300.jpg"
  },
  {
    id: "tt0158811",
    name: "Muppets from Space",
    year: 1999,
    votes: 3,
    cover:
      "https://m.media-amazon.com/images/M/MV5BODI2Zjc5YzMtNzQ1NS00NGVmLWExYzgtMzFlY2NiMGMzZjRjXkEyXkFqcGdeQXVyNTUyMzE4Mzg@._V1_SX300.jpg"
  },
  {
    id: "tt0062622",
    name: "2001: A Space Odyssey",
    year: 1968,
    votes: 1,
    cover:
      "https://m.media-amazon.com/images/M/MV5BMmNlYzRiNDctZWNhMi00MzI4LThkZTctMTUzMmZkMmFmNThmXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
  }
];

// Header component
function Header() {
  return (
    <header>
      <h1>Cine de las estrellas si</h1>

      <p className="may" style={{ color: "red" }}>
        El mejor <strong>cine al aire</strong> libre de Managua.
      </p>
    </header>
  );
}
// End Header component

// Movie component
function Movie(props) {
  return (
    <article>
      <h3>{props.nombre}</h3>
      <div className="year">Publicada en {props.anio}</div>
      <img alt="Portada de ${props.nombre}" src={props.foto} />
    </article>
  );
}

// Full page component
function ContenedorApp() {
  return (
    // <>
    <React.Fragment>
      <Header />

      <h2>En cartelera</h2>

      <section>
        {seed.map(item => {
          // function (item)
          return (
            <Movie
              key={item.id}
              nombre={item.name}
              anio={item.year}
              foto={item.cover}
            />
          );
        })}
      </section>
    </React.Fragment>
    // </ >
  );
}

// Render Header component
ReactDOM.render(<ContenedorApp />, document.getElementById("app"));
