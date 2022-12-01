/*Activate menu slideout by adding class*/
function showSideMenu() {
    document.querySelector('.sideNav').classList.toggle('active')
}

/*Mobile navigation hamburger*/
function hamburger() {
    const menu_btn = document.querySelector('.hamburger');

    menu_btn.addEventListener('click', function () {
        menu_btn.classList.toggle('is-active');
        showSideMenu();
    });
}

/*Loads all the javascript on window load*/
window.onload = () => {
    hamburger();
};