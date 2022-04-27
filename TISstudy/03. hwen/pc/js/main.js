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

// subVisual 에서 hover 된 이름의 도시 이미지 띄우는 부분
const visualImg = document.querySelectorAll("#subVisual .visualList > li");
//document.querySelectorAll(찾는거) // 배열처럼 생긴 nodeList를 리턴한다.
const visualName = document.querySelectorAll("#subVisual .namelist > li");
console.log(visualImg.length);
console.log(visualName.length);

for (let i = 0; i < visualName.length; i++) {
  visualName[i].addEventListener("mouseenter", function () {
    visualImg[i + 1].classList.add("view");
  });
  visualName[i].addEventListener("mouseleave", function () {
    visualImg[i + 1].classList.remove("view");
  });
}
