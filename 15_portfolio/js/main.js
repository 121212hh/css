function time(){
    let webHour=document.querySelector(".web_hour")
    let webMin=document.querySelector(".web_min")
    let webSec=document.querySelector(".web_sec")
    let webMsec=document.querySelector(".web_msec")
    console.log(webHour,webMin,webSec,webMsec)
    let date=new Date();
    console.log(date);
    // 시
    let hour = date.getHours();
    console.log(hour);
    let dhour=digit(hour)
    webHour.innerHTML=dhour;
    // 분
    let min = date.getMinutes();
    console.log(min);
    let dmin=digit(min)
    webMin.innerHTML=dmin;
    // 초
    let sec = date.getSeconds();
    console.log(sec);
    let dsec=digit(sec)
    webSec.innerHTML=dsec;
    // 밀리초
    let msec =date.getMilliseconds();
    console.log(msec);
    // msec두자리로
    msec=Math.floor(msec/10)
    let dmsec=digit(msec)
    webMsec.innerHTML=dmsec;

    function digit(x){
        if(x<10){
            return "0"+x
        }else{
            return x;
        }
    }

    // 1마다 타임함수 반복
    setInterval(function(){
        time();
    },100)
}
time()