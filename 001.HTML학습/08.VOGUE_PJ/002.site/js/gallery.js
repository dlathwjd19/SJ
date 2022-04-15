// 회원가입 갤러리 JS - gallery.js

$(()=>{ //////////////////////// jQB //////////////////////

    console.log("로딩완료!");

    // 스와이퍼 플러그인 API 설명서
    // https://swiperjs.com/swiper-api

    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3, // 한 화면당 슬라이드 개수
        spaceBetween: 30, // 슬라이드 사이간격(px)
        slidesPerGroup: 1, // 슬라이드 묶음 개수(넘기는단위)
        loop: true, // 무한루프(기본값flase)
        // loopFillGroupWithBlank: true, 
        // 한화면 단위지정시 단위보다 그룹이 작을경우 빈칸으로 채움
        pagination: { // 하단블릿설정
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: { // 양쪽이동버튼 설정
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });

}); //////////////////////// jQB //////////////////////////