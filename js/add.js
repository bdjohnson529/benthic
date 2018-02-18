// Bind functions: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind

function initMap() {

  var uluru = {lat: 33.764019, lng: -118.183716};

  var map = new google.maps.Map(document.getElementById('map'),{
    zoom: 15,
    center: uluru
  });

  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });

}


function streetView() {

	// sample HTTP request
	var xhr = new XMLHttpRequest(),
    method = "GET",
    url = "https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=AIzaSyC9WVFO98bs2BibaIgiHo6JlEareu2CrVM";

	xhr.open(method, url, true);
	xhr.onreadystatechange = function () {
	  if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
	    console.log(xhr.responseText);
	  }
	};
	xhr.send();



}
