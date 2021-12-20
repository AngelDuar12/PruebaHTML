debugger;

var resultado = 0;
var limite = 100000000;


for (i = 1; i <= limite; i++) {
    resultado = resultado + i;

}

var parrafo = document.getElementById('valor');
parrafo.innerText = resultado;
