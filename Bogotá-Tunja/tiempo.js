var distancia = null;
var velocidad = null;


function add(value) {
    if (distancia == null) espacio = value;
    else
        if (distancia == null) velocidad = value;
    var p = document.getElementById("resultado");
    if (espacio != null && velocidad != null) {
        var resultado = distancia / velocidad;
        p.innerText = resultado;
        distancia = null;
        velocidad = null;
    }
}