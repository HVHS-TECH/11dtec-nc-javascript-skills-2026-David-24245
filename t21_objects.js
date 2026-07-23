/****************************
Name of task: Constants
****************************/

console.log("Running t20_constants.js")

const USER_NAME = "David";
const YEAR = 2026;
const AGE = 15;
const POCKET_MONEY = 20;
const BIRTH_YEAR = YEAR - AGE;
const OLD_AGE = AGE + 10;
const HALF_MONEY = POCKET_MONEY / 2;
const MIN_NAME_LENGTH = 3;

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

    if (name.length >= MIN_NAME_LENGTH) {
        OUTPUT.innerHTML = "<p>Thanks, " + name + "! That's a valid name.</p>";
        console.log("Valid name entered: " + name);
    } else {
        OUTPUT.innerHTML = "<p>Please enter a name that is at least " + MIN_NAME_LENGTH + " letters long.</p>";
        console.log("Invalid name entered: " + name);
    }

    document.getElementById("nameField").value = "";
}