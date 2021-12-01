const API_KEY = "37ca88f8332cd874758015d599e44934";
const WEATHER = document.getElementById("weather")

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    console.log(lat, lng);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const name = data.name;
            const weather = data.weather[0].main;
            WEATHER.innerText = `${name}, ${weather}`
        })
}
function onGeoError(){
    alert("Can't find your location");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);