
// Json
var caballo =
{
    // Atributos
    pos: 'B1',

    table: new Array(),

    InicializarTablero: function () {

        this.table.push({ name: 'D7', left: 284, top: 110 });
        this.table.push({ name: 'C6', left: 216, top: 177 });

        var absisa = new Array('A', 'B', 'C', 'D', 'E', 'F', 'G', 'H');

        debugger;
        for (i = 0; i < absisa.length; i++) {
            var nombre = absisa[i] +'1';
            this.table.push({ name: nombre, left: 86 + i * 66, top: 44 });
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

