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
    const dropdownLinks = document.querySelectorAll('.nav-container a');

    menuButton.addEventListener('click', () => {
        navContainer.classList.toggle('mobile-visible');
    });
    dropdownLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navContainer.classList.contains('mobile-visible')) {
                navContainer.classList.remove('mobile-visible');
            }
        });
    });
    window.addEventListener('scroll', () => {
        if (navContainer.classList.contains('mobile-visible')) {
            navContainer.classList.remove('mobile-visible');
        }
    }, { passive: true });
});


let moreInfoBtn = document.getElementById('moreInfoBtn');
moreInfoBtn.addEventListener('click', function() {
window.location.href = '../MoreInformation/Bootcamp kitchen/bootcampInfo.html';
});

let moreInfoBtnIntern = document.getElementById('moreInfoBtnIntern');
moreInfoBtnIntern.addEventListener('click', function() {
window.location.href = '../MoreInformation/Intern/Intern.html';
});
let moreInfoBtnPortfolio = document.getElementById('moreInfoBtnPortfolio');
moreInfoBtnPortfolio.addEventListener('click', function() {
window.location.href = '../MoreInformation/Portfolio/Portfolio.html';
});