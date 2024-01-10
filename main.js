window.addEventListener('scroll', function () {
    let navbar = document.querySelector('.nav-bar-custom-color');
    let scrollThreshold = 10;

    if (window.scrollY > scrollThreshold) {
        navbar.style.opacity = '0.75';
    } else {
        navbar.style.opacity = '1';
    }
});

