let button = document.getElementById('btn');
let content = document.getElementById('content');

// document.getElementById('paragraphs').innerHTML = `<h2>I changed this <em>element</em></h2>`;
// let div = document.getElementById("paragraphs");
// document.getElementById("content").style.backgroundColor = "red";
// document.getElementById("content").style.color = "white";

// let newParagraph = document.createElement("p");
// (console.log(newParagraph));
// newParagraph.innerText = "some text is now here";
// (console.log(newParagraph));
// div.appendChild(newParagraph);

// let elements = document.getElementsByClassName("button");
// for( let i = 0; i < elements.length; i++) {

// }
// console.log(document.getElementsByTagName("p"));
// console.log(document.querySelector("div").firstChild);
// console.log(document.querySelectorAll("#content"));
console.log(button);

function showAlert() {
    alert("the button was clicked");
}
button.addEventListener('click', (event) => {
    let sibling = event.target.nextSibling.nextSibling.nextSibling;
    let body = document.getElementsByTagName("body")[0];
    body.removeChild(sibling);
    showAlert();
});

document.getElementById('remove').addEventListener('click', () => {
    let idToRemove = document.getElementById('remove-id').value;
    let elementToRemove = document.getElementById(idToRemove);
    elementToRemove.parentNode.removeChild(idToRemove);
    document.getElementById('remove-id').value = '';
});

let id = 0;

document.getElementById('add').addEventListener('click', () => {
    var parent = document.getElementById('paragraphs');
    var newElement = document.createElement('p');
    newElement.innerHTML = document.getElementById('new-text').value;
    newElement.setAttribute('id', id++);
    parent.appendChild(newElement);
    document.getElementById('new-text').value = '';
});