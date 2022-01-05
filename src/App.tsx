import "./App.css";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const swalit = () => {
  MySwal.fire({
    title: <p>Hello World</p>,
    footer: "Copyright 2018",
    didOpen: () => {
      // `MySwal` is a subclass of `Swal`
      //   with all the same instance & static methods
      MySwal.clickConfirm();
    },
  }).then(() => {
    return MySwal.fire(<p>Shorthand works too</p>);
  });
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Using SweetAlert2 with React</h1>
        <button onClick={swalit}>Click me</button>
      </header>
    </div>
  );
}

export default App;
