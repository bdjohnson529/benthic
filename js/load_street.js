function streetView() {

  var lla = {lat: 33.764675, lng: -118.183690};

  var panorama = new google.maps.StreetViewPanorama(
    document.getElementById('pano'), {
      position: lla,
      pov: {
        heading: 180,
        pitch: 0,
        zoom: 4
      }
  });

}