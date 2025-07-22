$(function(){
    // popup창 닫기버튼을 클릭하면 높이를 0
    $(".btn_close").click(function(){
        $('.popup').slideUp();
    })
})

$(function(){
    // 주메뉴에 마우스를 올려을때
    $(".gnb>li>a").mouseenter(function(){
        $("header").stop().animate({'height':'370px'},300)
        $(".depth2").stop().fadeIn(300);


    })
    // 주메뉴에서 마우스를 벗어났을때
       $("header").mouseleave(function(){
        $("header").stop().animate({'height':'103px'},300)
        $(".depth2").stop().fadeOut(300)

   })
})

// 매인슬라이드
$(document).ready(function(){
  $('.slide').slick({
    autoplay: true,
    // 페이지버튼보이기
    dots:true
  });
});

// 배너슬라이드
$(document).ready(function(){
  $('.bannerslide').slick({
    // 자동실행
    autoplay: true,
    // 좌우버튼
    arrows:false,
    // 페이지버튼
    dots:true
  });
});
// 탭 기능: li 클릭 시 'on' 클래스 적용
$(".tab li").click(function(e) {
  // 기본 동작 방지 (예: 링크 클릭 시 페이지 이동 방지)
  e.preventDefault();
  
  // 모든 li에서 'on' 클래스 제거
  $(".tab li").removeClass("on");
  
  // 클릭한 li에 'on' 클래스 추가
  $(this).addClass("on");
});

$(".content ul.list li").click(function(e){
  e.preventDefault();
  $(".content ul.list li").removeClass("on");
    $(this).addClass("on");
})

