/****************************
Name of task: For Loops
****************************/

console.log("Running t15_for_loop.js")

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
Functions
****************************/

function getFormInput() {
    const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
    let startNumber = parseInt(document.getElementById("versesField").value);

    let lyrics = "";

    for (let i = startNumber; i >= 1; i--) {
        lyrics += "<p>" + i + " bottles of milk on the wall, " + i + " bottles of milk.<br>"
               + "Take one down, pass it around, " + (i - 1) + " bottles of milk on the wall.</p>";

        console.log("Current count: " + i);
    }

    OUTPUT.innerHTML = lyrics;
}