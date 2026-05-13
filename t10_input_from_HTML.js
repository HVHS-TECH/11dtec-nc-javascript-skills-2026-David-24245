/****************************
Name of task: Input From HTML
****************************/

console.log("Running t10_input_from_HTML.js")

// Variables
let Username = "David";
let userName = "David";
let year = 2026;
let age = 15;
let pocketMoney = 20;
let birthYear;
let oldAge;
birthYear = year - age;
oldAge = age + 10;
halfMoney = pocketMoney / 2;


/****************************
Main code
****************************/
getFormInput()

/****************************
Functions
****************************/
function getFormInput(){
const NAME_FIELD= document.getElementById("spaceForJavaScriptOutput");
let userName = NAME_FIELD.value;
OUTPUT.innerHTML = "<p>Your name is "+userName+"</p>";
}

<form onsubmit="return false;">
    <label for="formName">Name:</label>
    <input type="text" id="spaceForJavaScriptOutput" name="formName" placeHolder="name"></input>
    <input type="submit" onClick="getFormInput"()>
</form>