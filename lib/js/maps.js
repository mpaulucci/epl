$(document).ready(function() {
  var map = new GMaps({
    div: '#map',
    scrollwheel: false,       
    lat: -34.6097911,
    lng: -58.3792211
  });

  map.addMarker({
    lat: -34.6097911,
    lng: -58.3792211,
    title: 'Estudio Paulucci Lahusen',
    infoWindow: {
      content: '<p>Estudio Paulucci Lahusen</p>'
    }
  });
});
