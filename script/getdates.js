document.addEventListener("DOMContentLoaded", function () {
    let currentYear = new Date().getFullYear();
    let firstParagraph = document.getElementById("footerFirstParagraph");

    let decoratedName = "🔘 Bruno Panzacchi";
    let uruguayFlag = "Uruguay";
    let uruguayFlagImage = `<img src="images/Flag.png" alt="Flag of Uruguay" width="95" height="75"style="vertical-align: middle;">`;

    firstParagraph.innerHTML = `&copy; ${currentYear} ${decoratedName} -  ${uruguayFlag} ${uruguayFlagImage}`;

    let lastModifiedParagraph = document.getElementById("lastModified");
    lastModifiedParagraph.innerHTML = "Última modificación: " + document.lastModified;
});