/****************************
Name of task: Input From HTML
****************************/

console.log("Running t10_input_from_HTML.js")

// Variables
let userName = "David";
let year = 2026;
let age = 15;
let pocketMoney = 20;
let birthYear;
let oldAge;
let halfMoney;        
birthYear = year - age;
oldAge = age + 10;
halfMoney = pocketMoney / 2;

/****************************
Main code
****************************/

/****************************
Functions
****************************/
function getFormInput(){
    const NAME_FIELD = document.getElementById("nameField");   
    const OUTPUT = document.getElementById("spaceForJavaScriptOutput");  
    let userName = NAME_FIELD.value;
    OUTPUT.innerHTML = "<p>Your name is " + userName + "</p>";
}