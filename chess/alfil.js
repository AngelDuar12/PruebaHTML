var alfil = {
    Mover: function() {

        var ficha = 'blancas-alfil-izq';
        var actual = this.MostrarPosicion(ficha);

        var values = Array.from(actual.posicion);
        var letra = values[0];
        var numero = parseInt(values[1]);

        // b8 => a6 // Bajo una letra y salto dos casillas a la izq
        var destino1 = 'a' + (numero - 2);
        var destino2 = 'c' + (numero - 2);
        var destinos = [destino1, destino2];

        $.each(destinos, function(index, pos) {
            board.Move(ficha, pos);
        }.bind(this));

        // board.Move(ficha, 'c6');
        // actual = this.MostrarPosicion(ficha);
        // board.Move(ficha, 'a5');
        // actual = this.MostrarPosicion(ficha);
        // board.Move(ficha, 'b3');
        // actual = this.MostrarPosicion(ficha);

        // Cuales serian las posibles posiciones a las que se 
        // puede mover un caballo

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