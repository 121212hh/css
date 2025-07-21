// gsap하고 연동
gsap.registerPlugin(ScrollTrigger)
$(function(){
// 애니메이션할 요소선택
//scroll 바의 위치와 요소의 위치 정하기
gsap.timeline({
    // 스크롤바에 따른 애니메이션 설정
    scrollTrigger:{
        // 부드럽게 처리
        scrub:3,
        // 애니메이션 대상(요소)선택
        trigger:".section2 ul",
        // 애니메이션 시작부분
        start:"20% 50%",
        // 애니메이션 끝부분
        end:"100% 60%",
        markers:true,



    },




})

    .to(".section2 li:nth-child(1)",{y:-300,duration:1,ease:"ease-in-out"},0.5)
    .to(".section2 li:nth-child(2)",{y:-300,duration:1,ease:"ease-in-out"},0.7)
    .to(".section2 li:nth-child(3)",{y:-300,duration:1,ease:"ease-in-out"},0.9)
    .to(".section2 li:nth-child(4)",{y:-300,duration:1,ease:"ease-in-out"},1.1)

    gsap.timeline({
                scrollTrigger:{
                    scrub:3,
                    trigger:".section4 ul li",
                    start:"10% 20%",
                    end:"50% 50",
        markers:true,
                }
    })
    .fromTo(".section4 ul li:nth-child(1)",{y:600},{y:0},1)
    .fromTo(".section4 ul li:nth-child(2)",{y:600},{y:0},1.5)
    .fromTo(".section4 ul li:nth-child(3)",{y:600},{y:0},2)
    .fromTo(".section4 ul li:nth-child(4)",{y:600},{y:0},2.5)
    .fromTo(".section4 ul li:nth-child(5)",{y:600},{y:0},3)
    .fromTo(".section4 ul li:nth-child(6)",{y:600},{y:0},3.5)
    .fromTo(".section4 ul li:nth-child(7)",{y:600},{y:0},4)


})

gsap.registerPlugin(ScrollTrigger);
gsap.timeline({
  scrollTrigger: {
    scrub: 3,
    trigger: ".section3 h2",
    start: "80% 80%", 
    end: "60% 60%",

        markers: true
  }
})
.fromTo(
  ".section3 h2", 
  { x: -2000 },
  { x: 0,},
  0 
);