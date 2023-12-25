const usernameField = document.getElementById("email");
const errorMessage = document.getElementById("error-message");

usernameField.addEventListener("input", validateEmail);
usernameField.addEventListener("blur", validateEmail);


const passwordField = document.getElementById("password");
const passwordErrorMessage = document.getElementById("password-error-message");

passwordField.addEventListener("input", validatePassword);
passwordField.addEventListener("blur", validatePassword);


function validateEmail() {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isValid = emailRegex.test(usernameField.value);

  if (!isValid) {
    errorMessage.textContent = "Please enter a valid email address.";
  } else {
    errorMessage.textContent = "";
  }
}


function validatePassword() {
  const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d@]*$/;
  const isValid = passwordRegex.test(passwordField.value);

  if (!isValid) {
    passwordErrorMessage.textContent = "Password must contain at least one uppercase letter, one number, and only the @ special character.";
  } else {
    passwordErrorMessage.textContent = "";
  }
}

const foram = document.querySelector("form");


foram.addEventListener('submit',(e)=>{
    e.preventDefault();
    
    let userEnteredPassword = passwordField.value;
    let originalPassword = "SmartServTest@123";

    if(userEnteredPassword==originalPassword){
        location.href="./dashboard.html";
    }else{
        alert("Password is wrong ...")
    }

});
