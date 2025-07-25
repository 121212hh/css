gsap.registerPlugin(ScrollTrigger);


let header = document.querySelector("header");
console.log(header);
let mbtn = document.querySelector(".m_btn");
console.log(mbtn);
mbtn.addEventListener("click",function(){
    header.classList.toggle("on");
})


// 스크롤바 이벤트에 따라서 위치에 따라서 header숨기고 보이게함
$(function(){
    // 스크롤바를 움직이는  이벤트
    // 스크롤바의 이전 위치를 기억하는 변수
    let preNum = 0
    document.addEventListener("scroll",function(){
        // 현재위치의 스크롤바의 위치를 알려주는함수
        let nowNum = $(window).scrollTop()
        console.log(nowNum)

        if(nowNum > preNum){
            // header를 안보이게 하게
           $("header").addClass('move') 
        }else{
            // header를 보이게함
            $("header").removeClass('move')
        }
         preNum = nowNum
    })


    // svg애니메이션설정시 총길이값을 알아내기
    $(".line-draw2").each(function(i,path){
        let lng = path.getTotalLength()
        console.log("총길이값",lng)
    })

    // scrollar 함수를 호출
    $(".animate").scrolla({
        // 모바일에서 적용
        mobile:false,
        // 스크롤바에 해당 class에 오면 제실행
        once:false
    })

})

gsap.registerPlugin(ScrollTrigger);
    gsap.timeline({
    scrollTrigger:{
        scrub:4,
        trigger:"#work",
        start:"0% 70%",
        end:"0% 20%",
        // markers:true
    }
})
// .to("선택자",{},0)
.to("#work",{background:"#fff",ease:'none',duration:5},0)
