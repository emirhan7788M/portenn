var nav = document.querySelector(".header__nav")
var btn = document.querySelector(".header__burger")
var list = document.querySelectorAll(".header__list")


btn.addEventListener("click", () => {
    nav.classList.toggle("open");
} );


list.forEach((elem) => {
    elem.addEventListener('click', () =>{

        nav.classList.toggle("open");
    })
});