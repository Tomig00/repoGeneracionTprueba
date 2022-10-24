const colors = [
    "rgb(255, 99, 132)",
    "rgb(255, 159, 64)",
    "rgb(255, 205, 86)",
    "rgb(75, 192, 192)",
    "rgb(54, 162, 235)",
    "rgb(87, 192, 75)",
];



const cuadrado = document.querySelectorAll(".square");
const colorDisplay = document.getElementById("colorDisplay");

const pickedColor = pickColor();

function pickColor() {
    const random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

colorDisplay.textContent = pickedColor;

for (let i = 0; i < cuadrado.length; i++) {
    cuadrado[i].style.backgroundColor = colors[i];   
}



document.addEventListener("click", function(e){
    if(e.target.classList.contains("square")){
        const clickedColor = e.target.style.backgroundColor;
        if(clickedColor === pickedColor){
            alert("Correcto");
        }else{
            //e.target.style.visibility = "hidden"; 
            e.target.style.backgroundColor = "#0000ffff";
            e.target.innerHTML = "<p>Incorrecto</p>";
            //e.target.style.visibility = "hidden"; 
        }
    }
})



