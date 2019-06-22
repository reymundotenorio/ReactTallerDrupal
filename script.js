// let elemento = React.createElement(
//   "p",
//   { className: "may" },
//   "El mejor",
//   React.createElement("strong", null, " cine al aire "),
//   "libre de Managua."
// );

const elemento = (
  <p className="may" style={{ color: "red" }}>
    El mejor <strong>cine al aire</strong> libre de Managua.
  </p>
);
ReactDOM.render(elemento, document.getElementById("app"));
