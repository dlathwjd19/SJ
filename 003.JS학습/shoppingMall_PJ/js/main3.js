// 쇼핑몰 배너 JS - 페이드효과 //
// 로드구역 ////////////
window.addEventListener("load", () => {

    console.log("로딩완료!");

    /************************************ 
        [ 슬라이드 이동 기능정의 ]
        1. 이벤트 종류: 클릭
        2. 이벤트 대상: 이동버튼(.abtn)
        3. 변경 대상: 슬라이드 박스(#slide)
        4. 기능흐름: 

        -> 클래스 on 넣기 전에 초기화 기본!

        (1) 오른쪽버튼 클릭시 다음슬라이드에
            class="on" 넣기

        (2) 왼쪽버튼 클릭시 이전슬라이드에
            class="on" 넣기
            
        
        5. 추가기능: 슬라이드 위치표시 블릿
        - 블릿대상 : .indic li
        - 변경내용 : 슬라이드 순번과 같은 순번의
        li에 클래스 "on"주기(나머진 빼기-초기화)

    ************************************/


    // 이벤트 대상 : .abtn
    let abtn = document.querySelectorAll(".abtn");
    // 변경 대상 : 슬라이드 -> #slide
    let slide = document.querySelector("#slide");
    // 변경 대상: 슬라이드 li요소들 -> #slide li
    let sli = slide.querySelectorAll("li");
    // 변경 대상: 블릿 -> .indic li
    let indic = document.querySelectorAll(".indic li");
    // console.log("블릿개수:",indic.length);

    // 슬라이드 번호 변수
    let sno = 0; // 첫 번호는 0

    // 슬라이드 한계값을 위한 개수
    const lmt = sli.length;
    console.log("슬라이드 개수:", lmt);

    // 광클금지 상태값
    let prot = 0; // 1-금지, 0-허용

    /*************************************** 
        함수명: goSlide
        기능: 슬라이드를 왼쪽/오른쪽으로 이동함
    ***************************************/
    const goSlide = (dir, gb) => {
        // dir - 이동방향(1:오른쪽,0왼쪽)
        // gb - 구분코드(인터발 호출일때만 값이 전달됨)


        // console.log("잠금상태:",prot);

        // 0. 광클금지 ////////
        if (prot) return; // 돌아가!
        prot = 1; // 잠금!
        setTimeout(() => prot = 0, 600);
        // 0.6초 후 잠금해제! /////

        // 1. 전달값 및 호출확인
        console.log("이동!", dir, gb);

        // 1.2. 버튼클릭시 gb전달 값이 없는 경우
        // !gb 는 undefined인 경우 false임 -> true처리
        if (!gb) clearAuto(); // 인터발함수 지우기!


        // 2. 방향분기 /////////////

        // 2-1. 오른쪽버튼 /////////
        if (dir) { // dir === 1 이면 true

            // (1) 슬라이드 li 순번 증가하기
            sno++;
            if (sno === lmt) sno = 0;
            // 마지막번호 넘을시 처음으로!

        } ///////// if ///////////

        // 2-2. 왼쪽 버튼
        else {

            // (1) 슬라이드 li 순번 증가하기
            sno--;
            if (sno === -1) sno = lmt - 1;
            // 첫번호 이전일때 마지막ㅂ건호로!
            //   마지막 번호는 개수-1

        } /////////// else ////////////

        // (2) 슬라이드 li 초기화!
        for (let x of sli) x.classList.remove("on");

        // (3)해당 li에 클래스 on넣기
        sli[sno].classList.add("on");

        // 초기화!(class="on"지우기)
        for (let x of indic) x.classList.remove("on");

        // 해당순번에 class="on" 넣기
        indic[sno].classList.add("on");

    }; /////////////// goSide 함수 //////////////////


    // 오른쪽 버튼 클릭시 
    abtn[1].onclick = () => goSlide(1);

    // 왼쪽 버튼 클릭시 
    abtn[0].onclick = () => goSlide(0);

    /****************************************** 
        [ 인터발 자동호출의 조건 ]
        1. 일정시간 간격으로 슬라이드가 넘어감
        2. 사용자가 버튼조작을 할 경우 자동 멈춤
        3. 일정시간 버튼조작이 없으면 다시 자동
    ******************************************/

    // 인터발용변수
    let autoI;

    ////////////////////
    // 인터발 호출함수 //
    ////////////////////
    const autoCall = () => {
        // 인터발 자동호출!
        autoI = setInterval(() => goSlide(1, 1), 2000);
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
        autoT = setTimeout(autoCall, 4000);
        // 4초후 autoCall함수 호출!

    }; ////// clearAuto 함수 /////////




}); ///////////// load //////////////////////