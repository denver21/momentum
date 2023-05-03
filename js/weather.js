const API_KEY = "6776b6461b5ac09cffbe5281d0de3846"

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    /*위도와 경도*/
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json())
    .then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
        city.innerText = data.name;
    });
}

function geoError(){
    alert("Failed to load current location.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, geoError);