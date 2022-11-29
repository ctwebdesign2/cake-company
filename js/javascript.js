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

/*More information popup*/
function togglePopup(idname) {
    document.getElementById(idname).classList.toggle("active");
}

/*Checks wheter or not the two emails entered are the same*/
function validateEmail() {
    var email = document.getElementById("email");
    var confirmEmail = document.getElementById("confirmEmail");

    if (email.value != confirmEmail.value) {
        confirmEmail.setCustomValidity("Emails Don't Match");
    } else {
        confirmEmail.setCustomValidity('');
    }

    email.onchange = validateEmail;
    confirmEmail.onkeyup = validateEmail;
}

/*Creates google map*/
function initMap() {
    var location = {
        lat: 53.050440,
        lng: -7.426794
    };
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 13,
        center: location
    });
    var marker = new google.maps.Marker({
        position: location,
        map: map
    });
}

/*Loads all the javascript on window load*/
window.onload = () => {
    hamburger();
    validateEmail();
};
