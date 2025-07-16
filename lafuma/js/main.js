$(function () {
  $(".gnb>li").mouseenter(function () {
    $(this).find(".depth2").stop().fadeIn(300);
  });

  $(".gnb>li").mouseleave(function () {
    $(this).find(".depth2").stop().fadeOut(300);
  });

//   swiper 슬라이드
  const swiper = new Swiper(".swiper", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    autoplay:true,

    // 페이지 버튼
    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
      clickable: true, 
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    // And if we need scrollbar
    scrollbar: {
      el: ".swiper-scrollbar",
    },
  });
  $(function(){
    $(".content ul.list li").mouseenter(function(){
      let num = $(this).find("img").attr("src")
      console.log(num)
      // 치환
      let num2 = num.replace("_ot","_ov")
      console.log(num2)
      $(this).find("img").attr("src",num2)
    })
    $(".content ul.list li").mouseleave(function(){
      let num = $(this).find("img").attr("src")
      console.log(num)
      // 치환
      let num2 = num.replace("_ov","_ot")
      console.log(num2)
      $(this).find("img").attr("src",num2)
    })

  })
$(function(){
  $('.btn_family').click(function(){
    $(".family_box .list").slideToggle();
    $(this).toggleClass("on");
  })

})


})
  $(window).resize(function(){
    let num = $(this).width()
    console.log("창사이즈",num)
    if(num<=767){
      $(".swiper .swiper-wrapper .slide1 a img").attr("src","./images/m_visual_a.jpg")
      $(".swiper .swiper-wrapper .slide2 a img").attr("src","./images/m_visual_b.jpg")
      $(".content .list li a img").attr("src","./images/m_cata_ot.jpg")
      $(".content .list li a img").attr("src","./images/m_cata_ot.jpg")
      $(".content .list li a img").attr("src","./images/m_cata_ot.jpg")
      $(".content .list li a img").attr("src","./images/m_cata_ot.jpg")
      $(".content .list li a img").attr("src","./images/m_cata_ot.jpg")
    }else{
 $(".swiper .swiper-wrapper .swiper-slide a img").attr("src",'./images/visual_a.jpg')
      $(".swiper .swiper-wrapper .swiper-slide a img").attr("src",'./images/visual_b.jpg')
    }
  })
  $(function(){
    $(".m_btn").click(function(){
      $(".cover").fadeIn()
      $(".m_menu_wrap").addClass("on")
      $("body,html").css({"overflow":"hidden"})
    })
    $(".cover").click(function(){
      $(".m_menu_wrap").moveClass("on")
      $(".cover").fadeOut()
    })
  })