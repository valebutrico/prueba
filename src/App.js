import './App.css';

function App() {

  return (
    <div className="App">
      <MostrarUsuario />
      <MostrarUsuario />
    </div>
  );
}


const MostrarUsuario = () => {
  const name = <h1>Vale Butrico</h1>;
  const age = <p>26</p>;
  const email = <p>vale.butrico@gmail.com</p>;

  return <div>{name} {age} {email}</div>;
}

export default App;
