// 옷소매 갤러리 JS - main.js

$(()=>{ ////////////////////// jQB ////////////////////////

    console.log("로딩완료!");

    // 변경대상: .gbx -> 갤러리 부모박스
    let gbx = $(".gbx");
    
    // 양쪽 이동버튼 클릭시 ///////
    // 대상: .abtn
    $(".abtn").click(function(){

        console.log("오른쪽이냐?",$(this).is(".rb"));

        // 1. 오른쪽 버튼 클릭시
        // 선택자 .is("rb") -> 클래스가 "rb"면 true
        if($(this).is(".rb")){
            // 오른쪽 이동은 맨 앞 div요소를 맨뒤로 이동!
            // 대상: .gbx -> gbx변수
            gbx.append(gbx.find("div").first());
            // append(첫번째div)

        } ///////// if /////////
        // 2. 왼쪽버튼 클릭시 ///
        else{ 
            // 왼쪽이동은 맨뒤 div를 맨 앞으로 이동
            // 대상: .gbx -> gbx변수
            gbx.prepend(gbx.find("div").last());
            // prepend(맨뒤div)
        }//////// else ////////

    }); //////////// click //////////////

});////////////////////// jQB /////////////////////////////