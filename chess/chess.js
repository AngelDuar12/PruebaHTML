// Json
var board = {

    table: new Array(),
    piezas: [
        'white-torre-izq',
        'white-caballo-izq',
        'white-alfil-izq',
        'white-reina',
        'white-rey',
        'white-peon-1'
    ],

    posicionesIniciales: [
        { ficha: 'white-torre-izq', posicion: 'a8' },
        { ficha: 'white-caballo-izq', posicion: 'b8' },
        { ficha: 'white-alfil-izq', posicion: 'c8' },
        { ficha: 'white-reina', posicion: 'd8' },
        { ficha: 'white-rey', posicion: 'e8' },
        { ficha: 'white-alfil-der', posicion: 'f8' },
        { ficha: 'white-caballo-der', posicion: 'g8' },
        { ficha: 'white-torre-der', posicion: 'h8' },

        { ficha: 'white-peon-1', posicion: 'a7' },
        { ficha: 'white-peon-2', posicion: 'b7' },
        { ficha: 'white-peon-3', posicion: 'c7' },
        { ficha: 'white-peon-4', posicion: 'd7' },
        { ficha: 'white-peon-5', posicion: 'e7' },
        { ficha: 'white-peon-6', posicion: 'f7' },
        { ficha: 'white-peon-7', posicion: 'g7' },
        { ficha: 'white-peon-8', posicion: 'h7' },

    ],

    Initialize: function() {

        // Mapea las posiciones del mapa con las
        var absisa = new Array('A', 'B', 'C', 'D', 'E', 'F', 'G', 'H');

        var margin = 40;
        var width = $('.container .board').width();
        var delta = (width / 8);
        var adjustInCenter = delta / 8;

        for (j = 8; j >= 1; j--) {

            for (i = 0; i < absisa.length; i++) {
                var nombre = absisa[i] + j;
                var celda = {
                    name: nombre,
                    left: i * delta + margin + adjustInCenter,
                    top: width - (j - 1) * delta - margin + adjustInCenter
                };

                this.table.push(celda);
            }
        }

        this.Reset();

    },

    Reset: function() {

        $.each(this.posicionesIniciales, function(index, value) {
            this.Move(value.ficha, value.posicion);
        }.bind(this));
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