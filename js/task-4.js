const form = document.querySelector(".login-form");

form.addEventListener("submit", sendForm);

function sendForm(event) {
    event.preventDefault();
    const elements = event.target.elements;

    if (elements.email.value.trim() === "" || elements.password.value.trim() === "") {
        alert("All form fields must be filled in");
        return
    }

    const userInfo = {
        email: elements.email.value.trim(),
        password: elements.password.value.trim()
    }

    console.log(userInfo)

    event.target.reset();
}

