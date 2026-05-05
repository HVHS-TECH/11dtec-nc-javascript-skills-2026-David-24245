/****************************
Name of task: Functions Parameters
****************************/

console.log("Running to7_functions_parameters.js")

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

const OUTPUT = document.getElementById("spaceForJavaScriptOutput")
OUTPUT.innerHTML = ("<h2>Added by JavaScript</h2>")

/****************************
Main code
****************************/
displayProduct("David", 15)

/****************************
Functions
****************************/
function displayProduct(_Username, _age) {
    OUTPUT.innerHTML += "<p> Welcome to the shop "+Username+"</p>";
    OUTPUT.innerHTML += "<p> You are "+age+" years old</p>";
}