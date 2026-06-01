/****************************
Name of task: Arrays 2
****************************/

console.log("Running t16_arrays_continued.js")

let shoppingList = [];

/****************************
Functions
****************************/
function addItem() {
    const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
    let item = document.getElementById("itemField").value;

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

    console.log("List displayed. Items: " + shoppingList.length);
}