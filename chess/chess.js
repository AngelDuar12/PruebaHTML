// Json
var board = {

    table: new Array(),

    Initialize: function() {

        // Mapea las posiciones del mapa con las
        var absisa = new Array('A', 'B', 'C', 'D', 'E', 'F', 'G', 'H');

        var margin = 40;
        var width = $('.container .board').width();
        var delta = (width / 8);


        for (j = 8; j >= 1; j--) {

            for (i = 0; i < absisa.length; i++) {
                var nombre = absisa[i] + j;
                var celda = {
                    name: nombre,
                    left: i * delta + margin,
                    top: width - (j - 1) * delta - margin
                };

                this.table.push(celda);
            }
        }

        // Colocar las fichas en la posicion correcta
        this.Move('torre', 'a8');
        this.Move('caballo', 'b8');
        this.Move('alfil', 'c8');
        this.Move('reina', 'd8');
        this.Move('rey', 'e8');
        this.Move('peon', 'a7');

    },

    // Mover una ficha en el tablero
    Move: function(piece, position) {

        const found = this.table.find(square => square.name.toLowerCase() == position.toLowerCase());

        if (found != undefined) {

            $('#' + piece).css('left', found.left + 'px');
            $('#' + piece).css('top', found.top + 'px');

            console.log(piece + ' se ha movido a la posicion:' + position);
        }
    }
}

function Mover() {
    var nuevaPosicion = $('#txtPos').val();
    var ficha = $('#cmbFicha').val();
    board.Move(ficha, nuevaPosicion);
}

$(document).ready(function(e) {
    board.Initialize();
});