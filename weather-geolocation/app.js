function weather(){
    let locElem = document.getElementById('location');
    let API_KEY = 'bb2ac17d2239aa0e0c4825f8bc77b9fb';
    let api_url = 'https://api.forecast.io/forecast/';

    navigator.geolocation.getCurrentPosition(success, error);

    function success(position){
        let lat = position.coords.latitude;
        let long = position.coords.longitude;

        locElem.innerHTML = 'Latitude is ' + lat.toFixed(4) + '° Longitude is ' + long.toFixed(4) + '°';

        $.getJSON(api_url + API_KEY + '/' + lat + ',' + long + '?callback=?', function(data){
            $('#temp').html(data.currently.temperature + '° F');
            $('#minutely').html(data.minutely.summary);
        });
    }

    function error(){
        locElem.innerHTML = "Unable to retrieve location";
    }

    locElem.innerHTML = "Locating...";
}

weather();