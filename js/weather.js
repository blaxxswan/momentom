const weather = document.querySelector('#weather');
const API_KEY = '97789158e7b87eb02f6f4481f41d97fe';

// getCurrentPosition은 2개의 함수를 argument로 가짐
// 1. 성공했을때 실행할 함수
function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    // fetch는 promise임
    fetch(url).then((response) =>
        response.json().then((data) => {
            const weather = document.querySelector('#weather span:first-child ');
            const city = document.querySelector('#weather span:last-child ');
            city.innerText = data.name;
            weather.innerText = `${data.weather[0].main} / ${data.main.temp} °C`;
        })
    );
}
// 2. 오류가 났을때 실행할 함수
function onGeoError() {
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
