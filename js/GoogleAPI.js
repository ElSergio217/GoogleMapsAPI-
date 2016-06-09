var map;
var xmlhttp = new XMLHttpRequest();
var url = "https://concrete-sol-113722.firebaseio.com/data.json";
var arr="";

xmlhttp.onreadystatechange = function() {
	if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
		var myArr = JSON.parse(xmlhttp.responseText);
		//userData(myArr);
		arr=myArr;
	}
};
xmlhttp.open("GET", url, true);
xmlhttp.send();

initMap();

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


  
	navigator.geolocation.getCurrentPosition(function(position) {
        var pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
        };
		//alert(pos.lat + "," + pos.lng);	
    });
	
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
			{ 'name': 'Scenyc', 'lat': 40.810950, 'lng': -73.929081 },
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

var spot="";
function addMarker(map, name, location) {
	var holder = "";
	var i;
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
		spot=name;
        //infowindow.open(map, marker);
		document.getElementById("Spotname").innerHTML=name;
		holder="";
		for(i = 0; i < arr.length; i++) {
			if(spot=="BXL"){
				if(typeof arr[i].BXL!="undefined"){
					holder +='<h5>"' + arr[i].BXL + '"</h5>' + "<h5><a href='http://" + arr[i].Wordpress + "'>" + arr[i].Name + '</a></h5>'+'<br>';
					document.getElementById("1").src = 'https://firebasestorage.googleapis.com/v0/b/concrete-sol-113722.appspot.com/o/15.png?alt=media&token=a36e2f73-d12e-41d4-8fda-6020871fae1b';
					document.getElementById("2").src = 'https://firebasestorage.googleapis.com/v0/b/concrete-sol-113722.appspot.com/o/16.png?alt=media&token=a36e2f73-d12e-41d4-8fda-6020871fae1b';
					document.getElementById("3").src = 'https://firebasestorage.googleapis.com/v0/b/concrete-sol-113722.appspot.com/o/17.png?alt=media&token=a36e2f73-d12e-41d4-8fda-6020871fae1b';
				}
			}
			if(spot=="Scenyc"){
				if(typeof arr[i].Scenyc!="undefined"){
					holder += '<h5>"' + arr[i].Scenyc + '"</h5>' + "<h5><a href='http://" + arr[i].Wordpress + "'>" + arr[i].Name + '</a></h5>'+'<br>';
					document.getElementById("1").src = 'https://firebasestorage.googleapis.com/v0/b/concrete-sol-113722.appspot.com/o/18.png?alt=media&token=a36e2f73-d12e-41d4-8fda-6020871fae1b';
					document.getElementById("2").src = 'https://firebasestorage.googleapis.com/v0/b/concrete-sol-113722.appspot.com/o/19.png?alt=media&token=a36e2f73-d12e-41d4-8fda-6020871fae1b';
					document.getElementById("3").src = 'https://firebasestorage.googleapis.com/v0/b/concrete-sol-113722.appspot.com/o/20.png?alt=media&token=a36e2f73-d12e-41d4-8fda-6020871fae1b';
				}
			}
			if(spot=="Ghetto Film School"){
				if(typeof arr[i].GFS!="undefined"){
					holder += '<h5>"' + arr[i].GFS + '"</h5>' + "<h5><a href='http://" + arr[i].Wordpress + "'>" + arr[i].Name + '</a></h5>'+'<br>';
					document.getElementById("1").src = 'https://firebasestorage.googleapis.com/v0/b/concrete-sol-113722.appspot.com/o/7.png?alt=media&token=a36e2f73-d12e-41d4-8fda-6020871fae1b';
					document.getElementById("2").src = 'https://firebasestorage.googleapis.com/v0/b/concrete-sol-113722.appspot.com/o/8.png?alt=media&token=a36e2f73-d12e-41d4-8fda-6020871fae1b';
					document.getElementById("3").src = 'https://firebasestorage.googleapis.com/v0/b/concrete-sol-113722.appspot.com/o/9.png?alt=media&token=a36e2f73-d12e-41d4-8fda-6020871fae1b';
				}
			}
			if(spot=="American Museum of Natural History"){
				if(typeof arr[i].AMNH!="undefined"){
					holder += '<h5>"' + arr[i].AMNH + '"</h5>' + "<h5><a href='http://" + arr[i].Wordpress + "'>" + arr[i].Name + '</a></h5>'+'<br>';
					document.getElementById("1").src = 'https://firebasestorage.googleapis.com/v0/b/concrete-sol-113722.appspot.com/o/4.png?alt=media&token=a36e2f73-d12e-41d4-8fda-6020871fae1b';
					document.getElementById("2").src = 'https://firebasestorage.googleapis.com/v0/b/concrete-sol-113722.appspot.com/o/5.png?alt=media&token=a36e2f73-d12e-41d4-8fda-6020871fae1b';
					document.getElementById("3").src = 'https://firebasestorage.googleapis.com/v0/b/concrete-sol-113722.appspot.com/o/6.png?alt=media&token=a36e2f73-d12e-41d4-8fda-6020871fae1b';
				}
			}
			if(spot=="BrainPOP"){
				if(typeof arr[i].BP!="undefined"){
					holder += '<h5>"' + arr[i].BP + '"</h5>' + "<h5><a href='http://" + arr[i].Wordpress + "'>" + arr[i].Name + '</a></h5>'+'<br>';
					document.getElementById("1").src = 'https://firebasestorage.googleapis.com/v0/b/concrete-sol-113722.appspot.com/o/12.png?alt=media&token=a36e2f73-d12e-41d4-8fda-6020871fae1b';
					document.getElementById("2").src = 'https://firebasestorage.googleapis.com/v0/b/concrete-sol-113722.appspot.com/o/13.png?alt=media&token=a36e2f73-d12e-41d4-8fda-6020871fae1b';
					document.getElementById("3").src = 'https://firebasestorage.googleapis.com/v0/b/concrete-sol-113722.appspot.com/o/14.png?alt=media&token=a36e2f73-d12e-41d4-8fda-6020871fae1b';
				}
			}
			if(spot=="NYU"){
				if(typeof arr[i].NYU!="undefined"){
					holder += '<h5>"' + arr[i].NYU + '"</h5>' + "<h5><a href='http://" + arr[i].Wordpress + "'>" + arr[i].Name + '</a></h5>'+'<br>';
					document.getElementById("1").src = 'https://firebasestorage.googleapis.com/v0/b/concrete-sol-113722.appspot.com/o/3.png?alt=media&token=a36e2f73-d12e-41d4-8fda-6020871fae1b';
					document.getElementById("2").src = 'https://firebasestorage.googleapis.com/v0/b/concrete-sol-113722.appspot.com/o/11.png?alt=media&token=a36e2f73-d12e-41d4-8fda-6020871fae1b';
					document.getElementById("3").src = 'https://firebasestorage.googleapis.com/v0/b/concrete-sol-113722.appspot.com/o/10.png?alt=media&token=a36e2f73-d12e-41d4-8fda-6020871fae1b';
				}
			}
			if(spot=="MS"){
				if(typeof arr[i].MS!="undefined"){
					holder += '<h5>"' + arr[i].MS + '"</h5>' + "<h5><a href='http://" + arr[i].Wordpress + "'>" + arr[i].Name + '</a></h5>'+'<br>';
					document.getElementById("1").src = 'https://firebasestorage.googleapis.com/v0/b/concrete-sol-113722.appspot.com/o/1.png?alt=media&token=a36e2f73-d12e-41d4-8fda-6020871fae1b';
					document.getElementById("2").src = 'https://firebasestorage.googleapis.com/v0/b/concrete-sol-113722.appspot.com/o/2.png?alt=media&token=a36e2f73-d12e-41d4-8fda-6020871fae1b';
					document.getElementById("3").src = 'https://firebasestorage.googleapis.com/v0/b/concrete-sol-113722.appspot.com/o/21.png?alt=media&token=a36e2f73-d12e-41d4-8fda-6020871fae1b';
				}
			}
		}
		document.getElementById("spot").innerHTML = holder;
		$("#Modal").modal();
    });
}
