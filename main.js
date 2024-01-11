window.addEventListener('scroll', function () {
    let navbar = document.querySelector('.nav-bar-custom-color');
    let scrollThreshold = 10;

    if (window.scrollY > scrollThreshold) {
        navbar.style.opacity = '0.75';
    } else {
        navbar.style.opacity = '1';
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.querySelector('nav button');
    const navContainer = document.querySelector('.nav-container');

    menuButton.addEventListener('click', () => {
        navContainer.classList.toggle('mobile-visible');
    });
});
