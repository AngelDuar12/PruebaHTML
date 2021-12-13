var chess = {

    table: new Array(),
    absisa: new Array(),

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
        this.absisa = new Array('A', 'B', 'C', 'D', 'E', 'F', 'G', 'H');

        var margin = 40;
        var width = $('.container .board').width();
        var delta = (width / 8);
        var adjustInCenter = delta / 8;

        for (j = 8; j >= 1; j--) {

            for (i = 0; i < this.absisa.length; i++) {
                var nombre = this.absisa[i] + j;
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

        $(".ficha").draggable({
            opacity: 0.35,
            start: function(e) {

                console.log('inicio de drag');
            },
            drag: function(e) {
                console.log('moviendo');
            },
            stop: function(e) {

                var ficha = e.target.id;

                // Intentar detectar left y top a partir el valor de entrada e
                // o con fichaId

                var left = 400;
                var top = 400;

                var finded = this.BuscarCelda(left, top)
                finded.posicion = finded;
                this.Move(ficha, finded.name);

                console.log('fin de drag');

            }.bind(this)
        });

    },

    BuscarCelda: function(left, top) {

        debugger;
        // Detectar en cual cuadrado cae la coordenada
        var width = $('.container .board').width();
        var delta = (width / 8);
        var posX = parseInt(left / delta);
        var posY = parseInt(top / delta);

        var letra = this.absisa[posX];

        return { name: letra + posY };
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
        var estaOcupada = this.posiciones.find(x => x.posicion == position && x.ficha !== piece) ? true : false;

        if (found && ficha && !estaOcupada) {

            if ($('#' + piece)) {

                ficha.posicion = position;
                $('#' + piece).animate({ left: found.left + 'px', top: found.top + 'px' }, "slow");

                console.log(`${piece} se ha movido a la posicion:, ${position}`);
            } else {
                console.log(`La ficha ${ficha.ficha} no existe en el tablero`);
            }
        } else {
            console.log(`${ficha}:La posicion, ${position}, esta ocupada`);
        }
    }
}


function Mover_Click() {
    var nuevaPosicion = $('#txtPos').val();
    var ficha = $('#cmbFicha').val();
    chess.Move(ficha, nuevaPosicion);
}