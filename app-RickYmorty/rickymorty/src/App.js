import './App.css';
import Home from './components/home/home';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Personajes from './components/personajes/personajes';


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path = "/" element = {<Home/>}/>
      <Route path = "/personajes" element = {<Personajes/>}/>
    </Routes>
    </BrowserRouter>
        
    </>
    
  );
}

export default App;
