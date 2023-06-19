let slideIndex = 0;

showSlide();

var timer = setInterval(showSlide, 2000);

let slideContainer = document.getElementById('slideshow-container');
let slideControl = document.getElementById('slide-control');

slideContainer.onmouseover = function () {
	clearInterval(timer);
}

slideControl.onmouseover = function () {
	clearInterval(timer);
}

slideContainer.onmouseleave = function () {
	// timer = setInterval(showSlide, 2000);
}

slideControl.onmouseleave = function () {
	// timer = setInterval(showSlide, 2000);
}

function showSlide() {
	let i;
	let slides = document.getElementsByClassName('slide-item');
	let dots = document.getElementsByClassName('dot');
	for (const element of slides) {
		element.style.display = 'none';
	}
	for (const element of dots) {
		element.className = element.className.replace(" active", "");
	}
	slideIndex++;
	if (slideIndex > slides.length) slideIndex = 1;
	slides[slideIndex - 1].style.display = "block";
	dots[slideIndex - 1].className += " active";
}

function chooseSlide(n) {
	slideIndex = n;
	showSlide();
	clearInterval(timer);
}

// function showMenu() {
// 	var topNav = document.getElementById('topnav');
// 	if (topNav.className === "navbar") {
// 		topNav.className += " show";
// 	} else {
// 		topNav.className = "navbar";
// 	}
// }