
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
            $('#caballo').css('left', '148px');
            $('#caballo').css('top', '112px');
        }

        console.log('el caballo se ha movido a la posicion:' + nuevaPosicion);
    }
}
