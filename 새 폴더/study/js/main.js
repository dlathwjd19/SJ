// 카툰네트워크 메인 페이지 JS - main.js

// 프로그램변경
function chgPro(pvid){ 

    var tg = document.querySelector("#screen iframe");

    tg.src = `https://www.youtube.com/embed/${pvid}?autoplay=1&playsinline=1`;
}


window.addEventListener("load",() => {

    console.log("로딩완료!");
    // 인기프로그램 동영상 코드 객체 ///
    const pcode = {
        "위 베이비 베어스":"xkBPklt3Ju4",
        "슈퍼텐 시간탐험대":"1gyvD5fxNIE",
        "그리지와 레밍스 월드투어":"01wgWeMonWQ",
        "브레드 이발소 시즌2":"k9A7TxQWnjU"
    }; ///// pcode객체 /////

    // 포스터 a요소 클릭시 프로그램 변경하기
    // 대상 : .plist a
    let plink = document.querySelectorAll(".plist a");

    // 클릭이벤트 속성 셋팅
    for(let x of plink){
        x.onclick = () => {
            let ptit = x.querySelector("img").getAttribute("alt");

            chgPro(pcode[ptit]);

            return false;
            
        }; ///// click 함수 /////
    } /////////// for of ////////////
}); 