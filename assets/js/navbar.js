window.onscroll = function() {scrollFunction()};

var navbar = document.getElementById("navbar");

var mainbanner = document.getElementById("bannermain");

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    navbar.classList.add("blurnav")
  } else {
    navbar.classList.remove("blurnav")
  }
}