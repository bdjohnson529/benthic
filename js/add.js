var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var labelIndex = 0;

function initialize() {
  var lla = { lat: 34.042496, lng: -118.255447 };
  var options = {
    zoom: 10,
    center: lla,
  }
  var map = new google.maps.Map(document.getElementById('map'), options);
  var html = "<table>" +
               "<tr><td>Your Name:</td> <td><input type='text' id='name'/> </td> </tr>" +
               "<tr><td>Work Out Site:</td> <td><input type='text' id='address'/></td> </tr>" +
               "<tr><td></td><td><input type='button' value='Save & Close' onclick='saveData()'/></td></tr>";

  // data input window
  infowindow = new google.maps.InfoWindow({
    content: html
  });

  google.maps.event.addListener(map, 'rightclick', function(event) {
    marker = new google.maps.Marker({
      position: event.latLng,
      map: map
    });
    console.log('Added new marker.');
    // click to open data entry window
    google.maps.event.addListener(marker, "click", function() {
      console.log('Entering data.');
      infowindow.open(map, marker);
    });

  });
}

function saveData() {
  // deprecated escape function encodes a string
  var name = escape(document.getElementById("name").value);
  var address = escape(document.getElementById("address").value);
  //var type = document.getElementById("type").value;
  var latlng = marker.getPosition();

  var url = "path.html";
  downloadUrl(url, function(data, responseCode) {
    if (responseCode == 200 && data.length >= 1) {
      infowindow.close();
      console.log("success!");
      console.log(name);
      console.log(address);
      //document.getElementById("message").innerHTML = "Location added.";
    }
  });
}

function downloadUrl(url, callback) {
  var request = window.ActiveXObject ?
      new ActiveXObject('Microsoft.XMLHTTP') :
      new XMLHttpRequest;

  request.onreadystatechange = function() {
    if (request.readyState == 4) {
      request.onreadystatechange = doNothing;
      callback(request.responseText, request.status);

      console.log("in readystatechange");

    }
  };

  request.open('GET', url, true);
  request.send(null);
}

function doNothing() {}

/***
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
***/

function run(jQuery) {
	google.maps.event.addDomListener(window, 'load', initialize)
}