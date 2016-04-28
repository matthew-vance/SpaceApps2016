//initialize app
angular.module('app', [
    'app.controllers'
]);

angular.module('app.controllers', ['leaflet-directive', 'app.services']);

angular.module('app.services', []);
