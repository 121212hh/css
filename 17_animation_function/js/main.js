$(function(){
    // fadeout버튼 클릭하면 빨강박스 부드럽게 사라지기
    $("#btn1").click(function(){
        $("ul.box1 li:nth-child(1)").fadeOut();
    })
    $("#btn2").click(function(){
        $("ul.box1 li:nth-child(1)").fadeIn();
    })
    $(".btn1").click(function(){
        $("ul.box1 li:nth-child(2)").fadeToggle();
    })
    $(".btn2").click(function(){
        $("ul.box2 li:nth-child(1)").slideUp();
    })
    $(".btn3").click(function(){
        $("ul.box2 li:nth-child(1)").slideDown();
    })
    $(".btn4").click(function(){
        $("ul.box2 li:nth-child(2)").slideToggle();
    })





})