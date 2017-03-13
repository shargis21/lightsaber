var osmUrl='http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
var osmAttrib='Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors';
var osm = new L.TileLayer(osmUrl, {minZoom: 8, maxZoom: 18, attribution: osmAttrib});

var satLayer = L.tileLayer( 'https://api.mapbox.com/styles/v1/shargis21/cj08j960e00122sn51af3s2et/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic2hhcmdpczIxIiwiYSI6ImNqMDhqMTlkeDA2YzQyd29jODhtdjAzYXgifQ.eLaugHBe-WtR9SN3fSvi4A', {
    attribution: '&copy; <a href="http://osm.org/copyright" title="OpenStreetMap" target="_blank">OpenStreetMap</a> contributors | Tiles Courtesy of <a href="http://www.mapquest.com/" title="MapQuest" target="_blank">MapQuest</a> <img src="http://developer.mapquest.com/content/osm/mq_logo.png" width="16" height="16">',
    subdomains: ['otile1','otile2','otile3','otile4']
});

var drawLayer = L.tileLayer( 'https://api.mapbox.com/styles/v1/shargis21/cj08j960e00122sn51af3s2et/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic2hhcmdpczIxIiwiYSI6ImNqMDhqMTlkeDA2YzQyd29jODhtdjAzYXgifQ.eLaugHBe-WtR9SN3fSvi4A', {
    attribution: '&copy; <a href="http://osm.org/copyright" title="OpenStreetMap" target="_blank">OpenStreetMap</a> contributors | Tiles Courtesy of <a href="http://www.mapquest.com/" title="MapQuest" target="_blank">MapQuest</a> <img src="http://developer.mapquest.com/content/osm/mq_logo.png" width="16" height="16">',
    subdomains: ['otile1','otile2','otile3','otile4']
});

var mapLayers = {
    "Satellite": satLayer,
    "Map View": drawLayer,
    "Open Street Maps": osm
}

var map = L.map('map-container').setView([46.852, -121.760], 13);

L.control.layers(mapLayers).addTo(map);
satLayer.addTo(map);

var marker = L.marker([46.852, -121.760]).addTo(map);
marker.bindPopup("<b>Welcome to Mt. Rainier!</b><br>This peak is 4,392 feet high.");

L.tileLayer('https://api.mapbox.com/styles/v1/shargis21/cj08j960e00122sn51af3s2et/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic2hhcmdpczIxIiwiYSI6ImNqMDhqMTlkeDA2YzQyd29jODhtdjAzYXgifQ.eLaugHBe-WtR9SN3fSvi4A', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'your.mapbox.project.id',
    accessToken: 'your.mapbox.public.access.token'
}).addTo(mymap);