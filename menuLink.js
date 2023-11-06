const menuLinks = document.querySelectorAll(".burger-menu__link[data-goto]");

if (menuLinks.length > 0) { //проверка на существование таких ссылок
    menuLinks.forEach(menuLink => { //перебор ссылок 
        console.log(33);
        menuLink.addEventListener("click", onMenuLinkClick); 
    });

} 

function onMenuLinkClick(e) { //получаем объект на который кликнули
    const menuLink = e.target;
    let gotoBlock = document.querySelector(menuLink.dataset.goto);
    if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {//проверка есть в ссылках что-то или ссылаются ли они на существующий раздел
        gotoBlock = document.querySelector(menuLink.dataset.goto);
        const gotoBlockValue=gotoBlock.getBoundingClientRect().top + pageYOffset -  document.querySelector('header').offsetHeight;//положение раздела, getBoundingClientRect содержит размеры элемента и его положение относительно видимой области просмотра
        window.scrollTo ({ //Прокрутка документа до указанных координат.
            top: gotoBlockValue, //прокрутка сверху
            behavior: "smooth" //плавная прокрутка
        });
        e.preventDefault(); //отключение перехода по ссылкам href и обновление страницы после клика
    }   
}