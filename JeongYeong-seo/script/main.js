$(function(){
    $('.slide').slick({
    autoplay:true,
    arrows:false,
    });
        $('.notice ul li:first-child a').click(function(){
        $('.popup').show()
        $('.cover').show()
    })
        $('.popup .btn_popup').click(function(){
        $('.popup').hide()
        $('.cover').hide()
    })
        $('footer .fam button').click(function(){
        $('footer .fam ul').toggle()
    })
            $('.gnb').mouseenter(function(){
        $('.gnb ul.depth2').toggle()
    })


});