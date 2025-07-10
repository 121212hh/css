$(function(){
    const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  autoplay:{
    delay:3000,
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type:"fraction",
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

$('.banner_slide').slick({
  autoplay: true,
  slidesToShow:2,
  arrows: false,
  dots: true,
});
// 모바일메뉴
$(".m_gnb>ul>li>a").click(function(){
  $(this).next().slideToggle().parent().siblings().find(".depth").slideUp();
})


$(".header .m_btn").click(function(){
      $(".cover").fadeIn()
  $(".m_slidewrap").animate({"left":0},300)
  })
  
})


$(".m_close").click(function(){
    $(".cover").fadeOut()
  $(".m_slidewrap").animate({"left":'-100%'},300)
})
