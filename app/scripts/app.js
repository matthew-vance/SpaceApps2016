//initialize app
angular.module('app', ['leaflet-directive']);

angular.module('app').controller('MajorTom', MainCtrl);

function MainCtrl (){
    var bus = this;
    bus.message = "Space Apps 2016 Space Tour!";

    bus.items = [ 'museum',
    'restaurant',
    'landmark',
    'theater',
    'meteorite crater'
    ];
}
