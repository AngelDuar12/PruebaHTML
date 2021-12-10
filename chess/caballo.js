var caballo = {
    Mover: function() {

        var ficha = 'blancas-caballo-izq';

        this.MostrarPosicion(ficha);
        board.Move(ficha, 'c6');
        this.MostrarPosicion(ficha);
        board.Move(ficha, 'a5');
        this.MostrarPosicion(ficha);
        board.Move(ficha, 'b3');
        this.MostrarPosicion(ficha);
        this.MostrarPosicion(ficha);

        // Cuales serian las posibles posiciones a las que se 
        // puede mover un caballo

    },

    MostrarPosicion: function(ficha) {
        var posicion = board.posicionesIniciales.find(x => x.name == ficha);

        if (posicion) {
            console.log(ficha + ' esta en la posicion actual:' + posicion);
        }
    }
}

function Mover_Caballo() {
    caballo.Mover();
}