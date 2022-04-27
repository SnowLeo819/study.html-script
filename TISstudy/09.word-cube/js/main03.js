let cubeTotal = 0;
const cubeBox = $("#main #cubeBox");
const paginationUL = $(".pagination ul");
let random = 0;
const autoBtn = $(".btns button");
const cube = `
<div class="scene">
  <div class="cube">
    <div class="face front">F</div>
    <div class="face back">B</div>
    <div class="face top">T</div>
    <div class="face bottom">BT</div>
    <div class="face left">L</div>
    <div class="face right">R</div>
  </div>
</div> `;

const famousList = [
  "Envy and wrath shorten life",
  "Don't give up easily even if you failed",
  "Don't beat yourself up",
  "I don't want a perfect life, I want a happy life",
  "The harder you work, the more likely you can reach the goal",
  "Only I can change my life, no one can do it for me",
  "Your success is up to your efforts",
  "When in doubt, choose change",
  "It is not length of life, But depth of life",
];

cubeTotal = 60;
function makeCube() {
  let output = "";
  for (let i = 0; i < cubeTotal; i++) {
    output += cube;
  }
  cubeBox.html(output);
}

const rotationArray = [
  { tx: 0, ty: 0 },
  { tx: 0, ty: -90 },
  { tx: 0, ty: -180 },
  { tx: 0, ty: 90 },
  { tx: -90, ty: 0 },
  { tx: 90, ty: 0 },
];

function showTxt(selected) {
  $("#cubeBox .scene").show();
  for (let i = 0; i < cubeTotal; i++) {
    // switch(){}
    if (random === 0) {
      $("#cubeBox .scene")
        .eq(i)
        .find(".front")
        .text(famousList[selected].charAt(i));
    } else if (random === 1) {
      $("#cubeBox .scene")
        .eq(i)
        .find(".right")
        .text(famousList[selected].charAt(i));
    } else if (random === 2) {
      $("#cubeBox .scene")
        .eq(i)
        .find(".back")
        .text(famousList[selected].charAt(i));
    } else if (random === 3) {
      $("#cubeBox .scene")
        .eq(i)
        .find(".left")
        .text(famousList[selected].charAt(i));
    } else if (random === 4) {
      $("#cubeBox .scene")
        .eq(i)
        .find(".top")
        .text(famousList[selected].charAt(i));
    } else if (random === 5) {
      $("#cubeBox .scene")
        .eq(i)
        .find(".bottom")
        .text(famousList[selected].charAt(i));
    }
    if (i >= famousList[selected].length) {
      $("#cubeBox .scene").eq(i).hide();
    }
  }
}

function makePaginationItem() {
  const total = famousList.length;
  let output = "";
  for (let i = 0; i < total; i++) {
    if (i === 0) {
      output += `<li class="on">${i + 1}</li>`;
    } else {
      output += `<li>${i + 1}</li>`;
    }
  }
  paginationUL.html(output);
}

let oldRandom = random;
function clickPaginationItem() {
  paginationUL.on("click", "li", function () {
    console.log($(this).index());
    if ($(this).hasClass("on")) return;
    $(this).addClass("on").siblings("li").removeClass("on");
    showEffect($(this).index());
  });
}

autoBtn.on("click", function () {
  $(this).toggleClass("active").siblings("button").toggleClass("active");
  if ($(".btns .auto").hasClass("active")) {
    interval = setInterval(autoPlay, 3000);
  } else if ($(".btns .pause").hasClass("active")) {
    clearInterval(interval);
    console.log("반복을 중지합니다.");
  }
});

function showEffect(idx) {
  random = Math.floor(Math.random() * 6);
  if (random === oldRandom) {
    random = (random + 1) % 6;
  }

  /** paginationUL.find("li").eq(i).addClass("on").siblings("li").removeClass("on");
   * 자동 재생 시 페이지 위치 표시기능이 동작하는데
   * 버튼 클릭으로 넘어갈 경우엔 동작하지 않음 ;;;
   */

  // console.log("random===", random);
  showTxt(idx);
  gsap.to("#cubeBox .scene .cube", {
    rotateX: rotationArray[random].tx,
    rotateY: rotationArray[random].ty,
    z: -40,
    ease: "back.inOut",
    duration: 0.6,
    stagger: {
      from: "random",
      // each: 0.1,
      amount: 1,
    },
  });
  oldRandom = random;
}

// pagination 에 on 붙이기...

let i = 1;
function autoPlay() {
  console.log(i + 1 + "번 문장입니다");
  if (i >= famousList.length - 1) {
    showEffect(i);
    i = 0;
    return;
  } else {
    showEffect(i);
    i++;
  }
}

makeCube();
showTxt(0);
makePaginationItem();
clickPaginationItem();

// gsap.to("#cubeBox .scene .cube", {
//   rotateY: -90,
//   rotateX: 0,
//   ease: "back.inOut",
//   duration: 0.6,
//   stagger: {
//     from: "random",
//     // each: 0.1,
//     amount: 1,
//   },
// });
