let form = document.forms["login-form"];
let email = document.forms["login-form"]["email"];
let password = document.forms["login-form"]["password"];


let errorMessage = document.createElement("p");
errorMessage.style.color = "red";
errorMessage.style.textAlign = "center";

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let user = localStorage.getItem(email.value);

    if (user == null) {
        errorMessage.textContent = "Email does not exists";
        email.insertAdjacentElement("afterend", errorMessage);
    } else {
        let userJson = JSON.parse(user);

        if (password.value !== userJson.password) {
            errorMessage.textContent = "Wrong Password";
            password.insertAdjacentElement("afterend", errorMessage);
        } else {
            form.submit();
        }
    }

});
