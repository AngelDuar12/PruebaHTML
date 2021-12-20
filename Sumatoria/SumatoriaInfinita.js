debugger;

var resultado = 0;


while(true){
    resultado=resultado+1;
    if(resultado>1000000000){
        debugger;
        break;
    }
}

var parrafo = document.getElementById('valor');
parrafo.innerText = resultado;
