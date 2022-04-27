Splitting();
<<<<<<< HEAD

const header = $("#header");
const gnbList = $("#gnb .list li");

gnbList.on("mouseenter", function () {
  header.addClass("open");
});
=======
const header = $("#header");
const gnbList = $("#gnb .list > li");
gnbList.on("mouseenter", function () {
  header.addClass("open");
});

>>>>>>> e4642f452d4c2aceb8f0ad95b26504c90e81c26b
gnbList.on("mouseleave", function () {
  header.removeClass("open");
});

<<<<<<< HEAD
// $("#main").fullpage({});

// 구역을 불러오고 나서 스크롤이 끝나면 콜백이 실행됩니다. 매개 변수:
// origin: (Object) 활성화된 구역
// destination: (Object) 목적지 구역.
// direction: (String) 스크롤하는 방향에 따라 up 또는 down

new fullpage("#main", {
  //options here
  autoScrolling: true,
  scrollHorizontally: true,

  afterLoad: function (origin) {
    var loadedSection = this;
    console.log(loadedSection);
    console.log(origin.index);
    //색인 사용
    if (origin.index == 0) {
      gsap.from("#happen .char", {
        opacity: 0,
        x: 100,
        duration: 1,
        ease: "ease",
        stagger: 0.05,
      });
    } else if (origin.index == 1) {
      gsap.from("#business .char", {
        opacity: 0,
        x: 100,
        duration: 1,
        ease: "back",
        stagger: 0.1,
      });
    } else if (origin.index == 2) {
      gsap.from("#portfolio .char", {
        opacity: 0,
        x: 100,
        duration: 1,
        ease: "back",
        stagger: 0.1,
      });
    } else if (origin.index == 3) {
      gsap.from("#community .char", {
        opacity: 0,
        x: 100,
        duration: 1,
        ease: "back",
        stagger: 0.1,
      });
    }
  },
});
=======
const happenTL = gsap.timeline();
happenTL
  .from("#happen  .titleBox h2 .char", { opacity: 0, x: 100, duration: 1, ease: "power3", stagger: 0.05 })
  .from("#happen  .titleBox p .char", { opacity: 0, x: 100, duration: 1, ease: "power3", stagger: 0.05 }, "-=1")
  .from(CSSRulePlugin.getRule("#happen .titleBox strong:after"), { cssRule: { scaleX: 0 }, duration: 0.5 });

const businessTL = gsap.timeline();
businessTL.pause();
businessTL
  .from("#business  .titleBox h2 .char", { opacity: 0, x: 100, duration: 1, ease: "power3", stagger: 0.05 })
  .from("#business  .titleBox p .char", { opacity: 0, x: 100, duration: 1, ease: "power3", stagger: 0.05 }, "-=1")
  .from("#business  .listBox li", { opacity: 0, x: 100, duration: 1, ease: "power3", stagger: 0.1 }, "-=1")
  .from(CSSRulePlugin.getRule("#business .titleBox strong:after"), { cssRule: { scaleX: 0 }, duration: 0.5 });

const portfolioTL = gsap.timeline();
portfolioTL.pause();
portfolioTL
  .from("#portfolio  .titleBox h2 .char", { opacity: 0, x: 100, duration: 1, ease: "power3", stagger: 0.05 })
  .from("#portfolio  .titleBox p .char", { opacity: 0, x: 100, duration: 1, ease: "power3", stagger: 0.05 }, "-=1")
  .from("#portfolio  .listBox", { opacity: 0, x: 100, duration: 1, ease: "power3" }, "-=1")
  .from(CSSRulePlugin.getRule("#portfolio .titleBox strong:after"), { cssRule: { scaleX: 0 }, duration: 0.5 });

const communityTL = gsap.timeline();
communityTL.pause();
communityTL
  .from("#community  .titleBox h2 .char", { opacity: 0, x: 100, duration: 1, ease: "power3", stagger: 0.05 })
  .from("#community  .titleBox p .char", { opacity: 0, x: 100, duration: 1, ease: "power3", stagger: 0.05 }, "-=1")
  .from("#community  .listBox li", { opacity: 0, x: 100, duration: 1, ease: "power3", stagger: 0.1 }, "-=1")
  .from(CSSRulePlugin.getRule("#community .titleBox strong:after"), { cssRule: { scaleX: 0 }, duration: 0.5 });

$("#main").fullpage({
  //scrollBar: true,
  navigation: true,
  navigationTooltips: ["INTRODUCE", "BUSINESS", "PORTFOLIO", "COMMUNITY"],
  showActiveTooltip: true,
  onLeave: function (origin, destination, direction) {
    const leavingSection = this;
    switch (destination.index) {
      case 0:
        happenTL.restart();
        break;
      case 1:
        businessTL.restart();
        break;
      case 2:
        portfolioTL.restart();
        break;
      case 3:
        if (direction === "down") {
          communityTL.restart();
        } else {
          $("#fp-nav").removeClass("last");
        }
        break;
      case 4:
        $("#fp-nav").addClass("last");
        break;
      default:
        console.log("이제 없어요");
    }
    /*
    if (destination.index === 0) {
      happenTL.restart();
    } else if (destination.index === 1) {
      businessTL.restart();
    } else if (destination.index === 2) {
      portfolioTL.restart();
    }
    */
  },
  afterRender: function () {
    //$.fn.fullpage.moveTo(2);
  },
});

const portfolioSlider = new Swiper("#portfolio .mask", {
  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,
  navigation: {
    nextEl: "#portfolio .next",
    prevEl: "#portfolio .prev",
  },
  pagination: {
    el: "#portfolio .pagination",
    clickable: true,
  },
});

$("#fp-nav li:last-child").remove();
>>>>>>> e4642f452d4c2aceb8f0ad95b26504c90e81c26b
