/****************************
Name of task: Constants
****************************/

console.log("Running t20_constants.js")

// Constants
const userName = "David";
const year = 2026;
const age = 15;
const pocketMoney = 20;
const birthYear = year - age;
const oldAge = age + 10;
const halfMoney = pocketMoney / 2;
const minNameLength = 3;

// Variables
let shoppingList = [];

/****************************
Functions
****************************/
function addItem() {
    const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
    const item = document.getElementById("itemField").value;
    shoppingList.push(item);
    console.log("Added: " + item);
    OUTPUT.innerHTML = "<p>You have added " + item + " to the list.</p>";
    document.getElementById("itemField").value = "";
}


function displayList() {
    const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
    OUTPUT.innerHTML = "<p>These are the items on your shopping list:</p>";
    for (let i = 0; i < shoppingList.length; i++) {
        OUTPUT.innerHTML += shoppingList[i] + "<br>";
    }
    console.log("List displayed Items: " + shoppingList.length);
}


function checkName() {
    const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
    let name = document.getElementById("nameField").value;

    name = name.trim();

    if (name.length >= minNameLength) {
        OUTPUT.innerHTML = "<p>Thanks, " + name + "! That's a valid name.</p>";
        console.log("Valid name entered: " + name);
    } else {
        OUTPUT.innerHTML = "<p>Please enter a name that is at least " + minNameLength + " letters long.</p>";
        console.log("Invalid name entered: " + name);
    }

    document.getElementById("nameField").value = "";
}