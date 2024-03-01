const kp1 = document.querySelector("#password");
const kp2 = document.querySelector("#confirmpassword");
const message = document.querySelector("#formmessage");

kp2.addEventListener("focusout", checkSame);


function checkSame() {
	if (kp1.value !== kp2.value) {
		message.textContent = "❗Key Phrases DO NOT MATCH!";
		message.style.visibility = "show";
		kp2.style.backgroundColor = "#fff0f3";
		kp2.value = "";
		kp2.focus();
	} else {
		message.style.display = "none";
		kp2.style.backgroundColor = "#fff";
		kp2.style.color = "#000";
	}
}
document.addEventListener("DOMContentLoaded", function () {
	
	function handleSubmit(event) {
		
		event.preventDefault();

	
		let formt = event.target;
		let formData = new FormData(formt);

		
		for (let pair of formData.entries()) {
			console.log(pair[0] + ": " + pair[1]);
		}
	}

	const form = document.querySelector("#email");
	form.addEventListener("submit", handleSubmit);
});
const rangevalue = document.getElementById("rangevalue");
const range = document.getElementById("r");

// RANGE event listener
range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    rangevalue.innerHTML = range.value;
}