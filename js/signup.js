let form = document.forms["signup-form"];
let username = document.forms["signup-form"]["name"];
let email = document.forms["signup-form"]["email"];
let password = document.forms["signup-form"]["password"];
let confirmPassword = document.forms["signup-form"]["confirm-password"];

let errorMessage = document.createElement("p");
errorMessage.style.color = "red";
errorMessage.style.textAlign = "center";

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let user = localStorage.getItem(email.value);
    
    if (user == null) {
        if (password.value !== confirmPassword.value && password.value.length <= 8) {        
            errorMessage.textContent = "password should be equal <br> password should be greater than 8 characters";
            confirmPassword.insertAdjacentElement("afterend", errorMessage);
        } else if (password.value !== confirmPassword.value) {
            errorMessage.textContent = "password should be equal";
            confirmPassword.insertAdjacentElement("afterend", errorMessage);
        } else if (password.value.length <= 8) {
            errorMessage.textContent = "password should be greater than 8 characters";
            confirmPassword.insertAdjacentElement("afterend", errorMessage);
        } else {
            let user = {
                "name": username.value,
                "email": email.value,
                "password": password.value
            }
            
            localStorage.setItem(email.value, JSON.stringify(user));
            form.submit();
        }
    } else {
        errorMessage.textContent = "Email already exists";
        email.insertAdjacentElement("afterend", errorMessage);
    }
});
