var alfil = {
    Mover: function() {

        var ficha = 'blancas-alfil-izq';
        var actual = this.MostrarPosicion(ficha);

        var values = Array.from(actual.posicion);
        var letra = values[0];
        var numero = parseInt(values[1]);

        var destino1 = 'b' + (numero - 1);
        var destino2 = 'a' + (numero - 2);
        var destino3 = 'b' + (numero - 3);
        var destino4 = 'c' + (numero - 4);
        var destino5 = 'd' + (numero - 5);
        var destinos = [destino1, destino2, destino3, destino4, destino5];

        $.each(destinos, function(index, pos) {
            chess.Move(ficha, pos);
        }.bind(this));

    },

    MostrarPosicion: function(ficha) {
        var posicion = chess.posiciones.find(x => x.ficha == ficha);

        if (posicion) {

            return posicion;
        }

        return null;
    }
}

function Mover_Alfil() {
    alfil.Mover();
}