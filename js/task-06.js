const inputEl = document.querySelector("#validation-input");
const correctLength = inputEl.dataset.length;

inputEl.addEventListener("blur", () => {
  const inputValue = inputEl.value.trim();

  if (inputValue.length === 0) {
    inputEl.classList.remove("valid", "invalid");
  } else if (inputValue.length === Number(correctLength)) {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
  } else {
    inputEl.classList.add("invalid");
    inputEl.classList.remove("valid");
  }
});