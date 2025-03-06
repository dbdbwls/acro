// 문서준비
$(function () {


  const banner_list = new Swiper(".banner_list", {
    autoplay: {
      delay: 3000, // 슬라이드가 머무르는 시간, 5000=5초
      disableOnInteraction: false, // 스와이프 후 자동 재생이 비활성화 되지 않음
    },
    speed: 1000,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction", // 버튼 종류 설정 'bullets' | 'fraction' | 'progressbar'
      clickable: true, // 버튼 클릭 여부
    },
  });

  //2차메뉴
  $(".depth2").hide();
  $(".gnb > li").hover(function () {
    $(this).find(".depth2").stop().fadeToggle();
  });



  //impo
  const impo_list = new Swiper(".impo_list", {
    autoplay: {
      delay: 3000, // 슬라이드가 머무르는 시간, 5000=5초
      disableOnInteraction: false, // 스와이프 후 자동 재생이 비활성화 되지 않음
    },
    speed: 1000,
    slidesPerView: 1,
    centeredSlides: true,
    loop: true,
    navigation: {
      nextEl: '.next_btn', // 다음 버튼
      prevEl: '.prev_btn', // 이전 버튼
    },
    breakpoints: {
      768: {
        // 가로해상도가 768px 이상
        slidesPerView: 2, // 한 슬라이드에 보여줄 갯수
      },
      1200: {
        // 가로해상도가 1200px 이상
        slidesPerView: 3,
      },
    },
  });








  //design
  const design_txt_list = new Swiper(".design_txt_list", {
    effect: "fade", // 페이드 효과
    fadeEffect: {
      crossFade: true,
    },
  });

  const design_img_list = new Swiper(".design_img_list", {
    autoplay: {
      delay: 3000, // 슬라이드가 머무르는 시간, 5000=5초
      disableOnInteraction: false, // 스와이프 후 자동 재생이 비활성화 되지 않음
    },
    speed: 1000,
    pagination: {
      el: ".swiper-pagination",
      type: "bullets", // 버튼 종류 설정 'bullets' | 'fraction' | 'progressbar'
      clickable: true, // 버튼 클릭 여부
    },
  });

  design_img_list.controller.control = design_txt_list
  design_txt_list.controller.control = design_img_list



  //gallery
  $(".gallery ul li").hover(function () {
    $(this).addClass("active");
    $(this).siblings().removeClass("active");
  });




  //검색
  $(".btn_more").click(function () {
    $(".search_wrap").fadeIn();
  });
  $(".search_close").click(function () {
    $(".search_wrap").fadeOut();
  });


  //모바일 메뉴
  $(".ham").click(function () {
    $(".mgnb_wrap,.dim").fadeIn();
    $(".mgnb_box").animate({
      "right": "0"
    })
  });
  $(".mgnb_close").click(function () {
    $(".mgnb_wrap,.dim").fadeOut();
    $(".mgnb_box").animate({
      "right": "-100%"
    })
  });

});