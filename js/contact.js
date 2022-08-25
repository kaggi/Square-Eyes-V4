let contactLink = document.querySelector("#contact_link");
contactLink.classList.add("current_page");


const form = document.querySelector(".contactForm");

const email = document.querySelector("#email");
const message = document.querySelector("#message");

const emailError = document.querySelector("#emailError");
const messageError = document.querySelector("#messageError");

const successMessage = document.querySelector("#successSubmittingForm");

const emailTest = /\S+@\S+\.\S+/;

let emailOK = false;
let messageOK = false;

function checkForm(event) {
  event.preventDefault();

  if (emailTest.test(email.value)) {
    emailOK = true;
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }

  if (testLength(message.value, 0)) {
    messageOK = true;
    messageError.style.display = "none";
  } else {
    messageError.style.display = "block";
  }

  if (emailOK && messageOK) {
    successMessage.style.display = "block";
    form.reset();
    emailOK = false;
    messageOK = false;
  } else {
    successMessage.style.display = "none";
  }
}

function testLength(value, testValue) {
  if (value.trim().length > testValue) {
    return true;
  } else {
    return false;
  }
}

form.addEventListener("submit", checkForm);
