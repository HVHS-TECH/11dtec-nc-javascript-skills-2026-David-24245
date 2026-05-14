/****************************
Name of task: Data Types
****************************/

console.log("Running t11_data_types.js")

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

function getFormInput(){
    const AGE_FIELD = document.getElementById("ageField");   
    const OUTPUT = document.getElementById("spaceForJavaScriptOutput");  
    let userAge = AGE_FIELD.value;
    OUTPUT.innerHTML = "<p>Your name is " + age + "</p>";
}