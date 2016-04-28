angular.module('app.controllers')
    .controller('MainCtrl', MainCtrl);

function MainCtrl($scope, $window, leafletData, DataService) {
    var main = this;
    main.message = "In My Backyard";
    main.sidebarActive = false;

    main.layers = {
        baselayers: {
            osm: {
                name: "Open Street Map",
                url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
                type: "xyz",
                options: {
                    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                }
            },
            esri: {
                name: "Aerial",
                url: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
                type: "xyz",
                options: {
                    attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
                }
            }
        }
    }

    main.items = DataService.getItems();

    main.markers = DataService.getMarkers();

    main.maxbounds = {
        northEast: {
            lat: 49.5904,
            lng: -66.9326
        },
        southWest: {
            lat: 24.9493,
            lng: -125.0011
        }
    };

    main.center = {
        lat: 37,
        lng: -95,
        zoom: 4
    };

    main.defaults = {
        minZoom: 4
    };

    main.displaySummary = function(item) {

        leafletData.getMap().then(function(map) {
            map.setView(new L.latLng(item.marker.lat, item.marker.lng), 14, {
                animate: true
            });
        })

        main.selectedItemId = item.marker.id;
        main.name = item.name;
        main.link = item.link;
        main.description = item.description;
    };

    main.toggleSideNav = function() {
        main.sidebarActive = !main.sidebarActive;
    }

    $scope.$on('leafletDirectiveMarker.click', function(e, args) {
        var id = args.model.id;

        var facility = null;
        for (var j = 0; j < main.items.length; ++j) {
            if (main.items[j].marker.id === id) {
                facility = main.items[j];
                break; //dance
            }
        }

        main.displaySummary(facility);

    });

    if ($window.navigator.geolocation) {

        $window.navigator.geolocation.watchPosition(function(position) {

            for (var i = 0; i < main.items.length; i++) {
                var distanceToItem = getDistanceFromLatLonInKm(position.coords.latitude, position.coords.longitude, main.items[i].marker.lat, main.items[i].marker.lng);
                if (distanceToItem <= 10) {
                    main.displaySummary(main.items[i]);
                }
            }
        });
    }

    function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
        var R = 6371; // Radius of the earth in km
        var dLat = deg2rad(lat2 - lat1); // deg2rad below
        var dLon = deg2rad(lon2 - lon1);
        var a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var d = R * c; // Distance in km
        return d;
    }

    function deg2rad(deg) {
        return deg * (Math.PI / 180)
    }
};
