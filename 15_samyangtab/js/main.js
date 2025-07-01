$(function(){
    // product2숨김
    $(".product_wrap .product2").hide()
    $(".tab li").click(function(){
        let num=$(this).index();
        $(".tab li").removeClass("on")
        $(this).addClass("on")
        $(".product_wrap .product").hide();
        $(".product_wrap .product").eq(num).show();
    })
})