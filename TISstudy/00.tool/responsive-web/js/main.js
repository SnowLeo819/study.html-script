const mainVisualSlider = new Swiper("#mainVisual", {
  autoplay: true,
  speed: 1000,
  effect: "fade",
  loop: true,
  pagination: {
    el: "#mainVisual .pagination",
    type: "bullets",
    clickable: true,
  },
});

const productSlider = new Swiper("#product .list", {
  speed: 600,
  slidesPerView: 1, //화면에 보여지는 갯수
  slidesPerGroup: 1, //묶음
  navigation: {
    prevEl: "#product .prev",
    nextEl: "#product .next",
  },
  scrollbar: {
    el: ".scroll",
    draggable: true,
  },
  breakpoints: {
    // when window width is >= 640px
    640: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    // when window width is >= 980px
    1200: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
  },
});

const newsSlider = new Swiper("#news .contents", {
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 10,
  speed: 600,
  slidesPerView: 1, //화면에 보여지는 갯수
  slidesPerGroup: 1, //묶음
  breakpoints: {
    // when window width is >= 640px
    640: {
      slidesPerView: 2,
      slidesPerGroup: 1,
    },
    // when window width is >= 980px
    1200: {
      slidesPerView: 3,
      slidesPerGroup: 2,
    },
  },
});

//f(x,y) = x+y*3; f(3,5) = 18

const gnbItem = document.querySelector("#gnb > .list > li");
const header = document.querySelector("#header");

// console.log(gnbItem);
gnbItem.addEventListener("mouseenter", function () {
  header.classList.add("open");
});
