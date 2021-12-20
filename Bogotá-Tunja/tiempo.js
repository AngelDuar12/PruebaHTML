function Ejecutar() {

    var X = document.getElementById("x").value;
    var v = document.getElementById("v").value;

    var t = X / v;
    var numericT = parseFloat(t);

    var minutos = numericT - parseInt(t);
    var datoMinutos = parseInt(minutos * 60);
    document.getElementById("resultado").innerText = parseInt(t) + ' hora(s) y ' + datoMinutos + ' minutos';

}