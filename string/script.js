const input = document.getElementById("inputText");
const result = document.getElementById("result");

// REVERSE
function reverseText(){
    const text = input.value;
    const reversed = text.split("").reverse().join("");
    result.textContent = reversed;
}

// UPPERCASE
function toUpper(){
    result.textContent = input.value.toUpperCase();
}

// LOWERCASE
function toLower(){
    result.textContent = input.value.toLowerCase();
}

// LENGTH
function getLength(){
    result.textContent = "Length: " + input.value.length;
}

function clearText(){
    input.value = "";
    result.textContent = "";
}