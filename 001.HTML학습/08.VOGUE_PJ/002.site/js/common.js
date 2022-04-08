// 보그 PJ 공통 JS - common.js

//////////////////// 로드구역 /////////////////////////
window.addEventListener("DOMContentLoaded", () => {

    console.log("로딩완료!");

    // 부드러운 스크롤

    // 스크롤값 변수
    let scTop;
    // 상단영역 - #top
    let topA = document.querySelector("#top");
    // 위로가기 버튼 - .tbtn
    let tbtn = document.querySelector(".tbtn");

    /****************************** 
        [윈도우 스크롤 이벤트 함수]
        - 스크롤 이벤트 : scroll
        - 이벤트 대상 : window
        - 스크롤 이벤트값 : scrollY
    ******************************/
    window.addEventListener("scroll", () => {
        // 스크롤 위치값
        scTop = this.scrollY;
        // scrollY - 세로축 스크롤 위치값 리턴
        // this는 화살표함수에서 window객체임!
        console.log("스위:", scTop);

        ///////////////////////////////
        // 상단메뉴 슬림 변경하기 ///////
        ///////////////////////////////

        // 1. 스크롤 위치가 100px 이상일때 
        // 변경사항: #top에 클래스 on 넣기
        if(scTop >= 100) tbtn.classList.add("on");

        // 2. 스크롤 위치가 100px 미만일때(else)
        // 변경사항: #top에 클래스 on 제거
        else tbtn.classList.remove("on");

        ///////////////////////////////
        ///// 위로가기 버튼 보이기기 ////
        ///////////////////////////////

        // 1. 스크롤 위치가 200px 초과일때 
        // 변경사항: #top에 클래스 on 넣기
        if(scTop > 200) topA.classList.add("on");

        // 2. 스크롤 위치가 100px 미만일때(else)
        // 변경사항: #top에 클래스 on 제거
        else topA.classList.remove("on");


        //////////////////////////////////////
        ///////// 등장액션 클래스 추가 /////////
        //////////////////////////////////////
        
       // 현재 스크롤 위치가 등장할 요소의 위치범위에
       // 있다면 등장해라!
     
        // 등장요소 위치값 배열만큼 체크함수 호출!
        scPos.forEach((val,idx)=>scAction(idx));


    }); //////////////// scroll /////////////////

    /*********************************************** 
        ** 원리:
        1. scAct 변수에 .scAct 클래스 요소를 담고
        요소의 개수만큼 scPos 배열변수에 위치값을
        셋팅한다!

        2. 등장요소의 위치보다 이전부터 위치값 사이 범위에
        스크롤이 통과할때 등장할 요소를 나타나도록 
        함수로 체크한다!
        
    ***********************************************/
    // 스크롤 등장 대상요소
    let scAct = document.querySelectorAll(".scAct");
    // 스크롤 등장 대상위치 배욜
    let scPos = [];
    // 대상요소만큼 for문 돌기 -> for of
    for(let i=0; i<scAct.length; i++){
        scPos[i] = scAct[i].offsetTop;
    } //////////// for ////////////////

    console.log(scPos);

    // 스크롤 등장위치 조정값 : 윈도우 화면크기의 2 / 3
    const winH = (window.innerHeight / 3) * 2 ;
    console.log("윈도우높이2/3",winH);

    /************************************************** 
        함수명: scAction
        기능: 스크롤 위치 값이 설정범위에 들어가면
            해당 순번의 요소가 등장한다!
    **************************************************/
   const scAction = seq => { // seq는 순번
        // console.log("순번",seq);

        // 조건: 스크롤위치가 포지션위치이전 보다 크고 
        // 스크롤 위치가 포지션위치보다 작으면 실행!
        if(scTop > scPos[seq]-winH && 
            scTop < scPos[seq]){
            // 해당 순번요소에 클래스 on 넣기!
            scAct[seq].classList.add("on");
        } /////// if //////////

   }; //////// scAction 함수 ////////////////////




    /************************************************** 
        [윈도우 세로 스크롤 위치값 가져오는 방법]

        1. this.scrollY (this키워드가 window의미)
        2. window.scrollY
        3. document.scrollingElement.scrollTop
        4. document.documentElement.scrollTop
        5. document.querySelector("html").scrollTop

        참고) 가로스크롤일 경우
            scrollY -> scrollX
            scrollTop -> scrollLeft
            로 바꿔서 위와 동일함!

    **************************************************/



}); ////////////////// 로드구역 //////////////////////