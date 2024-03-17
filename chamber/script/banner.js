document.addEventListener("DOMContentLoaded", function() {
    var banner = document.getElementById("banner");
    var closeBannerBtn = document.getElementById("closeBanner");
  
    var today = new Date();
    var dayOfWeek = today.getDay();
  
    if (dayOfWeek >= 1 && dayOfWeek <= 3) {
      banner.style.display = "block";
    }
  
    closeBannerBtn.addEventListener("click", function() {
      banner.style.display = "none";
    });
  });