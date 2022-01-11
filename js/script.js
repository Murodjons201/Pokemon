let elList = document.querySelector(".list");
let elCatalog = document.querySelector(".pokemons-catalog");

elCatalog.textContent = `Pokemons catalog: ${pokemons.length}`;

for (let pokemon of pokemons) {
  //CREATE:
  let newItem = document.createElement("li");
  let newItemBodyTop = document.createElement("div");
  let newItemImg = document.createElement("img");
  let newItemBodyBottom = document.createElement("div");
  let newItemIcon = document.createElement("img");
  let newItemTitle = document.createElement("h5");
  let newItemDescType = document.createElement("p");
  let newItemBodyElement = document.createElement("div");
  let newItemBodyElementWidth = document.createElement("p");
  let newItemBodyElementAge = document.createElement("p");

  //SETATRIBUT:
  newItem.setAttribute("class", "list__item");
  newItemBodyTop.setAttribute("class", "list__item-body-top");
  newItemImg.setAttribute("class", "list__item-img");
  newItemImg.setAttribute("src", pokemon.img);
  newItemBodyBottom.setAttribute("class", "list__item-body-bottom");
  newItemIcon.setAttribute("class", "list__item-icon");
  newItemIcon.setAttribute("src", "./images/Mask.svg");
  newItemTitle.setAttribute("class", "list__item-title");
  newItemDescType.setAttribute("class", "list__item-desc-type");
  newItemBodyElement.setAttribute("class", "list__item-bottom");
  newItemBodyElementWidth.setAttribute("class", "list__item-bottom-weight");
  newItemBodyElementAge.setAttribute("class", "list__item-bottom-age");

  //TEXT CONTENT:
  newItemTitle.textContent = pokemon.name;
  newItemDescType.textContent = pokemon.type;
  newItemBodyElementWidth.textContent = pokemon.weight;
  newItemBodyElementAge.textContent = pokemon.height;

  //APPENDCHILD:
  elList.appendChild(newItem);
  newItem.appendChild(newItemBodyTop);
  newItemBodyTop.appendChild(newItemImg);
  newItem.appendChild(newItemBodyBottom);
  newItemBodyBottom.appendChild(newItemIcon);
  newItemBodyBottom.appendChild(newItemTitle);
  newItemBodyBottom.appendChild(newItemDescType);
  newItemBodyBottom.appendChild(newItemBodyElement);
  newItemBodyElement.appendChild(newItemBodyElementWidth);
  newItemBodyElement.appendChild(newItemBodyElementAge);
}
