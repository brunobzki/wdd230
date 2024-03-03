document.addEventListener("DOMContentLoaded", function () {
  let currentYear = new Date().getFullYear();
  let firstParagraph = document.getElementById("footerFirstParagraph");
  let decoratedName = "Bruno Panzacchi";
  let uruguayFlagImage = `<img src="images/Flag.png" alt="Flag of Uruguay" width="95" height="75"style="vertical-align: middle;">`;
  var timestampField = document.getElementById('timestamp');
  firstParagraph.innerHTML = `&copy; ${currentYear} ${decoratedName}`;

  let lastModifiedParagraph = document.getElementById("lastModified");
  lastModifiedParagraph.innerHTML = "Last modification: " + document.lastModified;
  timestampField.value = Date.now();
});
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
  navigation.classList.toggle('open');
  hamButton.classList.toggle('open');
});

const modeButton = document.querySelector("#mode");
const main = document.querySelector("#content");
const menuButton = document.querySelector("#menu");
const infobackground = document.querySelector(".data")
const joinbackground = document.querySelector("fieldset")

modeButton.addEventListener("click", () => {
  if (modeButton.textContent.includes("🕶️")) {
    main.style.background = "#000";
    main.style.color = "#fff";
    menuButton.style.color = "#fff";
    modeButton.textContent = "🔆";
    infobackground.style.background = "#000";
    joinbackground.style.background = "#000";
    joinbackground.style.color = "#fff";
  } else {
    main.style.background = "#eee";
    main.style.color = "#000";
    menuButton.style.color = "#000";
    modeButton.textContent = "🕶️";
    infobackground.style.background = "#fff"
    joinbackground.style.background = "#fff";
    joinbackground.style.color = "#000"

  }
});
