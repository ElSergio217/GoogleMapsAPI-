var map;
function initMap() {
  var styles = [
    {
      stylers: [
        { hue: "#00ffe6" },
        { saturation: -20 }
      ]
    },{
      featureType: "road",
      elementType: "geometry",
      stylers: [
        { lightness: 100 },
        { visibility: "simplified" }
      ]
    },{
      featureType: "road",
      elementType: "labels",
      stylers: [
        { visibility: "off" }
      ]
    }
  ];

  var styledMap = new google.maps.StyledMapType(styles,
    {name: "Styled Map"});
	
	map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 40.7889673, lng: -73.9201427 },
        zoom: 12
    });
	
	map.mapTypes.set('map_style', styledMap);
	map.setMapTypeId('map_style');
	
	for (var x in Location) {
        var building = Location[x];
        var location = new google.maps.LatLng(building.lat, building.lng);
        addMarker(map, building.name, location);
    }
}

function addMarker(map, name, location) {
    var marker = new google.maps.Marker({
        position: location,
        map: map,
		icon:"img/icon.png"
    });

    google.maps.event.addListener(marker, 'click', function () {
        if (typeof infowindow != 'undefined') infowindow.close();
        infowindow = new google.maps.InfoWindow({
            content: name
        });
        infowindow.open(map, marker);
		$("#myModal").modal();
    });
}