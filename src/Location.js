var request = new XMLHttpRequest();
start_lon =0 ;
start_lat = 0;
end_lon=0;
end_lat=0;


request.open('GET', 'https://api.openrouteservice.org/v2/directions/driving-car?api_key=5b3ce3597851110001cf6248e39c9bb51e2041b3a1ee6f916657c775&start=${start_lon},${start_lat}+&end=${end_lon},${end_lat}');

request.setRequestHeader('Accept', 'application/json, application/geo+json, application/gpx+xml, img/png; charset=utf-8');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

request.send();