// 회원가입 갤러리 JS - gallery.js

$(()=>{ //////////////////////// jQB //////////////////////

    console.log("로딩완료!");

    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3, // 한 화면당 슬라이드 개수
        spaceBetween: 30, // 슬라이드 사이간격(px)
        slidesPerGroup: 3, // 슬라이드 묶음 개수(넘기는단위)
        loop: true, // 무한루프(기본값flase)
        loopFillGroupWithBlank: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });

}); //////////////////////// jQB //////////////////////////