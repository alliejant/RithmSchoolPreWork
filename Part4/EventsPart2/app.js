document.addEventListener("DOMContentLoaded", function(){
	let btn = document.querySelector("button");
	let red = document.querySelector("#red");
	let marginRed = 0;
	let green = document.querySelector("#green");
	let marginGreen = 0;

	btn.addEventListener("click", function(){
		let redSpeed = Math.random() * 100;
		let greenSpeed = Math.random() * 100;
		let totalTime = redSpeed < greenSpeed ? redSpeed * 80 : greenSpeed * 80;
		let redTimer = setInterval(function(){
			marginRed++;
			red.style.marginLeft = "" + marginRed + "vw";
		}, redSpeed);
		let greenTimer = setInterval(function(){
			marginGreen++;
			green.style.marginLeft = "" + marginGreen + "vw";
		}, greenSpeed);

		setTimeout(function(){
			alert("Winner!");
			clearTimeout(redTimer);
			clearTimeout(greenTimer);
			marginRed = 0;
			red.style.marginLeft = "" + marginRed + "vw";
			marginGreen = 0;
			green.style.marginLeft = "" + marginGreen + "vw";
		}, totalTime)
	})
})