requirejs.config({
    baseUrl: '../node_modules',
    paths: {

        jquery: 'jquery/dist/jquery.min',
        chess: 'chess'
    },
    shim: {
        'app': ['jquery', 'chess'],
    }


});

// Inicia la aplicacion
require(['app']);