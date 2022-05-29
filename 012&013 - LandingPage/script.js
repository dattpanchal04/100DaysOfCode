let burgurMenu = document.getElementById("burgurMenu")
let links = document.getElementById("links")
let totop = document.querySelector(".to-top")

function action() {
    if (links.style.display == "none") {
        links.style.display = "block";
    }
    else {
        links.style.display = "none"
    }
}

window.addEventListener("scroll", () => {

    if (window.pageYOffset > 200) {
        totop.classList.add("active")
    }
    else {
        totop.classList.remove("active")
    }
})



