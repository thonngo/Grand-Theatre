 const btnSwpr = document.querySelector(".button_loupe");


// //function stop (e) => e.preventDefaultDefault();
function swiperClick() {
  const swiper = new Swiper(".swiper", {
    // Optional parameters
    // direction: "vertical",
    slidesPerView: "auto" //количество выводимых слайдов, по умолчанию стоит 1
    // loop: зацикливание картинок по кругу, true - будет повтоорять, false - по умолчанию не будет повторять
  
    // If we need pagination
    // pagination: {
    //   el: ".swiper-pagination"
    // },
  
    // Navigation arrows
    // navigation: {
    //   nextEl: ".swiper-button-next",
    //   prevEl: ".swiper-button-prev"
    // },
  
    // And if we need scrollbar
    // scrollbar: {
    //   el: ".swiper-scrollbar"
    // }
    
  });
  console.log(999);
}

btnSwpr.addEventListener("click",  swiperClick); 
   



