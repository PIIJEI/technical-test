function initMap() {
	var uluru = {lat: 53.482573, lng: -2.236074}
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 17,
		center: uluru
	});
	var marker = new google.maps.Marker({
		position: uluru,
		map: map
	});
}

var gmap = document.getElementById("gmap");
gmap.setAttribute("src", "https://maps.googleapis.com/maps/api/js?key=AIzaSyBm8T4XwMQ5oYR34i9VsRIMjaAd55_66Qg&callback=initMap");