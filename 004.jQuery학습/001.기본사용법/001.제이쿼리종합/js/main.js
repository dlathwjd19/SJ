// 제이쿼리 기본 JS - main.js 

$(() => { ////////////jQB ///////////////////

    console.log("로딩완료!");

    /***************************************** 
                1. 대상선정 변수할당    
    *****************************************/
    // 대상1 : 버튼들 - .btns>button
    let btns = $(".btns>button");
    // console.log("버튼개수:",btns.length);

    // 대상2 : 미니언즈 - .mi
    let mi = $(".mi");

    // 대상3 : 빌딩 각 방 - .building li
    let bd = $(".building li");
    // console.log("방수:",bd.length);

    // 대상4 : 메시지 박스 - .msg
    let msg = $(".msg");

    // 삽입이미지 변수 셋팅 //////
    // 좀비 이미지 태그
    let mz1 =
        `<img src="images/mz1.png" alt="좀비1" class="mz">`;
    let mz2 =
        `<img src="images/mz2.png" alt="좀비2" class="mz">`;
    let zom =
        `<img src="images/zom.png" alt="좀비들" class="mz">`;
    // 주사기 이미지
    let inj =
        `<img src="images/inj.png" alt="주사기" class="inj">`;

    /******************************************************* 
                    2. 초기화 셋팅
    *******************************************************/
    // 2-1. 버튼셋팅 : 모든 버튼 숨기고 첫번재만 보이게함
    // btns.hide().first().show();
    // 버튼들.숨겨().첫번째().보여()
    // 중간 테스트를 위한 버튼 보이기 셋팅
    btns.hide().eq(0).show();

    // 2-2. 빌딩숫자셋팅 : 
    // ->  모든 빌딩 li를 순서대로 돌면서
    // 순번 넣기 + 좀비넣기
    // 대상: 빌딩 li -> bd변수
    bd.each((idx, ele) => {
        // console.log(idx);

        // 1. 각 li요소에 글자넣기(순번)
        $(ele).text(idx);

        // 2. 좀비 + 주사기 넣기
        // append(요소) - 선택요소 내부에 맨뒤 추가
        if (idx === 9) $(ele).append(mz1);
        else if (idx === 7) $(ele).append(mz2);
        else if (idx === 1) $(ele).append(zom);
        else if (idx === 2) $(ele).append(inj);

    }); //////////// each ///////////////

    /* 
         [ for문을 사용하지 않고 돌게해주는 제이쿼리 메서드 ]
         >>> each(function(idx,ele){구현부});
         >>> each((idx,ele)=>{구현부});

         - 선택요소를 순서대로 돌면서 구현부를 실행함
         - idx 첫번째 전달변수는 순번이 전달됨(0부터)
         - ele 두번째 전달변수는 요솨신
         (this 키워드와 동일 - 단, 화살표함수가 아닐때)
         - 전달변수는 순서와 개수가 중요함!
         - 이 메서드를 사용하면 for문을 안써도 됨!
    */

    // 2-3. 모든 좀비 숨기기
    $(".mz").hide();
    // 선택요소가 여러개이면 for문을 돌듯이 모두 셋팅됨!

    /********************************************* 
            3. 버튼별 클릭 이벤트 함수 만들기
    *********************************************/


    // 3-1. "들어가기" 버튼 클릭 시작 //////
    tbns.first() // 버튼들.첫번째()
        .click(function () {

            // 1. 클릭된 버튼 자신 없애기
            $(this).slideUp(300);
            // slideUp(시간,이징,함수)
            // -> height값이 0되며 애니메이션
            // 애니메이션 후 display:none됨
            // 반대는 slideDown(시간,이징,함수)

            // 2. 메시지 지우기
            msg.fadeOut(200);
            // faedOut(시간,이징,함수)
            // -> opacity가 0이 되면 애니메이션
            // 애니메이션 후 display:none 됨
            // 반대는 fadeIn(시간,이징,함수)

            // 3. 이동위치정보 : 
            // 이동할 빌딩 li의 위치를 알아내기
            // 이동할 li 타겟 -> bd변수
            let tg = bd.eq(8); // 8번방
            // eq(순번) -> 선택요소들 중 몇 번째 요소를 선택
            // eq는 seqence(순서)라는 단어에서 나온말

            // 화면에서의 top값
            let tgtop = tg.offset().top;
            // 화면에서의 left값
            let tgleft = tg.offset().left;

            console.log(`top:${tgtop} / left:${tgleft}`);

            /* 
                offSet() 메서드:
                - 기준 : 윈도우 화면
                - 요소의 위치나 크기정보를 담고 있음
                offset().top -> 요소의 top값
                offset().left -> 요소의 left값
                _________________________________

                position() 메서드:
                - 기준 : 포지션이 있는 부모박스
                - 요소의 위치나 크기정보를 담고 있음
                position().top -> 요소의 top값
                position().left -> 요소의 left값
            */


        }); // 3-1. "들어가기" 버튼 클릭 끝  //////

    // 3-2. "옆방으로!" 버튼 클릭 시작 //////
    // 3-2. "옆방으로!" 버튼 클릭 끝  //////


}); /////////////// jQB //////////////////