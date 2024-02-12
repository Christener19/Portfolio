function goBack() {
    window.history.back();
}

function toggleTheme() {

    let bodyElement = document.body;

    if (bodyElement.classList.contains('homepage-custom-color')) {
        // If homepage has custom color, switch to light theme
        bodyElement.classList.remove('homepage-custom-color');
        bodyElement.classList.add('light-theme');

        localStorage.setItem('theme', 'light');
    } else {
        bodyElement.classList.add('homepage-custom-color');
        bodyElement.classList.remove('light-theme');

        localStorage.setItem('theme', 'dark');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    let bodyElement = document.body;
    if (localStorage.getItem('theme') === 'light') {
        bodyElement.classList.remove('homepage-custom-color');
        bodyElement.classList.add('light-theme');
    } else {
        bodyElement.classList.add('homepage-custom-color');
        bodyElement.classList.remove('light-theme');
    }
});