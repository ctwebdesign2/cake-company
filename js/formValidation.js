/*Checks whether or not the two emails entered are the same*/
function confirmEmail() {
    var email = document.getElementById("email");
    var confirmEmail = document.getElementById("confirmEmail");

    if (email.value != confirmEmail.value) {
        confirmEmail.setCustomValidity("Emails Don't Match");
    } else {
        confirmEmail.setCustomValidity('');
    }

    email.addEventListener('change', confirmEmail);
    confirmEmail.addEventListener('keyup', confirmEmail);
}

// Validates that the input in the "email" field matches a valid email format
function validateEmail() {
    var email = document.getElementById('email');
    var emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    // Check if the email input is empty
    if (email.value === "") {
        email.setCustomValidity("Please enter an email address.");
        return false;
    }
    // Check if the email address is valid
    if (!emailFormat.test(email.value)) {
        email.setCustomValidity("Please enter a valid email address.");
        return false;
    }
    // Clear the custom validity if the email address is valid
    email.setCustomValidity('');
    // Return true if the email address is valid
    return true;
}

// Validates that the input in the "mobileNumber" field matches a valid phone number format
function validateMobileNumber() {
    var mobileNumber = document.getElementById('mobileNumber');
    var phoneFormat = /^\(?\+?([0-9]{1,3})?[-.\s]?([0-9]{3})[-.\s]?([0-9]{3})[-.\s]?([0-9]{4})$/;
    // Check if the email input is empty
    if (mobileNumber.value === "") {
        mobileNumber.setCustomValidity("Please enter a mobile number.");
        return false;
    }
    // Check if the mobile number is valid
    if (!phoneFormat.test(mobileNumber.value)) {
        mobileNumber.setCustomValidity("Please enter a valid mobile number.");
        return false;
    }
    // Clear the custom validity if the mobile number is valid
    mobileNumber.setCustomValidity('');
    return true;
}

// Validates that the input in the "landlineNumber" field matches a valid Irish landline number format
function validateLandlineNumber() {
    var landlineNumber = document.getElementById("landlineNumber");
    // Check if the landline number input is empty
    if (landlineNumber.value === "") {
        // Clear the custom validity if the landline number is empty
        landlineNumber.setCustomValidity('');
        return true;
    }
    // Check if the landline number is valid
    var phoneFormat = /^\(?0?\d{2}[\s.-]?\d{3}[\s.-]?\d{4}$/;
    if (!phoneFormat.test(landlineNumber.value)) {
        landlineNumber.setCustomValidity("Please enter a valid Irish landline number.");
        return false;
    }
    // Clear the custom validity if the landline number is valid
    landlineNumber.setCustomValidity('');
    return true;
}

function formValidation() {
    confirmEmail();
    validateEmail();
    validateMobileNumber();
    validateLandlineNumber();
}

/*Loads all the javascript on window load*/
window.onload = () => {
    formValidation();
};