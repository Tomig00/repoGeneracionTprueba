import logo from './logo.svg';
import './App.css';
import EuroAdolar from './components/EuroDolar/euroAdolar';
import CentigradosFahrenheit from './components/CambiarGrados/CentigradosFahrenheit';
import Rectangulo from './components/Rectangulo/rectangulo';
import {useState} from "react";




function App() {

  
  const ANIMAL_IMAGES = [

    "https://img.freepik.com/foto-gratis/amor-romance-perforado-corazon-papel_53876-87.jpg?w=2000", 
      "https://images.pexels.com/photos/1252983/pexels-photo-1252983.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", 
    "http://via.placeholder.com/333x333", ]

  const [imagen, setImagen] = useState(0);

  function cambiarImagen(){
    const numR = Math.floor(Math.random() * 3) + 1;
    setImagen(ANIMAL_IMAGES[numR]);
  }

  return (
    <div className="App">
      <header className="App-header">
        <EuroAdolar/>
        <img src={logo} className="App-logo" alt="logo" />  
        <CentigradosFahrenheit cambiarImagen = {cambiarImagen}/>
        <img src={logo} className="App-logo" alt="logo" />
        <Rectangulo cambiarImagen = {cambiarImagen}/>
        <img src={imagen} alt="imagen" />
      </header>
      
    </div>
  );
}

export default App;
