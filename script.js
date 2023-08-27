// console.log("Hellooooo")

// // /* ===========ScrollToTop=========== */

//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//gsap
var tl = gsap.timeline();

tl.from(".navbar-brand",{
  y:-40,
  delay:0.3,
  stagger: 0.5,
  opacity: 0,
})
tl.from(".nav-item a",{
  y:-40,
  opacity: 0,
  stagger: 0.5,
})
tl.from(".home-right img, .about-left img",{
  opacity: 0,
  scale:0,
  stagger: 0.5,
})
