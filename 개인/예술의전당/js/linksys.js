// 예술의 전당 페이지 JS -linksys.js


$(()=>{ ////// jQB //////

    console.log("로딩완료!");

    var swiper = new Swiper(".mySwiper", {
        direction: "vertical",
        slidesPerView: 1,
        spaceBetween: 30,
        mousewheel: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
    
}) ////// jQB //////