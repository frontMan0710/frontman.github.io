window.addEventListener('scroll', function() {
    var header = document.querySelector('.header');
    var headerHeight = header.offsetHeight;

    if (window.pageYOffset > headerHeight) {
        header.classList.add('fixed');
    } else {
        header.classList.remove('fixed');
    }
});