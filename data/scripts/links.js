const baseURL = "https://brunobzki.github.io/wdd230/";
const linksURL = "https://brunobzki.github.io/wdd230/data/links.json";
const cards = document.querySelector('#cards');

async function getLinks() {
  try {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data.lessons); // Cambiado de data.weeks a data.lessons
  } catch (error) {
    console.error('Error fetching links data:', error);
  }
}

function displayLinks(lessons) { // Cambiado de displayLinks(lesson) a displayLinks(lessons)
  const lessonsList = document.createElement('ul');

  lessons.forEach((lesson, index) => {
    const lessonItem = document.createElement('li');
    const lessonTitle = document.createElement('h4');
    const lessonLinks = document.createElement('ul');

    lessonTitle.textContent = `Lesson ${lesson.lesson} Links:`;

    lesson.links.forEach((link, linkIndex) => {
      const linkItem = document.createElement('li');
      const linkElement = document.createElement('a');
      linkElement.href = link.url; // No es necesario agregar baseURL aquí
      linkElement.textContent = `${linkIndex + 1}. ${link.title}`;

      linkItem.appendChild(linkElement);
      lessonLinks.appendChild(linkItem);
    });

    lessonItem.appendChild(lessonTitle);
    lessonItem.appendChild(lessonLinks);
    lessonsList.appendChild(lessonItem);
  });

  cards.appendChild(lessonsList);
}

getLinks();