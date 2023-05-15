function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
let colorSpan = document.querySelector('.color');
let changeColorButton = document.querySelector('.change-color');

changeColorButton.addEventListener('click', () => {
  let randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
  colorSpan.textContent = randomColor;
});


