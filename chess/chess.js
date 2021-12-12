// Funcion tipo extension que devuelve si el valor tiene un valor o no
Object.prototype.Exists = function(value) {

    // Evalua si value es null, cero (en caso de ser numero) o indefinida
    if (value) return true
    else return false;
};

// Json
var board = {

    table: new Array(),

    posiciones: [
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


        $.each(this.posiciones, function(index, value) {

            $('select#cmbficha').append(new Option(value.ficha, value.ficha));
        });

    },

    Reset: function() {

        $.each(this.posiciones, function(index, value) {
            this.Move(value.ficha, value.posicion);
        }.bind(this));
    },

    // Mover una ficha en el tablero
    Move: function(piece, position) {

        // buscar la posicion acorde con la nomenclatura del ajedrez
        var found = this.table.find(square => square.name.toLowerCase() == position.toLowerCase());

        // Buscar la ficha en el tablero
        var ficha = this.posiciones.find(x => x.ficha == piece);

        // Buscar si hay otra ficha ocupando esta casilla 
        var estaOcupada = this.posiciones.find(x => x.posicion == position).Exists();

        if (found && ficha && !estaOcupada) {

            $('#' + piece).animate({ left: found.left, top: found.top }, "slow");

            ficha.posicion = position;

            console.log(`${piece} se ha movido a la posicion:, ${position}`);
        } else {
            console.log(`${ficha}:La posicion, ${position}, esta ocupada`);
        }
    }

}


function Mover_Click() {
    var nuevaPosicion = $('#txtPos').val();
    var ficha = $('#cmbFicha').val();
    board.Move(ficha, nuevaPosicion);
}

$(document).ready(function(e) {
    board.Initialize();
    board.Reset();
});