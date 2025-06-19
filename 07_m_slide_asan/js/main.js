$(function(){
    // 스와이프 슬라이드 자바
    const swiper = new Swiper('.swiper', {
  // Optional parameters
//   direction: 'vertical',
    // direction: 'horizontal',
    effect:'fade',
    loop: true,
autoplay:{delay:3000,},
  // If we need pagination
        pagination: {
        el: '.swiper-pagination',
        clickable:true
    },

  // Navigation arrows
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },

  // And if we need scrollbar
    scrollbar: {
    el: '.swiper-scrollbar',
    },
});
})