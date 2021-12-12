requirejs.config({
    baseUrl: '../node_modules',
    paths: {

        jquery: 'jquery/dist/jquery.min',
        chess: 'chess',
        app: 'app'
    },
    shim: {
        'app': ['jquery', 'chess'],
    }

});

// Inicia la aplicacion
require(['app']);