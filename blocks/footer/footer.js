const input = document.querySelector(".support-input-wrapper__input");
const submitButton = document.querySelector(".support-input-wrapper__button");
const popupOverlay = document.querySelector(".popup-overlay");
const popupContent = document.querySelector(".popup-body");
const closeButton = document.querySelector(".close-button");
submitButton.addEventListener("click", function(event) {
    event.preventDefault();
    if (input.value.length > 8) {
        popupOverlay.style.display = "flex";
        popupContent.style.display = "block";
        document.body.style.overflow = "hidden";
        input.value = "";
        setTimeout(function() {
            popupOverlay.style.backgroundColor = "rgba(218, 172, 0, 0.9)";
            popupContent.style.backgroundColor = "rgb(255, 255, 255)";
        }, 10);
    }
});
closeButton.addEventListener("click", function() {
    popupOverlay.style.backgroundColor = "transparent";
    popupContent.style.backgroundColor = "transparent";
    setTimeout(function() {
        popupOverlay.style.display = "none";
        popupContent.style.display = "none";
        document.body.style.overflow = "auto";
    }, 10);
});
