
import './App.css';
import { Testimonios } from './componentes/testimonios';

function App() {

  const objeto = {
    name: "Emma",
      titulo: "ingeniero de Software",
      imagen: "emma",
      texto: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit, ut."
  }

  const {name,titulo,imagen,texto} = objeto

  
  return (
    <div className="App">
      <div className="contenedor-principal">
      <h1>FreeCodeCamp Alumnos</h1>
    <Testimonios 
    name={name}
    titulo={titulo}
    imagen={imagen}
    texto={texto}
    />
      <Testimonios 
    name="Juan"
    titulo="ingeniero Civil"
    imagen="emma"
    texto="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit, ut."/>
      </div>
    </div>

  );
}

export default App;
