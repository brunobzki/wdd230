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
            const temperatureFahrenheit = (temperatureKelvin - 273.15) * 9 / 5 + 32;
  
            const weatherHTML = `
                <h3>Weather in ${location}:</h3>
                <p>Temperature: ${temperatureFahrenheit.toFixed(2)}°F</p>
                <p>Wind Speed: ${windSpeed} m/s</p>
                <p>Description: ${description} </p>
              `;
  
            map = new mapboxgl.Map({
              container: 'map',
              style: 'mapbox://styles/mapbox/satellite-streets-v12',
              center: [lon, lat],
              zoom: 10
            });
  
            const mapContainer = map.getContainer();
            const copyrightLinks = mapContainer.querySelectorAll('.mapboxgl-ctrl-attrib a');
            copyrightLinks.forEach(link => {
              console.log(link.href);
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
  
  
  
  document.addEventListener("DOMContentLoaded", () => {
    const apiKey = '3a37a3284cd6ada8f22e44e46aeb2fdc';
    const weatherInfo = document.getElementById('weatherInfo');
  
    mapboxgl.accessToken = 'pk.eyJ1IjoiYnJ1bm9wYW56YWNjaGkiLCJhIjoiY2xvM2oyZG9mMGZoYjJ3dGR1eXNkZGQzdyJ9.MaO03BaJJRwPI6VT5x-hBw';
  
   
    async function fetchWeatherForecast(latitude, longitude) {
      const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;
      try {
        const response = await fetch(url);
        if (response.ok) {
          const data = await response.json();
          console.log(data);
          displayForecast(data);
        } else {
          throw Error(await response.text());
        }
      } catch (error) {
        console.log(error);
      }
    }
  
  
    function displayForecast(data) {
      const forecastContainer = document.getElementById('forecast-container');
      forecastContainer.innerHTML = '';
  
      const today = new Date();
      const currentDayIndex = today.getDay(); 
      const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  
      
      for (let i = 0; i < 3; i++) {
        const nextDayIndex = (currentDayIndex + i) % 7; 
        const nextDay = daysOfWeek[nextDayIndex];
        const temperatureFahrenheit = ((data.list[i].main.temp - 273.15) * 9 / 5) + 32;
  
        const forecastElement = document.createElement('div');
        forecastElement.innerHTML = `${nextDay}: ${temperatureFahrenheit.toFixed(2)}°F`;
  
        forecastContainer.appendChild(forecastElement);
      }
    }
  
  
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
  
        fetchWeatherForecast(lat, lon);
      }, error => {
        weatherInfo.innerHTML = '<p>Sorry the location could not be obtained.</p>';
      });
    } else {
      weatherInfo.innerHTML = '<p>Geolocation is not supported by your browser.</p>';
    }
  });





