// 쇼핑몰 배너 JS //
// 로드구역 ////////////
window.addEventListener("load", () => {

    console.log("로딩완료!!!");

    // 이벤트 대상 : .abtn
    let abtn = document.querySelectorAll(".abtn");
    // 변경대상 : 슬라이드 -> #slide
    let slide = document.querySelector("#slide");
    // 변경 대상: 블릿 -> .indic li
    let indic = document.querySelectorAll(".indic li");
    console.log("블릿개수:",indic.length);

    // 슬라이드 li에 순번 속성 주기! ///////
    (()=>{ 
        // 대상: $slide li
        let tg = slide.querySelectorAll("li");
        for(let i=0; i<tg.length; i++){
            tg[i].setAttribute("data-seq",i);
        } ////////// for /////////////////
    })(); 

    // 광클금지 상태값
    let prot = 0; // 1-금지, 0-허용

    /*************************************** 
        함수명: goSlide
        기능: 슬라이드를 왼쪽/오른쪽으로 이동함
    ***************************************/
    const goSlide = (dir,gb) => { 
        // dir - 이동방향(1:오른쪽,0왼쪽)
        // gb - 구분코드(인터발 호출일때만 값이 전달됨)

        
        // console.log("잠금상태:",prot);
        
        // 0. 광클금지 ////////
        if(prot) return; // 돌아가!
        prot = 1; // 잠금!
        setTimeout(()=>prot=0,600);
        // 0.6초 후 잠금해제! /////
        
        // 1. 전달값 및 호출확인
        console.log("이동!", dir,gb);
        
        // 1.2. 버튼클릭시 gb전달 값이 없는 경우
        // !gb 는 undefined인 경우 false임 -> true처리
        if(!gb) clearAuto(); // 인터발함수 지우기!


        // 1.5 슬라이드 li요소들 변수할당!
        let sli = slide.querySelectorAll("li");

        // 2. 방향분기 /////////////

        // 2-1. 오른쪽버튼 /////////
        if (dir) { // dir === 1 이면 true

            // (1) 슬라이드박스의 left값을 -100%로 이동
            slide.style.left = "-100%";
            slide.style.transition = ".6s ease-out";

            // 슬라이드 이동 후 (2),(3) 실행함!
            // 일정시간 후 한 번 실행하는 타이밍함수는? setTimeout
            setTimeout(() => {
                // (2) 첫번째 슬라이드 li를 잘라서 맨뒤로 보낸다!
                slide.appendChild(sli[0]);
                // appendChild(요소) - 선택요소 맨뒤이동

                // (3) 동시에 left값을 0으로 변경함!
                slide.style.left = "0";
                slide.style.transition = "none";
                // 트랜지션 없어야 애니메이션 안보임!

            }, 600); /// 타임아웃 ///


        } ///////// if ///////////


        // 2-2. 왼쪽 버튼
        else {
            // li요소 대상
            // (1) 먼저 맨뒤의 슬라이드 li를 맨앞으로 이동
            slide.insertBefore(sli[sli.length-1],sli[0]);
            // insertBefore(넣을놈, 넣을놈전놈)
            // sli.length-1 -> 컬렉션 마지막번호는 [개수-1]

            // (2) 이떄 left -100%로 변경한다!(트랜지션없음!)
            slide.style.left="-100%"
            slide.style.transition = "none";

            // (3) 이후 left값을 0으로 변경하여 애니메이션함
            // 주의 : 위의 설정코드와 분리를 위해 setTimeout으로
            // 약간의 시차를 줌!
            setTimeout(() => {
                slide.style.left="0"
                slide.style.transition = ".6s ease-out";
            }, 10); /// 0.01초 시차! ///

        } /////////// else ////////////
        
    }; /////////////// goSide 함수 //////////////////


    // 오른쪽 버튼 클릭시 
    abtn[1].onclick = () => goSlide(1);

    // 왼쪽 버튼 클릭시 
    abtn[0].onclick = () => goSlide(0);

    // 인터발용변수
    let autoI;
    
    ////////////////////
    // 인터발 호출함수 //
    ////////////////////
    const autoCall = () => {
        // 인터발 자동호출!
        autoI = setInterval(() => goSlide(1,1),2000);
        // 지우기 위해 변수에 할당함!
        
    }; ///////// autoCall 함수 /////////////

    // 인터발 호출함수 최초호출!
    autoCall();

    // 타임아웃용 변수
    let autoT;

    ////////////////////
    // 인터발 삭제함수 //
    ////////////////////
    // -> 슬라이드 이동버튼 클릭시 호출됨!
    const clearAuto = () => {

        console.log("인타발지우기!");

        // 1. 인터발 지우기 + 타임아웃지우기
        clearInterval(autoI);
        clearTimeout(autoT);
        // 한번씩 셋팅되는 타임아웃을 안지우면
        // 여러개가 작동하여 실행쓰나미가 발생함!

        // 2. 일정시간 후 다시 인터발호출하기!
        autoT = setTimeout(autoCall,4000);
        // 4초후 autoCall함수 호출!

    }; ////// clearAuto 함수 /////////


}); ///////////// load //////////////////////