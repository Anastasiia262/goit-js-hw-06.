const counterValue = document.querySelector('#value');
let value = 0;

document.querySelector('[data-action="increment"]').addEventListener('click', () => {
  value += 1;
  counterValue.textContent = value;
});

document.querySelector('[data-action="decrement"]').addEventListener('click', () => {
  value -= 1;
  counterValue.textContent = value;
});