// 예술의 전당 페이지 JS -main.js


$(()=>{ ////// jQB //////
	
	console.log("로딩완료!!");

	var swiper = new Swiper(".mySwiper", {
        slidesPerView: 4, // 한 화면당 슬라이드 개수
    	spaceBetween: 30, // 슬라이드 사이간격(px)
		
        slidesPerGroup: 3,
        loop: true,
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


    
}); ////// jQB //////