var images = document.getElementsByClassName("image");
var dots = document.getElementsByClassName("dot");

dots[0].addEventListener("click", function () {
  images[0].children[0].style.visibility = "visible";
  images[0].children[1].style.visibility = "hidden";
  images[0].children[2].style.visibility = "hidden";
});

dots[1].addEventListener("click", function () {
  images[0].children[0].style.visibility = "hidden";
  images[0].children[1].style.visibility = "visible";
  images[0].children[2].style.visibility = "hidden";
});

dots[2].addEventListener("click", function () {
  images[0].children[0].style.visibility = "hidden";
  images[0].children[1].style.visibility = "hidden";
  images[0].children[2].style.visibility = "visible";
});

function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

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
