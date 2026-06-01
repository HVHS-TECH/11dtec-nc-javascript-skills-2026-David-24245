/****************************
Name of task: Arrays Part 1
****************************/

console.log("Running t14_arrays.js")

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
Arrays
****************************/
let chocolateMessages = ["You loathe chocolate", "Chocolate is meh", "Chocolate is pretty good", "Chocolate is the best thing EVER!!!!"];

/****************************
Functions
****************************/
function calculateChange(_money, _price){
    let change = _money - _price;
    return change;
}

function getFormInput(){
    const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
    let choice = document.getElementById("chocolateField").value;

    if (choice < 0) {
        OUTPUT.innerHTML = "<p>Please enter a number between 0 and 3.</p>";
    } else if (choice > 3) {
        OUTPUT.innerHTML = "<p>Please enter a number between 0 and 3.</p>";
    } else if (choice === "") {
        OUTPUT.innerHTML = "<p>Please enter a number between 0 and 3.</p>";
    } else {
        console.log("User chose index: " + choice);
        OUTPUT.innerHTML = "<p>" + chocolateMessages[choice] + "</p>";
    }
}