const subVisualSlider = new Swiper("#subVisual", {
  // autoplay: true,
  speed: 600,
  effect: "fade",
  loop: true,
});

const socialSlider = new Swiper("#social .inner", {
  autoplay: true,
  speed: 600,
  slidesPerView: 4, //한번에 보이는 갯수
  loop: true,
  watchSlidesProgress: true,
  navigation: {
    prevEl: "#social .prev",
    nextEl: "#social .next",
  },
  pagination: {
    el: "#social .pagination",
    type: "progressbar",
  },
});

$("#subVisual .list li").click(function () {
  var index = $(this).index();
  subVisualSlider.slideTo(index + 2);
});

// $("#subVisual01").hover(function () {
//   subVisualSlider.slideTo(2, 600);
// });

// const productSlider = new Swiper("#product .list", {
//   speed: 600,
//   slidesPerView: 3, //한번에 보이는 갯수
//   slidesPerGroup: 3, //한번에 넘기는 묶음
//   navigation: {
//     prevEl: " #product .prev",
//     nextEl: " #product .next",
//   },
// });
