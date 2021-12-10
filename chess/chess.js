// Json
var board = {

    table: new Array(),

    Initialize: function() {

        var absisa = new Array('A', 'B', 'C', 'D', 'E', 'F', 'G', 'H');

        for (j = 1; j <= 8; j++) {

            for (i = 0; i < absisa.length; i++) {
                var nombre = absisa[i] + j;
                this.table.push({ name: nombre, left: 86 + i * 66, top: 44 + (j - 1) * 66 });
            }
        }

    },

    // Mover una ficha en el tablero
    Move: function(piece, position) {

        const found = this.table.find(square => square.name == position);

        if (found != undefined) {

            $('#' + piece).css('left', found.left + 'px');
            $('#' + piece).css('top', found.top + 'px');

            console.log(piece + ' se ha movido a la posicion:' + position);
        }
    }
}