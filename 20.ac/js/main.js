$(function(){
    // 2단메뉴 열리게
    $(".box>ul>li>a").click(function(){
        $(this).next().slideToggle().parent().siblings().find(".depth2").slideUp();
    })




})