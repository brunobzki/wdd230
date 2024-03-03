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