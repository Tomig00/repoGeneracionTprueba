import React from "react";
import {useState} from "react";


function Rectangulo(props){

    const {cambiarImagen} = props

    const [ancho, setAncho] = useState(0);
    const [altura, setAltura] = useState(0);
    const [area, setArea] = useState(0);

    function catchA(event){
        setAncho(event.target.value);
        
    }

    function catchAl(event){
        setAltura(event.target.value);
    }

    function calcular(){
        setArea((ancho*altura)/2);
    }
    function convertir(){
        calcular();
        cambiarImagen();
    }

    return(
        <>
        <h1>Calcular area</h1>
        <form> 
            <label>Ancho: </label>
            <input type="text" placeholder="Ancho" onChange={ catchA }/>
            <br></br>
            <label>Altura: </label>
            <input type="text" placeholder="Altura" onChange={ catchAl }/>            
        </form>
        <button onClick={ convertir }>Calcular</button>
        <p>Area: {area}</p>
        </>
    );


}

export default Rectangulo;