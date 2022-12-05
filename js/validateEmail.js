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

/*Loads all the javascript on window load*/
window.onload = () => {
    validateEmail();
};