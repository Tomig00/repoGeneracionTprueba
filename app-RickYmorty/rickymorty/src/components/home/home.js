import React from 'react';
import "./home.css";
import image from "./rick.png";
import {useNavigate} from "react-router-dom";

function Home() {
    const navigate = useNavigate();

    const navigatePersonajes = () => {
        navigate("/personajes");
    }
    return (
        <>
        <div>
            <h1>
            Rick y Morty App
            </h1>
            <div><img src={image} alt="rick"/></div>
            <button className='button-53' onClick={navigatePersonajes}>Personajes</button>
        </div>
        
        </>
    );
}

export default Home;