document.addEventListener("DOMContentLoaded", function () {
    let currentYear = new Date().getFullYear();
    let firstParagraph = document.getElementById("footerFirstParagraph");

    let decoratedName = "Bruno Panzacchi";
    let uruguayFlag = "Uruguay";

    firstParagraph.innerHTML = `&copy; ${currentYear} ${decoratedName} `;

    let lastModifiedParagraph = document.getElementById("lastModified");
    lastModifiedParagraph.innerHTML = "Última modificación: " + document.lastModified;
});
