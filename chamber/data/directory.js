const baseURL = "https://brunobzki.github.io/wdd230";
const linksURL = "https://brunobzki.github.io/wdd230/chamber/data/members.json";
const cards = document.querySelector('#cards');
const display = document.querySelector("article");
const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");

async function getMembers() {
  try {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayMembers(data.members); 
  } catch (error) {
    console.error('Error fetching members data:', error);
  }
}

function displayMembers(members) { 
  const membersList = document.createElement('ul');

  members.forEach((member, index) => {
    const memberItem = document.createElement('li');
    const memberTitle = document.createElement('h4');
    const memberInfo = document.createElement('ul');
    const memberImage = document.createElement('img');

    memberTitle.textContent = `${member.name} - Membership Level ${member["membership level"]}`;

    memberImage.src = `${member.image}`;
    memberImage.alt = `${member.name} Image`;
    memberImage.classList.add('member-image');

    const memberDetails = [
      `Address: ${member.address}`,
      `Phone Number: ${member["phone number"]}`,
      `Website: ${member.url}`

    ];

    memberDetails.forEach((detail) => {
      const detailItem = document.createElement('li');
      detailItem.textContent = detail;
      memberInfo.appendChild(detailItem);
    });

    memberItem.appendChild(memberImage);
    memberItem.appendChild(memberTitle);
    memberItem.appendChild(memberInfo);
    membersList.appendChild(memberItem);
  });

  cards.innerHTML = ''; 
  cards.appendChild(membersList);
}

gridbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList); 

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}


getMembers();