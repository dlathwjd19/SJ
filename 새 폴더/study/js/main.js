// 카툰네트워크 메인 페이지 JS - main.js

/********************************************** 
    함수명 : chgMV
    기능 : 프로그램 변경
**********************************************/
function chgMV(pvid){ 

    var tg = document.querySelector("#screen iframe");

    //  src속성 변경하기
    tg.src = `https://www.youtube.com/embed/${pvid}?autoplay=1&playsinline=1`;
}


window.addEventListener("load",() => {

    console.log("로딩완료!");
    // 인기프로그램 동영상 코드 객체 ///
    const mcode = {
        "위 베이비 베어스":"xkBPklt3Ju4",
        "슈퍼텐 시간탐험대":"1gyvD5fxNIE",
        "그리지와 레밍스 월드투어":"01wgWeMonWQ",
        "브레드 이발소 시즌2":"k9A7TxQWnjU",
    }; ///// mcode객체 /////

    // 포스터 a요소 클릭시 프로그램 변경하기
    // 대상 : .plist a
    let plink = document.querySelectorAll(".plist a");

    // 클릭이벤트 속성 셋팅
    for(let x of plink){
        x.onclick = () => {
            let ptit = x.querySelector("img").getAttribute("alt");

            chgMV(mcode[ptit]);

            return false;
            
        }; ///// click 함수 /////
    } /////////// for of ////////////

    // 포스터 메뉴 li 클릭시 li에 클래스 on넣기
    // 대상: .glist ul>li
    // let plist = document.querySelectorAll(".plist ul>li");

    // console.log("리스트개수:",plist.length);

    // 클래스 초기화 함수 ////////
    // function resetFn() {
    //     for (let x of plist)
    //         x.classList.remove("on");
    // }

    // 대상만큼 click이벤트 설정하기
    // for of 사용!
    // for(let x of plist){
    //     x.onclick = ()=>{
    //         // 1. 클래스 초기화함수 호출
    //         resetFn();
    //         // 2. 해당 li요소 클래스 on 넣기
    //         x.classList.add("on");
    //     }; 
    // }

}); 