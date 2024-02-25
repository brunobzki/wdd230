document.addEventListener("DOMContentLoaded", function () {
    var currentDate = new Date();
    var lastVisitDate = localStorage.getItem("lastVisitDate") || null;
    var visitCount = localStorage.getItem("visitCount") || 0;

    if (lastVisitDate === null || lastVisitDate === undefined) {
        displayWelcomeMessage();
    } else {
        currentDate = new Date();
        lastVisitDate = new Date(lastVisitDate);

        var timeDiff = currentDate.getTime() - lastVisitDate.getTime();
        var daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

        if (daysDiff < 1) {
            displaySoonMessage();
        } else {
            displayLastVisitMessage(daysDiff);
        }
    }

    updateVisitCount();
    displayVisitorInfo();

    localStorage.setItem("lastVisitDate", currentDate);
});

function displayWelcomeMessage() {
    updateVisitorInfo("Welcome! Let us know if you have any questions.");
}

function displaySoonMessage() {
    updateVisitorInfo("Back so soon! Awesome!");
}

function displayLastVisitMessage(daysDiff) {
    var message = "You last visited " + daysDiff + " day" + (daysDiff !== 1 ? "s" : "") + " ago";


    var visitMessageElement = document.getElementById("visitMessage");


    visitMessageElement.textContent = message;
}


var daysDifference = 3;
displayLastVisitMessage(daysDifference);

function updateVisitCount() {
    var visitCount = localStorage.getItem("visitCount") || 0;
    visitCount++;
    localStorage.setItem("visitCount", visitCount);
}

function updateVisitorInfo(message) {
    var visitCount = localStorage.getItem("visitCount") || 0;
    var todayElement = document.getElementById("today");
    var visitsElement = document.querySelector(".visits");
    var currentDate = new Date().toLocaleDateString();

    todayElement.textContent = currentDate;
    visitsElement.textContent = visitCount;


    var messageElement = document.createElement("p");
    messageElement.textContent = message;
    document.getElementById("visitor").appendChild(messageElement);
}