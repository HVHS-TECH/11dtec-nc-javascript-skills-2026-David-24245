/****************************
Name of task: Input From HTML
****************************/

console.log("Running t10_input_from_HTML.js")

// Variables
let Username = "David";
let year = 2026;
let age = 15;
let pocketMoney = 20;
let birthYear;
let oldAge;
birthYear = year - age;
oldAge = age + 10;
halfMoney = pocketMoney / 2;

function getFormInput(){
const spaceForJavaScriptOutput= document.getElementById("spaceForJavaScriptOutput");
let userName = spaceForJavaScriptOutput.value;
OUTPUT.innerHTML = "<p>Your name is "+userName+"</p>";
}

/****************************
Main code
****************************/

/****************************
Functions
****************************/

<form onsubmit="return false;">
    <label for="formName">Name:</label>
    <input type="text" id="nameField" name="formName" placeHolder="name">
    <input type="submit" onClick=getFormInput()>
</form>