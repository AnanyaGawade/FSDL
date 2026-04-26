const display = document.getElementById("display");

// ADD VALUE
function append(value){
    display.value += value;
}

// CLEAR
function clearDisplay(){
    display.value = "";
}

// CALCULATE
function calculate(){
    try{
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}