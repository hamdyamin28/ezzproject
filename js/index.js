//start header section//
const heroText = document.querySelector('.hero-text');
const heroImage = document.querySelector('.hero img');

setTimeout(() => {
  heroText.classList.add('visible');
}, 500); // 1500 milliseconds = 1.5 seconds
//end header section//
//nav bar //
document.addEventListener("DOMContentLoaded", function() {
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) { // عند التمرير لأسفل لأكثر من 50 بكسل
      document.querySelector('.navbar').classList.add('navbar-scrolled');
    } else {
      document.querySelector('.navbar').classList.remove('navbar-scrolled');
    }
  });
});


