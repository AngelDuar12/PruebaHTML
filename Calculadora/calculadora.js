var operando1 = null;
var operando2 = null;

function add(value) {
    if (operando1 == null) operando1 = value;
    else
    if (operando2 == null) operando2 = value;
    var p = document.getElementById("resultado");
    if (operando1 != null && operando2 != null) {
        var resultado = operando1 + operando2;
        p.innerText = resultado;
        operando1 = null;
        operando2 = null;
    }
};