//--------------- NAVBAR OPACITY FOR LARGE SCREENS
window.addEventListener('scroll', function () {
    let navbar = document.querySelector('.nav-bar-custom-color');
    let scrollThreshold = 10;
    let windowWidth = window.innerWidth;

    if (windowWidth >= 1023) {
        if (window.scrollY > scrollThreshold) {
            navbar.style.opacity = '0.75';
        } else {
            navbar.style.opacity = '1';
        }
    } else {
        navbar.style.opacity = '1';
    }
});

// ----------------LIGHT AND DARK THEME
function toggleTheme() {

    let bodyElement = document.body;
    let imageElement = document.querySelector('.images');

    if (bodyElement.classList.contains('homepage-custom-color')) {
        // If homepage has custom color, switch to light theme
        bodyElement.classList.remove('homepage-custom-color');
        bodyElement.classList.add('light-theme');
        imageElement.src = "./Images/portfolio/dark-mode.png";
        localStorage.setItem('theme', 'light');
    } else {
        bodyElement.classList.add('homepage-custom-color');
        bodyElement.classList.remove('light-theme');
        imageElement.src = "./Images/portfolio/light-mode.png"
        localStorage.setItem('theme', 'dark');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    let bodyElement = document.body;
    let imageElement = document.querySelector('.images');
    if (localStorage.getItem('theme') === 'light') {
        bodyElement.classList.remove('homepage-custom-color');
        bodyElement.classList.add('light-theme');
        imageElement.src = "./Images/portfolio/dark-mode.png";
    } else {
        bodyElement.classList.add('homepage-custom-color');
        bodyElement.classList.remove('light-theme');
        imageElement.src = "./Images/portfolio/light-mode.png";
    }
});


// ----------------MOBILE NAVBAR
document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.querySelector('nav button[type="button"]');
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
    document.addEventListener('click', (event) => {
        const isMenuButtonClicked = menuButton.contains(event.target);
        const isDropdownLinkClicked = Array.from(dropdownLinks).some(link => link.contains(event.target));

        if (!isMenuButtonClicked && !isDropdownLinkClicked && navContainer.classList.contains('mobile-visible')) {
            navContainer.classList.remove('mobile-visible');
        }
    });
    window.addEventListener('scroll', () => {
        if (navContainer.classList.contains('mobile-visible')) {
            navContainer.classList.remove('mobile-visible');
        }
    }, { passive: true });
});

// -----------------MORE INFORMATION BUTTONS
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