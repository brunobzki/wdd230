document.addEventListener("DOMContentLoaded", function () {
  let currentYear = new Date().getFullYear();
  let firstParagraph = document.getElementById("footerFirstParagraph");

  let decoratedName = "Bruno Panzacchi";

  let uruguayFlagImage = `<img src="images/Flag.png" alt="Flag of Uruguay" width="95" height="75"style="vertical-align: middle;">`;

  firstParagraph.innerHTML = `&copy; ${currentYear} ${decoratedName}`;

  let lastModifiedParagraph = document.getElementById("lastModified");
  lastModifiedParagraph.innerHTML = "Última modificación: " + document.lastModified;
});
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
  navigation.classList.toggle('open');
  hamButton.classList.toggle('open');
});
document.addEventListener("DOMContentLoaded", () => {
  const apiKey = '3a37a3284cd6ada8f22e44e46aeb2fdc';
  const submitButton = document.getElementById('submitBtn');
  const locationInput = document.getElementById('locationInput');
  const weatherInfo = document.getElementById('weatherInfo');

  mapboxgl.accessToken = 'pk.eyJ1IjoiYnJ1bm9wYW56YWNjaGkiLCJhIjoiY2xvM2oyZG9mMGZoYjJ3dGR1eXNkZGQzdyJ9.MaO03BaJJRwPI6VT5x-hBw';

  submitButton.addEventListener('click', () => {
    const location = locationInput.value;

    if (location) {

      document.getElementById('map').innerHTML = '';

      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`)
        .then((response) => response.json())
        .then((data) => {
          const temperature = data.main.temp;
          const description = data.weather[0].description;
          const feeltemp = data.main.feels_like;
          const wind_speed = data.wind.speed;
          const lat = data.coord.lat;
          const lon = data.coord.lon;

          const weatherHTML = `
              <h3>Weather in ${location}:</h3>
              <p>Temperature: ${temperature}°F</p>
              <p>Description: ${description}</p>
              <p>Feels like: ${feeltemp}°F</p>
              <p>Wind speed: ${wind_speed} N</p>
            `;

          map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/satellite-streets-v12',
            center: [lon, lat],
            zoom: 10

          });
          // Obtener enlaces de copyright del mapa
          const mapContainer = map.getContainer();
          const copyrightLinks = mapContainer.querySelectorAll('.mapboxgl-ctrl-attrib a');

          // Hacer algo con los enlaces de copyright (por ejemplo, imprimirlos en la consola)
          copyrightLinks.forEach(link => {
            console.log(link.href);
          });

          weatherInfo.innerHTML = weatherHTML;
        })

        .catch((error) => {
          weatherInfo.innerHTML = `<p>Error: ${error.message}</p>`;
        });
    } else {
      weatherInfo.innerHTML = '<p>Please enter a location.</p>';
    }
  });
});
const modeButton = document.querySelector("#mode");
const main = document.querySelector("#content");
const menuButton = document.querySelector("#menu");

modeButton.addEventListener("click", () => {
  if (modeButton.textContent.includes("🕶️")) {
    main.style.background = "#000";
    main.style.color = "#fff";
    menuButton.style.color = "#fff";
    modeButton.textContent = "🔆";
  } else {
    main.style.background = "#eee";
    main.style.color = "#000";
    menuButton.style.color = "#000";
    modeButton.textContent = "🕶️";
  }
});