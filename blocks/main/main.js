const isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i)
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i)
    },
    check: function () {
        return (
        isMobile.Android() ||
        isMobile.Windows()
        )
    }
}
var titles = document.querySelectorAll("h2")
var textBlocks = [
    document.querySelectorAll(".start-text-wrapper__start-body-text"),
    document.querySelectorAll(".body-text-wrapper__first-body-text"),
    document.querySelectorAll(".body-text-wrapper__second-body-text"),
    document.querySelectorAll(".body-text-wrapper__third-body-text"),
    document.querySelectorAll(".body-text-wrapper__fourth-body-text"),
    document.querySelectorAll(".body-text-wrapper__fifth-body-text"),
    document.querySelectorAll(".body-text-wrapper__seventh-body-text")
]
if (isMobile.check()) {
    titles.forEach(function (title) {
        title.classList.add("mobile-sub-title");
    });
    textBlocks.forEach(function(block) {
        block.forEach(function(element) {
            element.classList.add("mobile-body-text");
        });
    });
}
else {
    titles.forEach(function(title) {
        title.classList.add("sub-title");
    });
    textBlocks.forEach(function(block) {
        block.forEach(function(element) {
            element.classList.add("body-text");
        });
    });
}