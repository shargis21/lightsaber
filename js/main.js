$(document).ready(function() {


// Satellite Map

var satelliteLayer = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoiaml1bnR3YW5nIiwiYSI6ImNpeWs5OWVvMjAwMHYyd25yNnh5b2wzZHUifQ.ZIXQ4cl0l5C5UNYuuJtTzw', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'your.mapbox.project.id',
    accessToken: 'pk.eyJ1Ijoiaml1bnR3YW5nIiwiYSI6ImNpeWs5OWVvMjAwMHYyd25yNnh5b2wzZHUifQ.ZIXQ4cl0l5C5UNYuuJtTzw'
});


//Default Map

var defaultLayer = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v10/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoiaml1bnR3YW5nIiwiYSI6ImNpeWs5OWVvMjAwMHYyd25yNnh5b2wzZHUifQ.ZIXQ4cl0l5C5UNYuuJtTzw', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox://styles/mapbox/streets-v10',
    accessToken: 'pk.eyJ1Ijoiaml1bnR3YW5nIiwiYSI6ImNpeWs5OWVvMjAwMHYyd25yNnh5b2wzZHUifQ.ZIXQ4cl0l5C5UNYuuJtTzw'
});

  

// Map default position, coordinates, zoom, and layers

var myMap = L.map('map-container', {
    center: [46.852, -121.760],
    zoom: 9,
    layers: [satelliteLayer, defaultLayer]
});



// Location Markers
  
  L.marker([46.853, -121.760]).addTo(myMap)
  .bindPopup('Welcome to Mt. Rainier! This peak is 4,392 feet high.');
  
  L.marker([47.0137235,-121.38759]).addTo(myMap)
  .bindPopup('Norse Peak Wilderness');
  
  L.marker([46.7859626,-121.7369366]).addTo(myMap)
  .bindPopup('Skyline Loop Trailhead');
  
  L.marker([46.7859626,-121.7435026]).addTo(myMap)
  .bindPopup('Myrtle Falls');
  
  L.marker([46.8240324,-121.8631506]).addTo(myMap)
  .bindPopup('Liberty Cap');
  
  

  

var mtnMaps = {
    "Satellite": satelliteLayer,
    "Default": defaultLayer,
};  
   

// Controls

L.control.layers(mtnMaps).addTo(myMap);   


});

