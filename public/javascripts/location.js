function initMap() {

var cen1 = {lat: 37.567625, lng: -121.9773077};
var cen2 = {lat: 17.4334335, lng: 78.4842251};

var r1 = {lat: 37.567625, lng: -121.9773077};
var r2 = {lat: 17.4334335, lng: 78.4842251};

var map1 = new google.maps.Map(document.getElementById('map1'), {
    				zoom: 10,
    				center: cen1
  			});

var map2 = new google.maps.Map(document.getElementById('map2'), {
    				zoom: 10,
    				center: cen2
  			});


var mr1 = new google.maps.Marker({
    			position: r1,
    			map: map1,
          		icon: '/images/red_flag.png'
  			});


var mr2 = new google.maps.Marker({
    			position: r2,
    			map: map2,
          		icon: '/images/red_flag.png'
  			});


}