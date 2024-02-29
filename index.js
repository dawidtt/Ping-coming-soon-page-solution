const pathToForm = document.querySelector("form");
pathToForm.addEventListener("submit", function (event) {
  event.preventDefault();
});
let errorMessage;
function resizing() {
  if (window.innerWidth < 996)
    errorMessage = document.querySelector("#error-mobile");
  else errorMessage = document.querySelector("#error-desktop");
}
window.addEventListener("resize", resizing());

function validateEmail() {
  const email = document.querySelector("#email");
  const reg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  const checkEmail = reg.test(email.value);
  if (!checkEmail) {
    email.classList.add("error-border");
    email.placeholder = "email@example/com";
    errorMessage.innerText = "Please provide a valid email address";
    errorMessage.style.display = "block";
  } else {
    email.classList.remove("error-border");
    email.placeholder = "Your email address...";
    errorMessage.innerText = "";
    errorMessage.style.display = "none";
  }
}
