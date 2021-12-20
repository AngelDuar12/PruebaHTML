var espacio = null;
var velocidad = null;

function add(value) {
    if (espacio == null) espacio = value;
    else
        if (velocidad == null) velocidad = value;
    var p = document.getElementById("resultado");
    if (espacio != null && velocidad != null) {
        var resultado = espacio / velocidad;
        p.innerText = resultado;
        espacio = null;
        velocidad = null;
    }
}