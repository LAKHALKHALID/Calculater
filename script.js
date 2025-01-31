let display = document.getElementById("display");


function addToDisplay(input){
    display.value += input;
}


function clearDisplay(){
    display.value = "";
}

function removeFromDisplay(){
    display.value = display.value.slice(0, -1);
}

function calcule(){
    display.value = eval(display.value)
}