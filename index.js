// Write your code here!

const main = document.querySelector("main#main");
main.remove();

const newHeader = document.createElement("h1");
newHeader.id = "victory";
newHeader.innerHTML = "Eva is the champion";
document.body.appendChild(newHeader);
