Splitting();

//typed 라이브러리
const typed = new Typed(".typing .txt", {
  /**
   * @property {array} strings strings to be typed
   * @property {string} stringsElement ID of element containing string children
   */
  //출력하고자 하는 문구
  strings: [
    "<strong>더 좋은 사람</strong>이 될 필요는 없어,<br> <strong>너 있는 그대로</strong> 살면 돼 - 라미란",
    "눈이 부시도록 살아, <strong>너의 오늘을</strong><br>- 심규선 album '소로' 中",
    "what doesn't <strong>kill</strong> you<br>makes you <strong>stronger</strong>",
  ],
  typeSpeed: 50,
  startDelay: 1000,
  backSpeed: 20,
  backDelay: 1000,
  loop: true,
  // shuffle: true, → 각 문구의 출력 순서
});

const itemListUL = $("#portfolio .pfList");
$.ajax({
  url: "../data/typo.json",
  success: function (res) {
    const itemList = res.itemList;
    // console.log(res);
    let output = "";
    // console.log(itemList);
    $.each(itemList, function (idx, item) {
      // console.log(idx, "==", item);
      output += `
      <li class="item">
          <div class="imgBox">
            <img src="../images/imgs/${item.img}" alt="" />
          </div>
          <div class="txtBox">
            <h3 class="title">${item.title}</h3>
            <p class="desc">${item.desc}</p>
            <a href="${item.link}">link :<br>${item.link}</a>
            <p class="tag">${item.tag}</p>
          </div>
      </li>`;
    });
    itemListUL.html(output);
    // 이미지 로드 확인해주는 라이브러리
    $(".pfList").imagesLoaded(function () {
      // 그리드 정렬되게 만드는 라이브러리 적용
      grid = $(".pfList").isotope({
        itemSelector: ".item",
        layoutMode: "masonry",
      });
    });
  },
});

gsap.defaults({
  duration: 1,
  ease: "back",
});

ScrollTrigger.defaults({
  markers: true,
});

const introTL = gsap.timeline({
  scrollTrigger: {
    trigger: "#intro",
    start: "top top",
    end: "bottom top",
    onUpdate: function (self) {
      //console.log(self);
      gsap.set("#intro", { filter: `blur(${self.progress * 10}px)` });
    },
  },
});

const profileTL = gsap.timeline({
  scrollTrigger: {
    trigger: "#profile",
    start: "top +=100 top",
    end: "bottom top",
    pin: true,
    scrub: 1,
  },
});
profileTL
  .from("#profile .title .char", {
    opacity: 0,
    x: "+=100",
    stagger: {
      each: 0.1,
    },
  })
  .from(
    CSSRulePlugin.getRule("#profile h2:after"),
    {
      cssRule: {
        scaleX: 0,
      },
      ease: "linear",
      duration: 1.5,
    },
    "-=1.5"
  )
  .from("#profile .name .char", {
    opacity: 0,
    x: "+=100",
    stagger: {
      each: 0.1,
    },
  })
  .from(
    "#profile .like .char",
    {
      opacity: 0,
      x: "+=100",
      stagger: {
        each: 0.1,
      },
    },
    "-=2"
  )
  .from(
    "#profile .favorite .char",
    {
      opacity: 0,
      x: "+=100",
      stagger: {
        each: 0.1,
      },
    },
    "3"
  )
  .from("#profile .call .char", {
    opacity: 0,
    x: "+=100",
    stagger: {
      each: 0.1,
    },
  })
  .from("#profile .addr .char", {
    opacity: 0,
    x: "+=100",
    stagger: {
      each: 0.1,
    },
  })
  .from("#profile .position .char", {
    opacity: 0,
    x: "+=100",
    stagger: {
      each: 0.1,
    },
  });

const mySkill = {
  markup: $("#skill ul li").eq(0).find(".num").data("percent"),
  _css: $("#skill ul li").eq(1).find(".num").data("percent"),
  js: $("#skill ul li").eq(2).find(".num").data("percent"),
  node: $("#skill ul li").eq(3).find(".num").data("percent"),
  java: $("#skill ul li").eq(4).find(".num").data("percent"),
  spring: $("#skill ul li").eq(5).find(".num").data("percent"),
};

const skillTL = gsap.timeline({
  scrollTrigger: {
    trigger: "#skill",
    start: "top +=100 top",
    end: "bottom top",
    pin: true,
    scrub: 1,
  },
});
skillTL
  .from("#skill h2 .char", {
    opacity: 0,
    x: "+=100",
    stagger: {
      each: 0.1,
    },
  })
  .from(
    CSSRulePlugin.getRule("#skill h2:after"),
    {
      cssRule: {
        scaleX: 0,
      },
      ease: "linear",
      duration: 1.5,
    },
    "-=1.5"
  )
  .from(
    "#skill ul li",
    {
      y: "-=100",
      opacity: 0,
      stagger: {
        each: 0.1,
      },
    },
    "circleStart"
  )
  .to(
    "#skill ul li:nth-child(1) circle",
    {
      strokeDashoffset: -570 * 0.7,
      ease: "linear",
      duration: 3,
    },
    "circleStart+=1"
  )
  .to(
    "#skill ul li:nth-child(2) circle",
    {
      strokeDashoffset: -570 * 0.75,
      ease: "linear",
      duration: 3,
    },
    "circleStart+=1"
  )
  .to(
    "#skill ul li:nth-child(3) circle",
    {
      strokeDashoffset: -570 * 0.8,
      ease: "linear",
      duration: 3,
    },
    "circleStart+=1"
  )
  .to(
    "#skill ul li:nth-child(4) circle",
    {
      strokeDashoffset: -570 * 0.95,
      ease: "linear",
      duration: 3,
    },
    "circleStart+=1"
  )
  .to(
    "#skill ul li:nth-child(5) circle",
    {
      strokeDashoffset: -570 * 0,
      ease: "linear",
      duration: 3,
    },
    "circleStart+=1"
  )
  .to(
    "#skill ul li:nth-child(6) circle",
    {
      strokeDashoffset: -570 * 0,
      ease: "linear",
      duration: 3,
    },
    "circleStart+=1"
  )
  .from(
    mySkill,
    {
      markup: 0,
      _css: 0,
      js: 0,
      node: 0,
      java: 0,
      spring: 0,
      duration: 3,
      ease: "linear",
      onUpdate: function () {
        $("#skill li").eq(0).find(".num").text(Math.floor(mySkill.markup));
        $("#skill li").eq(1).find(".num").text(Math.floor(mySkill._css));
        $("#skill li").eq(2).find(".num").text(Math.floor(mySkill.js));
        $("#skill li").eq(3).find(".num").text(Math.floor(mySkill.node));
        $("#skill li").eq(4).find(".num").text(Math.floor(mySkill.java));
        $("#skill li").eq(5).find(".num").text(Math.floor(mySkill.spring));
      },
    },
    "circleStart+=1"
  );

//portfolio 내용 data 폴더에서 불러오는 기능 넣기

const portfolioTL = gsap.timeline({
  scrollTrigger: {
    trigger: "#portfolio",
    start: "top +=100 top",
    end: "bottom top",
    pin: true,
    scrub: 1,
  },
});
portfolioTL
  .from("#portfolio h2 .char", {
    opacity: 0,
    x: "+=100",
    stagger: {
      each: 0.1,
    },
  })
  .from(
    CSSRulePlugin.getRule("#portfolio h2:after"),
    {
      cssRule: {
        scaleX: 0,
      },
      ease: "linear",
      duration: 1.5,
    },
    "-=1.5"
  )
  .from("#portfolio .pfList", {
    opacity: 0,
    y: "+=100",
    stagger: {
      each: 0.1,
    },
  });
