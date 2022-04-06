// 쇼핑몰 배너 JS //
// 로드구역 ////////////
window.addEventListener("load", () => {

    console.log("로딩완료!");

    /************************************ 
        [ 슬라이드 이동 기능정의 ]
        1. 이벤트 종류: 클릭
        2. 이벤트 대상: 이동버튼(.abtn)
        3. 변경 대상: 슬라이드 박스(#slide)
        4. 기능흐름: 

        (1) 오른쪽버튼 클릭시 다음슬라이드가
            나타나도록 슬라이드박스의 left값을
            -100%로 이동시킨다!
        -> 이때 바깥에 나가있는 첫번째 슬라이드 li를 잘라서
        맨뒤로 보낸다! 동시에 lfet값을 0으로 변겅함!

        (2) 왼쪽버튼 클릭시
            먼저 맨뒤의 슬라이드 li를 맨앞으로 이동시킨다!
            이떄 left -100%로 변경한다!
            이후 left값을 0으로 변경하여 애니메이션함
        
        5. 추가기능: 슬라이드 위치표시 블릿
        - 블릿대상 : .indic li
        - 변경내용 : 슬라이드 순번과 같은 순번의
        li에 클래스 "on"주기(나머진 빼기-초기화)

    ************************************/


    // 이벤트 대상 : .abtn
    let abtn = document.querySelectorAll(".abtn");
    // 변경대상 : #slide
    let slide = document.querySelector("#slide");

    /*************************************** 
        함수명: goSlide
        기능: 슬라이드를 왼쪽/오른쪽으로 이동함
    ***************************************/
    const goSlide = dir => { // dir - 이동방향(1:오른쪽,0왼쪽)


        // 1. 전달값 및 호출확인
        console.log("이동!", dir);

        // 2. 방향분기 /////////////
        // 2-1. 오른쪽버튼
        if (dir) { // dir === 1 이면 true

            // (1) 슬라이드박스의 left값을 -100%로 이동
            slide.style.left = "-100%";
            slide.style.transition = ".6s ease-out";

            // 슬라이드 이동 후 (2),(3) 실행함!
            // 일정시간 후 한 번 실행하는 타이밍함수는? setTimeout
            setTimeout(() => {
                // (2) 첫번째 슬라이드 li를 잘라서 맨뒤로 보낸다!
                slide.appendChild(
                    slide.querySelectorAll("li")[0]);
                // appendChild(요소) - 선택요소 맨뒤이동

                // (3) 동시에 left값을 0으로 변경함!
                slide.style.left = "0";
                slide.style.transition = "none";
                // 트랜지션 없어야 애니메이션 안보임!


            }, 600); /// 타임아웃 ///




        } ///////// if ///////////
        // 2-2. 왼쪽 버튼
        else {

        } /////////// else ////////////

    }; /////////////// goSide 함수 //////////////////

    // 오른쪽 버튼 클릭시 
    abtn[1].onclick = () => goSlide(1);

    // 왼쪽 버튼 클릭시 
    abtn[0].onclick = () => goSlide(0);



}); ///////////// load //////////////////////