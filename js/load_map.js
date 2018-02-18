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
