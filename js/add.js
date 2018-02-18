var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var labelIndex = 0;

function initialize() {
  var lla = { lat: 34.042496, lng: -118.255447 };
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10,
    center: lla
  });

  // This event listener calls addMarker() when the map is clicked.
  google.maps.event.addListener(map, 'rightclick', function(event) {
    addMarker(event.latLng, map);
  });
}

function addMarker(location, map) {
  // Add the marker at the clicked location, and add the next-available label
  // from the array of alphabetical characters.
  var marker = new google.maps.Marker({
    position: location,
    label: labels[labelIndex++ % labels.length],
    map: map
	});
    
  map.setCenter(location);
}

function run(jQuery) {
	google.maps.event.addDomListener(window, 'load', initialize)
}