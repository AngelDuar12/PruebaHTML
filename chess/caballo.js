
// Json
var caballo =
{
    // Atributos
    pos: 'A2',

    Init: function () {

    },

    // Metodos
    Mover: function (nuevaPosicion) {

        if (nuevaPosicion == 'C6') {
            $('#caballo').css('left', '216px');
            $('#caballo').css('top', '177px');
        }

        if (nuevaPosicion == 'D7') {
            $('#caballo').css('left', '284px');
            $('#caballo').css('top', '110px');
        }

        console.log('el caballo se ha movido a la posicion:' + nuevaPosicion);
    }
}
