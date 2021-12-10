var caballo = {
    Mover: function() {

        board.Move('blancas-caballo-izq', 'c6');
        board.Move('blancas-caballo-izq', 'a5');
        board.Move('blancas-caballo-izq', 'b3');
    }
}

function Mover_Caballo() {
    caballo.Mover();
}