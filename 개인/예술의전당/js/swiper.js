// 예술의 전당 페이지 JS -main.js
// 첫 페이지 슬라이드 JS -main.js


$(()=>{ ////// jQB //////
	
	console.log("로딩완료!!");

	var swiper = new Swiper(".mySwiper", {
        slidesPerView: 4, // 한 화면당 슬라이드 개수
    	spaceBetween: 30, // 슬라이드 사이간격(px)

        slidesPerGroup: 1, // 슬라이드 묶음 개수(넘기는단위)
        loop: true, // 무한루프(기본값false)
        // loopFillGroupWithBlank: true, 한화면 단위지정시 작을경우 빈칸으로
        // pagination: { 하단블릿설정
        //   el: ".swiper-pagination",
        //   clickable: true,
        // },
        navigation: { // 양쪽이동버튼설정
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
		autoplay: { // 자동넘김
			delay: 2000, // 시간간격
			disableOnInteraction: false,
			// 상호작용 없애기(false면 안건드리면 다시 자동넘김)
		},
      });


    
}); ////// jQB //////