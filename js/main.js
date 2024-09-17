var burger = document.querySelector(".header-menu_burger");
var hidenContent = document.getElementById("hidenContent");

// Проверяем, существуют ли элементы перед добавлением обработчика
if (burger && hidenContent) {
    burger.addEventListener('click', () => {
        hidenContent.classList.toggle('hiden');
    });
}

// Опции для наблюдателя
let options = {
    threshold: 0.1 // Процент видимости элемента (10%)
};

