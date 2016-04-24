//initialize app
angular.module('app', ['leaflet-directive'])
    .controller('MajorTom', MainCtrl);

function MainCtrl() {
    var bus = this;
    bus.message = "Space Apps 2016 Space Tour!";
    bus.info = "THIS IS NOT ABOUT DONALD TRUMP ANYMORE";

    bus.items = [
        {
            name: "Glenn Research Center",
            marker:{
                lat: 41.4155048,
                lng: -81.8617916,
                message: "Glenn Research Center",
                focus: false,
                draggable: false
            },
            link: "https://en.wikipedia.org/wiki/Glenn_Research_Center"
        },
        {
            name: "Goddard Space Flight Center",
            marker: {
                lat: 38.9917188,
                lng: -76.8525762,
                message: "Goddard Space Flight Center",
                focus: false,
                draggable: false
            },
            link: "https://en.wikipedia.org/wiki/Goddard_Space_Flight_Center"
        },
        {
            name: "Jet Propulsion Laboratory",
            marker: {
                lat: 34.2013081,
                lng: -118.1713944,
                message: "Jet Propulsion Laboratory",
                focus: false,
                draggable: false
            }
        },
        {
            name: "Johnson Space Center",
            marker: {
                lat: 29.5529119,
                lng: -95.0934009,
                message: "Lyndon B. Johnson Space Center (JSC)",
                focus: false,
                draggable: false
            }
        },
        {
            name: "Kennedy Space Center",
            marker: {
                lat: 28.5728722,
                lng: -80.9203774,
                message: "John F. Kennedy Space Center (KSC)",
                focus: false,
                draggable: false
            }
        },
    ];

    bus.markers = [];

    for (var i = bus.items.length - 1; i >= 0; i--) {
        bus.markers.push(bus.items[i].marker);
    }

    bus.center = {
        lat: 39,
        lng: -98,
        zoom: 4
    };
    
    bus.defaults = {
        scrollWheelZoom: false
    };

    bus.displaySummary = function(item){
        bus.name = item.name;
        bus.description = item.link;

    };
};
