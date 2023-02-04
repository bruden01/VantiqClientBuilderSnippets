// adjust the map boundaries
var bounds = new google.maps.LatLngBounds();
var mapWidget = client.getWidget("DynamicMapViewer1");
var map = mapWidget.map;           
var locationHash = mapWidget.locationHash;

for (var key in locationHash) {
    var marker = locationHash[key].gmMarker;
    bounds.extend(marker.getPosition());
}

map.fitBounds(bounds);
