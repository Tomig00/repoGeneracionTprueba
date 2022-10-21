import logo from './logo.svg';
import './App.css';
import EuroAdolar from './components/EuroDolar/euroAdolar';
import CentigradosFahrenheit from './components/CambiarGrados/CentigradosFahrenheit';
import Rectangulo from './components/Rectangulo/rectangulo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <EuroAdolar/>
        <img src={logo} className="App-logo" alt="logo" />  
        <CentigradosFahrenheit/>
        <img src={logo} className="App-logo" alt="logo" />
        <Rectangulo/>
      </header>
      
    </div>
  );
}

export default App;
