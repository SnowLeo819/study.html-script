const medialSlider = new Swiper("#media", {
  autoplay: true,
  speed: 400,
  slidesPerView: 1, //한번에 보이는 갯수
  loop: true,
  navigation: {
    prevEl: "#media .prev",
    nextEl: "#media .next",
  },
  pagination: {
    el: "#media .pagination",
    type: "progressbar",
  },
});

const header = document.querySelector("#header");
const lists = document.querySelectorAll("#gnb .list > li");

console.log(logo, lists);

for (let i = 0; i < lists.length; i++) {
  lists[i].addEventListener("mouseenter", function () {
    header.classList.add("on");
  });
  lists[i].addEventListener("mouseleave", function () {
    header.classList.remove("on");
  });
}

const proList = document.querySelectorAll("#product .proVisual .proList li");
const imgList = document.querySelectorAll("#product .proVisual .imgList li");
console.log(proList, "===", imgList);

for (let i = 0; i < imgList.length; i++) {
  proList[i].addEventListener("mouseenter", function () {
    imgList[i].classList.add("view");
  });
  proList[i].addEventListener("mouseleave", function () {
    imgList[i].classList.remove("view");
  });
}
