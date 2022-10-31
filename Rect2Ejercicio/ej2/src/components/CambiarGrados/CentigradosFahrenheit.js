import React from "react";
import {useState} from "react";

function CentigradosFahrenheit(props){

    const {cambiarImagen} = props

        const [centigrados, setCentigrados] = useState(0);
        const [fahrenheit, setFahrenheit] = useState(0);
    
        function catchC(event){
            setCentigrados(event.target.value);
            
        }

        function convertir(){
            setFahrenheit(centigrados*(9/5)+32);
            cambiarImagen();
        }
    
        return(
            <>
            <h1>Conversor de Centigrados a Fahrenheit</h1>
            <input type="text" placeholder="Centigrados" onChange={ catchC }/>
            <button onClick={ convertir }>Convertir</button>
            <p>Fahrenheit: {fahrenheit}</p>
            </>
        );
}

export default CentigradosFahrenheit;
