Splitting();

const mainVisualSlider = new Swiper("#mainVisual", {
  autoplay: true,
  speed: 800,
  effect: "fade",
  loop: true,
  allowTouchMove: false,
  pagination: {
    el: ".pagination",
    type: "bullets",
    clickable: true,
  },
});

const productSlider = new Swiper("#product .list", {
  speed: 600,
  slidesPerView: 3, //한번에 보이는 갯수
  slidesPerGroup: 3, //한번에 넘기는 묶음
  navigation: {
    prevEl: " #product .prev",
    nextEl: " #product .next",
  },
});

/* gsap기본형태 gsap.to("대상위치", {적용할 효과들}) 
gsap.to()
gsap.from()
gsap.fromTo() 
*/
// 메인비주얼 글자 움직이는 구문
gsap.from("#mainVisual .slogan .main .char", {
  opacity: 0,
  x: 150,
  skewX: -45,
  ease: "power4",
  duration: 1,
  stagger: 0.1,
});
gsap.from("#mainVisual .slogan .sub .char", {
  opacity: 0,
  x: 150,
  ease: "power4",
  duration: 1,
  delay: 1,
  stagger: 0.1,
});

const gnbList = $("#gnb .list > li");
const faqList = $(".faqBox ul li");

gnbList.on("mouseenter", function () {
  $(this).find(".depth02").stop().slideDown(300);
  // console.log("mouseenter");
});
gnbList.on("mouseleave", function () {
  $(this).find(".depth02").stop().slideUp(300);
});

faqList.on("click", function () {
  $(this).toggleClass("on");
  $(this).siblings("li").removeClass("on");

  $(this).find("dd").stop().slideToggle();
  $(this).siblings("li").find("dd").stop().slideUp();
});

const header = $("#header");
$(window).on("scroll", function () {
  const st = $(window).scrollTop();
  // console.log(st);
  if (st > 0) {
    if (!header.hasClass("scroll")) {
      header.addClass("scroll");
    }
  } else {
    if (header.hasClass("scroll")) {
      header.removeClass("scroll");
    }
  }
});

const onedayCheck = $("#onedayCheck");
const btnOneday = $(".popup .oneday");
const popup = $(".popup");

let isChecked = onedayCheck.is(":checked");
console.log(isChecked);

onedayCheck.on("change", function () {
  console.log($(this).is(":checked"));
  isChecked = $(this).is(":checked");
  console.log(isChecked);
});

btnOneday.on("click", function () {
  gsap.to(popup, { top: -600, duration: 0.7, ease: "back.in" });
  if (isChecked) {
    Cookies.set("oneday", "one", { expires: 1 });
  }
});

if (Cookies.get("oneday") === "one") {
  popup.hide();
} else {
  popup.show();
}
