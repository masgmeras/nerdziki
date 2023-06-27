const add_cards= document.querySelector('#add_card');

add_cards.addEventListener("click", next_card);

function next_card(){
const addCard = document.createElement("div");
console.log("add");
addCard.classList.add('cards');
document.body.appendChild(addCard);

const para = document.createElement("p");
para.innerText = prompt("SHOP");
addCard.appendChild(para);
}