// Json
var board = {

    table: new Array(),
    piezas: [
        'blancas-torre-izq',
        'blancas-caballo-izq',
        'blancas-alfil-izq',
        'blancas-reina',
        'blancas-rey',
        'blancas-peon-1'
    ],

    posicionesIniciales: [
        { ficha: 'blancas-torre-izq', posicion: 'a8' },
        { ficha: 'blancas-caballo-izq', posicion: 'b8' },
        { ficha: 'blancas-alfil-izq', posicion: 'c8' },
        { ficha: 'blancas-reina', posicion: 'd8' },
        { ficha: 'blancas-rey', posicion: 'e8' },
        { ficha: 'blancas-alfil-der', posicion: 'f8' },
        { ficha: 'blancas-caballo-der', posicion: 'g8' },
        { ficha: 'blancas-torre-der', posicion: 'h8' },
        { ficha: 'blancas-peon-1', posicion: 'a7' },
        { ficha: 'blancas-peon-2', posicion: 'b7' },
        { ficha: 'blancas-peon-3', posicion: 'c7' },
        { ficha: 'blancas-peon-4', posicion: 'd7' },
        { ficha: 'blancas-peon-5', posicion: 'e7' },
        { ficha: 'blancas-peon-6', posicion: 'f7' },
        { ficha: 'blancas-peon-7', posicion: 'g7' },
        { ficha: 'blancas-peon-8', posicion: 'h7' },

        { ficha: 'negras-torre-izq', posicion: 'a1' },
        { ficha: 'negras-caballo-izq', posicion: 'b1' },
        { ficha: 'negras-alfil-izq', posicion: 'c1' },
        { ficha: 'negras-reina', posicion: 'd1' },
        { ficha: 'negras-rey', posicion: 'e1' },
        { ficha: 'negras-alfil-der', posicion: 'f1' },
        { ficha: 'negras-caballo-der', posicion: 'g1' },
        { ficha: 'negras-torre-der', posicion: 'h1' },
        { ficha: 'negras-peon-1', posicion: 'a2' },
        { ficha: 'negras-peon-2', posicion: 'b2' },
        { ficha: 'negras-peon-3', posicion: 'c2' },
        { ficha: 'negras-peon-4', posicion: 'd2' },
        { ficha: 'negras-peon-5', posicion: 'e2' },
        { ficha: 'negras-peon-6', posicion: 'f2' },
        { ficha: 'negras-peon-7', posicion: 'g2' },
        { ficha: 'negras-peon-8', posicion: 'h2' },

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