function Ejecutar() {

    // kilometros por segundo
    const C = 300000;

    // ya esta en terminos de velocidad luz
    var v = parseFloat(document.getElementById("v").value) / 100 * C;

    var tiempo = 1 / Math.sqrt(1 - (Math.pow(v, 2) / Math.pow(C, 2)));

    document.getElementById("resultado").innerText = tiempo;

}