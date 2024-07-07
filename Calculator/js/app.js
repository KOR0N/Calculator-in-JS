
const display = document.getElementById("display");
let error_value = 0;

function appendToDisplay(input){
  if(error_value){
    clearDisplay()
    error_value = 0;
  }
  display.value += input;
}

function calculate(){
  try{
    display.value = eval(display.value);
  }
  catch (error){
    display.value = "ERROR";
    error_value = 1;
  }
}

function clearDisplay(){
  display.value="";
}
