

$(function(){
    $(".list").slick({
        autoplay:true,
        slidesToShow:2,
        slidesToScroll:1,
        arrows:false,
        dots:true,
    });
    // $(".btn_off").click(function(){
    //     $(".btn_off").toggleClass("on")
    // });
    let sw=true;
    $(".btn_off").click(function(){
        if(sw==true){
            $(".btn_off").addClass("on");
            $(".list").slick("slickPause");
        sw=false;

        }else{
            $(".btn_off").removeClass("on");
            $(".list").slick("slickPlay");
            sw=true;
        }
    })


}) 


