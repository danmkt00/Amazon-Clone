const input = document.getElementById("nav-input");
const selector = document.getElementById("selector-form");
const submit = document.getElementById("nav-submit");

input.addEventListener("focus", () => {
  selector.classList.add("highlight-left");
  submit.classList.add("highlight-right");
});

input.addEventListener("blur", () => {
  selector.classList.remove("highlight-left");
  submit.classList.remove("highlight-right");
});
