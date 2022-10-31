import React from 'react';
import {useNavigate, Link} from "react-router-dom";
import {useState, useEffect} from 'react';
import "./personajes.css";
import axios from "axios"

function Card(props){
    console.log(props);
    return(
        <div className="card">
            <div className='div1'><img src = {props.image}></img></div>
            <div className='div2'><p>{props.name}</p></div>
            <div className='div3'>
                <p>{props.status}</p>
                <p>{props.episode}</p>
                <p>{props.species}</p>
            </div>
        </div>
    )

};



function Personajes() {

    const [personajes, setPersonajes] = useState([]);

    const navigate = useNavigate();

    const navigateHome = () => {
        navigate("/");
    }       
    

    useEffect(() => {
        return async () => {
            const response = await axios.get("https://rickandmortyapi.com/api/character");
            setPersonajes(response.data.results);
        }
    }, []);
    
    

    return (
        <>
        <div className ="container">
            <h1>
            Rick y Morty App
            </h1>
            <div className='cards'> 
            {personajes.map((personaje) => (<Link key = {personajes.id} to = {`/personajes/${personajes.id}`} ><Card key = {personajes.id} name={personaje.name} image={personaje.image} status={personaje.status} episode={personaje.episode.length} species={personaje.species}/></Link>))}
            </div>
            <button className='button-53' onClick={navigateHome}>Home</button>
            
        </div>
        </>
    );
}

export default Personajes;

