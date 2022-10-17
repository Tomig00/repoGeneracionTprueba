
let randomWord = document.getElementById("randomWord");
const text = document.querySelector("input");
let timeSpan = document.getElementById("timeSpan");
let Score = document.getElementById("score");

const words = [
    'californication',
    'plataforma5',
    'black',
    'summer',
    'flea',
    'aeroplane',
    'peppers',
    'unlimited',
    'arcadium',
    'love',
    'getaway',
    'stadium',
    'quixoticelixer',
    'quarter',
    'snow',
    'dylan',
    'zephyr',
    'funky',
    'chili'
];

let palabraAleatoria 
let time = 10;
let score = 0;

function randomWords() {
    return words[Math.floor(Math.random() * words.length)];
}

function addToDOM() {
    palabraAleatoria = randomWords();
    randomWord.innerText = palabraAleatoria;
}

addToDOM();


let palabraIngresada

text.addEventListener("input", compararPalabras);

function compararPalabras(e) {
    //console.log(e.target.value);
    palabraIngresada = e.target.value;
    if (palabraIngresada === palabraAleatoria) {
        console.log("correcto");
        time += 3;
        e.target.value = "";
        addToDOM();
        updateScore();
    }
}

let interval = setInterval(actualizarTiempo, 1000);

function actualizarTiempo(){
    time--;
    timeSpan.innerText = time + "s";
    if (time === 0) {
        clearInterval(interval);
        gameOver();
    }
}

function updateScore() {
    score++;
    Score.innerText = score;
}



function gameOver() {
    main.style.display = "none";
    endgamecontainer.innerHTML = `
    <h1>GAME OVER</h1>
    <p id="puntaje">Puntaje final ${score}</p>
    <button class="botonGameOver"onclick="location.reload()">Volver a jugar</button>
    `;
    endGameContainer.style.display = "flex";
}