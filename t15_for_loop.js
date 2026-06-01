/****************************
Name of task: For Loops
****************************/

console.log("Running t15_for_loop.js")

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
    console.log("Loop stopped");
}