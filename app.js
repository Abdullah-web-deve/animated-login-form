const Sign_in_btn = document.querySelector("#Sign-in-btn");
const Sign_up_btn = document.querySelector("#Sign-up-btn");
const container = document.querySelector(".container");
const Sign_in_btn2 = document.querySelector("#sign-in-btn2");
const Sign_up_btn2 = document.querySelector("#sign-up-btn2");


Sign_up_btn.addEventListener ("click", () => {
    container.classList.add("Sign-up-mode");
});

Sign_in_btn.addEventListener("click", () => {
    container.classList.remove("Sign-up-mode");
});


Sign_up_btn2.addEventListener ("click", () => {
    container.classList.add("Sign-up-mode2");
});

Sign_in_btn2.addEventListener("click", () => {
    container.classList.remove("Sign-up-mode2");
});
