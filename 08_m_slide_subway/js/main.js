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
  $("m_gnb>ul>li>a").removeClass('on')
  $(this).toggleClass()
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

// 탭바
$("ul.left_icon li").click(function(){
  $("ul.left_icon li").removeClass('on')
  $("ul.ri_icon li").removeClass('on')

  $(this).addClass('on')
  
})
$("ul.ri_icon li").click(function(){
  $("ul.ri_icon li").removeClass('on')
  $("ul.ri_icon li").removeClass('on')

  $(this).addClass('on')
})
$("ul.left_icon li span").click(function(){
  $("ul.left_icon span").removeClass('on')
  $("ul.ri_icon li").removeClass('on')

  $(this).addClass('on')
  
})
$("ul.ri_icon li").click(function(){
  $("ul.ri_icon span").removeClass('on')
  $("ul.ri_icon span").removeClass('on')

  $(this).addClass('on')
    // 쿠키정보확인
    if(GetCookie)
  // 팝업창
  $('#today_close,.popup .close label').click(function(){
    // setCookie
    if($('#today_close').is(':checked')){
      setCookie('subway','today',1)
      $('.popup').hide()
    }else{
      $('.popup').hide()
    }
    // 닫기버튼팝업숨기기
    $('.popup .close .txt_btn').click(function(){
      $('.popup').hide()
    })

  })
  // // GetCookie
	// 		function GetCookie(name){
	// 			var value=null, search=name+"=";
	// 			if(document.cookie.length > 0){
	// 				var offset=document.cookie.indexOf(search);
	// 				if(offset != -1){
	// 					offset+=search.length;
	// 					var end=document.cookie.indexOf(";", offset);
	// 					if(end == -1) end=document.cookie.length;
	// 					value=unescape(document.cookie.substring(offset, end));
	// 				}
	// 			} return value;
	// 		}
	// 		// SetCookie
	// 		function setCookie(name, value, expiredays){
	// 			var days=10;
	// 			if(days){
	// 				var date=new Date(); 
	// 				date.setTime(date.getTime()+(days*24*60*60*1000));
	// 				var expires="; expires="+date.toGMTString();
	// 			}else{
	// 				var expires=""; 
	// 			}
	// 			document.cookie=name+"="+value+expires+"; path=/";
	// 		}
})
