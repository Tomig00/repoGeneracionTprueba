import React from 'react';
import {useState} from 'react';

function EuroAdolar(){

    const [euro, setEuro] = useState(0);
    const [dolar, setDolar] = useState(0);

    function convertir(event){
        setEuro(event.target.value);
        setDolar(event.target.value*0.98);
    }

    return(
        <>
        <h1>Conversor de Euros a Dolares</h1>
        <input type="text" placeholder="Euros" onChange={ convertir }/>
        <p>Dolar: {dolar}</p>
        </>
    );
}


export default EuroAdolar;