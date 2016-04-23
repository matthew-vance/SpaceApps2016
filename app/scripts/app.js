//initialize app
angular.module('app', []);

angular.module('app').controller('MajorTom', [$window, function(){
  
  var bus = this;
  bus.message = "Space Apps 2016 Space Tour!";

  bus.items = [ 'museum',
  'restaurant',
  'landmark',
  'theater',
  'meteorite crater'
  ];

  var map = $window.L.map('map');
  bus.MapModel = {
    map: map,
    basemaps : basemaps,
    layers: layers,
    zoom: 8

  }

}]);