document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.getElementById('toggle-button');
    const navLeft = document.getElementById('nav-left');
    const navRight = document.getElementById('nav-right');

    toggleButton.addEventListener('click', function() {
        navLeft.classList.toggle('active');
        navRight.classList.toggle('active');
    });
});
