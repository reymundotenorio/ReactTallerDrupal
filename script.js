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
class Movie extends React.Component {
  render() {
    return (
      <article>
        <h3>{this.props.nombre}</h3>
        <div className="year">Publicada en {this.props.anio}</div>
        <img alt="Portada de ${this.props.nombre}" src={this.props.foto} />
      </article>
    );
  }
}

// Full page component
class ContenedorApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      peliculas: [].concat(seed)
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    console.log(event);

    const nuevaPeli = {
      id: "tt0117705",
      name: "Avengers: Infinity War",
      year: 2018,
      votes: 15,
      cover:
        "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
    };

    // const lista = this.state.peliculas.concat(nuevaPeli);
    // this.setState({ peliculas: lista });

    this.setState(prevState => {
      return { peliculas: prevState.peliculas.concat(nuevaPeli) };
    });
  }

  render() {
    return (
      // <>
      <React.Fragment>
        <Header />

        <button type="button" onClick={this.handleClick}>
          Agregar elemento
        </button>

        <h2>En cartelera</h2>

        <section>
          {this.state.peliculas.map(item => {
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
}

// Render Header component
ReactDOM.render(<ContenedorApp />, document.getElementById("app"));
