
import "./components/film-card.js";

const addButton = document.querySelector(".js-btn-add");
const listElement = document.querySelector(".js-list");

function handleAdd (ev) {
    ev.preventDefault();
    paintNew();
};
function paintNew () {
    listElement.innerHTML += `<film-card img="./img/anillos2.jpg" title="Alianzas de boda" collection="ORO 24 kilates"
    description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero omnis eos iure quibusdam labore excepturi, amet aliquid modi quam. Sapiente dolorum dolores consequuntur ipsum quis quibusdam voluptates porro id perspiciatis?"
    price="200 EUROS"></film-card>`
}


addButton.addEventListener("click", handleAdd);