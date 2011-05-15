var newMarker;
var map;
getLatLng = function() {
 	var locationName = $('#locationName').val();
	var geocoder = new google.maps.Geocoder();
	geocoder.geocode({"address": locationName}, function(result, status) {
		if(status == google.maps.GeocoderStatus.OK) {
			$('#lat').text(result[0].geometry.location.b);
			$('#long').text(result[0].geometry.location.c);
			var latlng = new google.maps.LatLng(result[0].geometry.location.b, result[0].geometry.location.c);
			newMarker = new google.maps.Marker({position: latlng, map: map});
		}
		else {
			alert('Unknown Location');
		}
	});
};
getCurrentLocationName = function(latitude, longitude) {
	var latlng = new google.maps.LatLng(latitude, longitude);
	if(latlng){
		var geocoder = new google.maps.Geocoder();
		geocoder.geocode({"latLng": latlng}, function(result, status){
			if(status == google.maps.GeocoderStatus.OK) {
				$('#location').text(result[0].formatted_address);
			}
			else {
				alert('Unknown Location');
			}
		});
	}
	else {
		alert('Not Supported');
	}
};
navigator.geolocation.getCurrentPosition(function(position){
	var latitude = position.coords.latitude;
	var longitude = position.coords.longitude;
	alert(latitude + ' ' + longitude);
	$('#latitude').text(latitude);
	$('#longitude').text(longitude);
	getCurrentLocationName(latitude, longitude);
	setMarker(latitude, longitude);
});

setMarker = function(latitude, longitude){
	var latLng = new google.maps.LatLng(latitude, longitude);
	var options = {
      zoom: 6,
      center: latLng,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
	map = new google.maps.Map(document.getElementById("map"), options);
	var marker = new google.maps.Marker({position: latLng, map: map});
};
$('#getLatLong').click(getLatLng);