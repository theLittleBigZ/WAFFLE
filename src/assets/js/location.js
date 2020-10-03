

function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showAddress);
    } else { 
      console.log("Geolocation is not supported by this browser.");
    }
}

function showPosition(position) {
    console.log(position.coords.latitude + 
    "," + position.coords.longitude);
} 

function showAddress(position){
  const geocoder = new google.maps.Geocoder();
  const latlng = {
    lat: parseFloat(position.coords.latitude),
    lng: parseFloat(position.coords.longitude),
  };
  geocoder.geocode({ location: latlng }, (results, status) => {
    if (status === "OK") {
      if (results[0]) {
        console.log(results[0].formatted_address)
      } else {
        window.alert("No results found");
      }
    } else {
      window.alert("Geocoder failed due to: " + status);
    }
  });
}

function geocodeLatLng(geocoder, map, infowindow) {
  const input = document.getElementById("latlng").value;
  const latlngStr = input.split(",", 2);
  const latlng = {
    lat: parseFloat(latlngStr[0]),
    lng: parseFloat(latlngStr[1]),
  };
  geocoder.geocode({ location: latlng }, (results, status) => {
    if (status === "OK") {
      if (results[0]) {
        map.setZoom(11);
        const marker = new google.maps.Marker({
          position: latlng,
          map: map,
        });
        infowindow.setContent(results[0].formatted_address);
        infowindow.open(map, marker);
      } else {
        window.alert("No results found");
      }
    } else {
      window.alert("Geocoder failed due to: " + status);
    }
  });
}

