document.addEventListener("DOMContentLoaded", () => {
    const apiKey = '3a37a3284cd6ada8f22e44e46aeb2fdc';
    const weatherInfo = document.getElementById('weatherInfo');

    mapboxgl.accessToken = 'pk.eyJ1IjoiYnJ1bm9wYW56YWNjaGkiLCJhIjoiY2xvM2oyZG9mMGZoYjJ3dGR1eXNkZGQzdyJ9.MaO03BaJJRwPI6VT5x-hBw';

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;

            document.getElementById('map').innerHTML = '';

            fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`)
                .then((response) => response.json())
                .then((data) => {
                    const location = data.name;
                    const temperatureKelvin = data.main.temp;
                    const windSpeed = data.wind.speed;
                    const description = data.weather[0].description;
                    const weatherIcon = data.weather[0].icon;
                    const temperature = data.main.temp;
                    const temperatureCelsius = temperatureKelvin - 273.15;

                    const windChill = 13.12 + 0.6215 * temperatureCelsius - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperatureCelsius * Math.pow(windSpeed, 0.16);

                    const weatherHTML = `
                        <h4>Weather in ${location}:</h4>
                        <p>Temperature: ${temperatureCelsius.toFixed(2)}°C</p>
                        <p>Wind Chill: ${windChill.toFixed(2)}°C</p>
                        <p>Wind Speed: ${windSpeed} m/s</p>
                        <p>Description: ${description} </p>
                        <img id="weather-icon" src="https://openweathermap.org/img/w/${weatherIcon}.png" alt="Weather icon">
                    `;

                    map = new mapboxgl.Map({
                        container: 'map',
                        style: 'mapbox://styles/mapbox/satellite-streets-v12',
                        center: [lon, lat],
                        zoom: 10
                    });
                    
                    weatherInfo.innerHTML = weatherHTML;
                })
                .catch((error) => {
                    weatherInfo.innerHTML = `<p>Error: ${error.message}</p>`;
                });
        }, error => {

            weatherInfo.innerHTML = '<p>Error getting location.</p>';
        });
    } else {
        weatherInfo.innerHTML = '<p>Geolocation is not supported by your browser.</p>';
    }
});
