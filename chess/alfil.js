var alfil = {
    Mover: function() {

        var ficha = 'blancas-alfil-izq';
        var actual = this.MostrarPosicion(ficha);

        var values = Array.from(actual.posicion);
        var letra = values[0];
        var numero = parseInt(values[1]);

        var destino1 = 'a' + (numero - 2);
        var destino2 = 'b' + (numero - 1);
        var destinos = [destino1, destino2];

        $.each(destinos, function(index, pos) {
            board.Move(ficha, pos);
        }.bind(this));

    },

    MostrarPosicion: function(ficha) {
        var posicion = board.posicionesIniciales.find(x => x.ficha == ficha);

        if (posicion) {

            return posicion;
        }

        return null;
    }
}

function Mover_Alfil() {
    alfil.Mover();
}