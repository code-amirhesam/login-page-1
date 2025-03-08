// Define variables:
const inputEmail = document.getElementById("form-email");
const inputPassword = document.getElementById("form-password");
const inputAccept = document.getElementById("form-accept");
const inputLabel1 = document.getElementById("label1");
const inputLabel2 = document.getElementById("label2");


// Option to fix bugs with Autofill
window.onload = function() {
    // Check if the input fields have values
    if (inputEmail.value.length > 0) {
        inputLabel1.style.cssText = ("transform: translate(-8px); transition: all 250ms;");
    } else {
        inputLabel1.style.cssText = ("transform: translateY(36px); transition: all 250ms; color: black;");
    }
    if (inputPassword.value.length > 0) {
        inputLabel2.style.cssText = ("transform: translate(-8px); transition: all 250ms;");
    } else {
        inputLabel2.style.cssText = ("transform: translateY(36px); transition: all 250ms; color: black;");
    }
}


// Custom on Focus, Blur options [For input Email]:
inputEmail.addEventListener('focus', labelMoverEmail);
inputEmail.addEventListener('blur', labelMoverReverseEmail);


// Custom on Focus, Blur options [For input Password]:
inputPassword.addEventListener('focus', labelMoverPassword);
inputPassword.addEventListener('blur', labelMoverReversePassword);


// Change color of Labels:
inputLabel1.style.cssText = ("color: black;");
inputLabel2.style.cssText = ("color: black;");


// Move Email's Label:
function labelMoverEmail() {
    inputLabel1.style.cssText = ("transform: translate(-8px); transition: all 250ms; text-shadow: 1px 1px 6px black;");
}


// Move Password's Label:
function labelMoverPassword() {
    inputLabel2.style.cssText = ("transform: translate(-8px); transition: all 250ms; text-shadow: 1px 1px 6px black;");
}


// Re-move Email's Label:
function labelMoverReverseEmail() {
    if (inputEmail.value.length > 0) {
        inputLabel1.style.cssText = ("transform: translate(-8px); transition: all 250ms;");
    } else {
        inputLabel1.style.cssText = ("transform: translateY(36px); transition: all 250ms; color: black;");
    }
}


// Re-move Password's Label:
function labelMoverReversePassword() {
    if (inputPassword.value.length > 0) {
        inputLabel2.style.cssText = ("transform: translate(-8px); transition: all 250ms;");
    } else {
        inputLabel2.style.cssText = ("transform: translateY(36px); transition: all 250ms; color: black;");
    }
}
