const burgerIcon = document.querySelector(".burger-icon")
if (burgerIcon) {
    const menuContent = document.querySelector(".menu-content")
    burgerIcon.addEventListener("click", function (e) {
        document.body.classList.toggle("lock")
        burgerIcon.classList.toggle("active")
        menuContent.classList.toggle("active")
    })
}
