var collapseInputs = document.querySelectorAll('.collapse input');
var colContents = document.querySelectorAll('.col-content');
var parentContainers = document.querySelectorAll('.eight-cards__eight-card');

// Обрабатываем каждый коллапс отдельно
collapseInputs.forEach(function(collapseInput, index) {
    // Получаем соответствующие элементы для текущего коллапса
    var colContent = colContents[index];
    var parentContainer = parentContainers[index];

    // Обработчик события изменения состояния input
    collapseInput.addEventListener('change', function() {
        // Проверяем, выбран ли input
        if (this.checked) {
            // Добавляем класс, чтобы увеличить высоту родительского блока
            parentContainer.classList.add('expanded');
        } else {
            // Удаляем класс, чтобы вернуть высоту родительского блока к исходному состоянию
            parentContainer.classList.remove('expanded');
        }
    });
});