var slideIndex = 0;

showSlide();

var timer = setInterval(showSlide, 2000);

var slideContainer = document.getElementById('slideshow-container');
var slideControl = document.getElementById('slide-control');

slideContainer.onmouseover = function () {
	clearInterval(timer);
}

slideControl.onmouseover = function () {
	clearInterval(timer);
}

slideContainer.onmouseleave = function () {
	timer = setInterval(showSlide, 2000);
}

slideControl.onmouseleave = function () {
	timer = setInterval(showSlide, 2000);
}

function showSlide() {
	var i;
	var slides = document.getElementsByClassName('slide-item');
	var dots = document.getElementsByClassName('dot');
	for (var i = 0; i < slides.length; i++) {
		slides[i].style.display = 'none';
	}
	for (var i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
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

const formOpenBtn = document.querySelector("#form-open"),
  home = document.querySelector(".home"),
  formContainer = document.querySelector(".form_container"),
  formCloseBtn = document.querySelector(".form_close"),
  signupBtn = document.querySelector("#signup"),
  loginBtn = document.querySelector("#login"),
  pwShowHide = document.querySelectorAll(".pw_hide");

formOpenBtn.addEventListener("click", () => home.classList.add("show"));
formCloseBtn.addEventListener("click", () => home.classList.remove("show"));

pwShowHide.forEach((icon) => {
  icon.addEventListener("click", () => {
    let getPwInput = icon.parentElement.querySelector("input");
    if (getPwInput.type === "password") {
      getPwInput.type = "text";
      icon.classList.replace("uil-eye-slash", "uil-eye");
    } else {
      getPwInput.type = "password";
      icon.classList.replace("uil-eye", "uil-eye-slash");
    }
  });
});

signupBtn.addEventListener("click", (e) => {
  e.preventDefault();
  formContainer.classList.add("active");
});
loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  formContainer.classList.remove("active");
});