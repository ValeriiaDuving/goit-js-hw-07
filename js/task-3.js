const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

function inputChange (event) {
    const userInput = event.target.value.trim();
    output.textContent = userInput.length > 0 ? userInput : "Anonymous";
}

input.addEventListener("input", inputChange);
