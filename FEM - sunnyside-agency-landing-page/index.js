const menuIcon = document.getElementById('menu-icon');
const navBar = document.getElementById('nav-bar');
menuIcon.addEventListener('click', toggleMenu);

function toggleMenu() {
    if (navBar.style.display !== 'block') {
        navBar.style.display = 'block';
    } else {
        navBar.style.display = 'none';
    }
}

function resizeListener() {
    const width = window.innerWidth;
    navBar.style.display = (width > 580) ? 'block' : 'none';
    return width;
}

window.addEventListener('resize', resizeListener);
