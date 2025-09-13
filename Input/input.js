let h1 = document.querySelector(".h1");
let input = document.querySelector(".input");

input.addEventListener("input", function() {
    h1.textContent = input.value.length;
})