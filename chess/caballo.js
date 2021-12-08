
// Json
var caballo =
{
    // Atributos
    pos: 'B1',

    table: new Array(),

    InicializarTablero: function () {

        var absisa = new Array('A', 'B', 'C', 'D', 'E', 'F', 'G', 'H');

        for (j = 1; j <= 8; j++) {

            for (i = 0; i < absisa.length; i++) {
                var nombre = absisa[i] + j;
                this.table.push({ name: nombre, left: 86 + i * 66, top: 44 + (j - 1) * 66 });
            }
        }

    },

    // Metodos
    Mover: function (nuevaPosicion) {

        const found = this.table.find(element => element.name == nuevaPosicion);

        if (found != undefined) {

            $('#caballo').css('left', found.left + 'px');
            $('#caballo').css('top', found.top + 'px');

            console.log('el caballo se ha movido a la posicion:' + nuevaPosicion);
        }


    }
}

