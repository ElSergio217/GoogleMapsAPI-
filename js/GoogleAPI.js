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
	
	var Location = [
			{ 'name': 'BXL', 'lat': 40.816638, 'lng': -73.890643 },
			{ 'name': 'Scynyc', 'lat': 40.810950, 'lng': -73.929081 },
			{ 'name': 'Ghetto Film School', 'lat': 40.8063976, 'lng': -73.9281422 },
			{ 'name': 'American Museum of Natural History', 'lat': 40.7813241, 'lng': -73.9739882 },
			{ 'name': 'BrainPOP', 'lat': 40.7429639, 'lng': -73.9922767 }
		];
	
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
		$("#" + name).modal();
    });
}