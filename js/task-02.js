const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ul = document.querySelector("#ingredients");

const createListItem = (text) => {
  const li = document.createElement("li");
  li.textContent = text;
  li.classList.add("item");
  return li;
};

const ingredientsList = ingredients.map(createListItem);
ul.append(...ingredientsList);