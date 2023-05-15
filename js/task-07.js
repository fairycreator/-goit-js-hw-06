let fontSizeControl = document.querySelector('#font-size-control');
let textElement = document.querySelector('#text');

fontSizeControl.addEventListener('input', () => {
  let fontSize = fontSizeControl.value + 'px';
  textElement.style.fontSize = fontSize;
});
