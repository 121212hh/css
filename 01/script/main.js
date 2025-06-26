
$(function(){
    $('.slide').slick({
    // vertical:true,
    autoplay:true,
    arrows:false,
    autoplaySpeed:3000,
    fade:true
    });
// 공지사항 클릭하면 팝업 보이기
    $('.notice ul li:first-child a').click(function(){
        $(".cover").show();
        $(".popup").show();
    })
// 닫기버튼 클릭하면 팝업창 닫기
    $(".popup .btn_popup").click(function(){
        $(".popup").hide()
        $(".cover").hide()
    })
// 패밀리버튼 클릭하면 리스트 박스 보이기 숨기기
    $(".fm").click(function(){
        $("footer .family ul").toggle()
    })
// gnb
    $(".gnb").mouseenter(function(){
        $(".depth,.gnbbg").show()
    })
    $(".gnb").mouseleave(function(){
        $(".depth,.gnbbg").hide()
    })

});