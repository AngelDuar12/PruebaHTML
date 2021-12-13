requirejs.config({
    baseUrl: '../node_modules',
    paths: {

        jquery: 'jquery/dist/jquery.min',
        chess: '../chess/chess',
        caballo: '../chess/caballo',
        alfil: '../chess/alfil',
        jquery_ui: 'jquery-ui-dist/jquery-ui.min',
        app: '../chess/app'
    },
    shim: {
        'app': ['jquery', 'jquery_ui', 'chess', 'caballo', 'alfil'],
    }

});

// Inicia la aplicacion
require(['app']);