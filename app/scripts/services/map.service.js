angular.module("app.services")
    .factory('MapService', MapService);

function MapService() {
    return {
        getBaseLayers: GetBaseLayers,
        getMaxBounds: GetMaxBounds,
        getCenter: GetCenter,
        getDefaults: GetDefaults,
        getDistanceFromLatLonInKm: GetDistanceFromLatLonInKm,
        zoomToPoint: ZoomToPoint
    };
}

function GetBaseLayers() {
    return {
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
}

function GetMaxBounds() {
    return {
        northEast: {
            lat: 49.5904,
            lng: -66.9326
        },
        southWest: {
            lat: 24.9493,
            lng: -125.0011
        }
    };
}

function GetCenter(){
    return {
        lat: 37,
        lng: -95,
        zoom: 4
    };
}

function GetDefaults(){
    return {
        minZoom: 4
    };
}

function GetDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
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

function ZoomToPoint( leafletData, item){
    leafletData.getMap().then(function(map) {
        map.setView(new L.latLng(item.marker.lat, item.marker.lng), 14, {
            animate: true
        });
    })
}
