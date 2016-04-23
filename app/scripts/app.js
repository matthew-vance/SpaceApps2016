//initialize app
angular.module('app', ['leaflet-directive'])
    .controller('MajorTom', MainCtrl);

function MainCtrl() {
    var bus = this;
    bus.message = "Space Apps 2016 Space Tour!";

    bus.items = ['museum',
        'restaurant',
        'landmark',
        'theater',
        'meteorite crater'
    ];
    bus.center = {
        lat: 59.91,
        lng: 10.75,
        zoom: 12
    };
    bus.markers = {
        marker: {
            lat: 59.91,
            lng: 10.75,
            message: "I want to travel here!",
            focus: true,
            draggable: false
        }
    };
    bus.defaults = {
        scrollWheelZoom: false
    };
};
