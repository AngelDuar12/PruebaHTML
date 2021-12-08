
// Json
var perro =
{
    // Atributos
    color: 'cafe',
    orejas: 2,
    ojos: 2,
    patas: 4,

    // Metodos
    Orinar: function () {
        
        var item='<li>acabo de hacer chichi</li>';
        $('#lista').append(item);
        console.log('acabo de hacer chichi');
    },
    Ladrar: function () {

        var item='<li>GUAU GUAU</li>';
        $('#lista').append(item);
        console.log('GUAU GUAU');
    }
}
