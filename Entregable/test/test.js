let div1 = document.querySelector('#source');
let destinationJS = document.querySelector('#destination');
let textoAnterior = div1.textContent;
div1.addEventListener('mouseover', function() {
    div1.textContent = "Hello World";
});
div1.addEventListener('mouseout', function() {
    div1.textContent = textoAnterior;
});


