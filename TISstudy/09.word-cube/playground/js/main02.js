// console.log(600 / Math.tan(360 / 12 / 2));
// console.log(Math.tan(90));
// console.log(600 / Math.tan((Math.PI * 2) / 12 / 2));
// console.log(600 / Math.tan(Math.PI / 12));
// console.log(Math.round(600 / Math.tan(Math.PI / 12)));

const w = 1200;
const total = $(".carousel .face").length;
const angle = 360 / total;
const tz = Math.round(w / 2 / Math.tan(Math.PI / total));
let tr = 0;

$(".carousel").css({ transform: `translateZ(${tz - 500}px)` });

// $(".carousel .face").each(function (idx, item) {});
$.each($(".carousel .face"), function (idx, item) {
  //console.log(item); // => DOM, css() 는 jQuery 메서드이기 때문에 변환 해줘야 함
  $(item).css({
    transform: `rotateY(${angle * idx + 180}deg) translateZ(${tz}px)`,
  });
});

// gsap.to(".carousel", { rotateY: angle });

$(window).on("mousewheel", function (e) {
  console.log(e.originalEvent.deltaY);
  const wheel = e.originalEvent.deltaY;
  if (wheel === 100) {
    tr += angle;
  } else {
    tr -= angle;
  }
  gsap.to(".carousel", { rotateY: tr });
});

//move prev
$(".pagination .prev").on("click", function () {
  tr += angle;
  gsap.to(".carousel", { rotateY: tr });
});
$(".pagination .dbPrev").on("click", function () {
  tr += 3 * angle;
  gsap.to(".carousel", { rotateY: tr });
});

//move next
$(".pagination .next").on("click", function () {
  tr -= angle;
  gsap.to(".carousel", { rotateY: tr });
});
$(".pagination .dbNext").on("click", function () {
  tr -= 3 * angle;
  gsap.to(".carousel", { rotateY: tr });
});
