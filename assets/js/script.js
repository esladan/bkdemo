const   openNav     = document.getElementById("open-nav"),
        closeNav    = document.getElementById("close-nav"),
        navClass    = document.querySelector(".nav-items"),
        backdrop    = document.querySelector(".backdrop")



openNav.addEventListener("click", function () {
    navClass.classList.remove("hide-nav-mobile")
    backdrop.style.display = "block"
})

closeNav.addEventListener("click", function () {
    navClass.classList.add("hide-nav-mobile")
    backdrop.style.display = "none"
})

backdrop.addEventListener("click", function () {
    navClass.classList.add("hide-nav-mobile")
    backdrop.style.display = "none"
})



AOS.init();