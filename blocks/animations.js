document.addEventListener("DOMContentLoaded", function() {
    var fadeElements = document.querySelectorAll(".fade-in");

    function checkFade() {
        for (var i = 0; i < fadeElements.length; i++) {
            var fadeElement = fadeElements[i];
            var position = fadeElement.getBoundingClientRect();

            if (position.top < window.innerHeight) {
                fadeElement.classList.add("fade-in-show");
            }
        }
    }

    checkFade();

    window.addEventListener("scroll", checkFade);
});