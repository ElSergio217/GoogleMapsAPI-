var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 40.8248132, lng: -73.8989097 },
        zoom: 14
    });

    for (var x in Location) {
        var building = Location[x];
        var location = new google.maps.LatLng(building.lat, building.lng);
        addMarker(map, building.name, location);
    }
}

function addMarker(map, name, location) {
    var marker = new google.maps.Marker({
        position: location,
        map: map
    });

    google.maps.event.addListener(marker, 'click', function () {
        if (typeof infowindow != 'undefined') infowindow.close();
        infowindow = new google.maps.InfoWindow({
            content: name
        });
        infowindow.open(map, marker);
    });
}