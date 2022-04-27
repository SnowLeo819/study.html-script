Splitting();

// gsap 효과 기본값 설정
gsap.defaults({
  ease: "back",
  duration: 1,
});

const headerTL = gsap.timeline({ delay: 1 });
headerTL
  .from(".tsa #introHeader", {
    y: -100,
    ease: "power3",
    duration: 1,
  })
  .from(".tsa .iconScroll", {
    opacity: 0,
    y: "+=100",
    ease: "power3",
    duration: 1,
  });

const section01TL = gsap.timeline({
  scrollTrigger: {
    trigger: ".section01",
    // markers: true,
    start: "top top",
    end: "bottom-=300 top",
    scrub: 1,
    pin: true,
  },
});
section01TL
  .from(".section01 .txt01 .char", {
    opacity: 0,
    x: "+=100",
    stagger: {
      each: 0.1,
    },
  })
  .from(CSSRulePlugin.getRule(".tsa .section01 .txt01:after"), {
    cssRule: {
      scaleX: 0,
    },
    ease: "linear",
  })
  .from(".section01 .txt02 .char", {
    opacity: 0,
    x: "+=100",
    stagger: {
      each: 0.1,
    },
  })
  .from(".section01 .txt0301 .char", {
    opacity: 0,
    scale: 3,
    stagger: {
      each: 0.1,
    },
  })
  .from(".section01 .txt0302 .char", {
    opacity: 0,
    scale: 3,
    stagger: {
      each: 0.1,
    },
  })
  .from(".section01 .txt0303 .char", {
    opacity: 0,
    scale: 3,
    stagger: {
      each: 0.1,
    },
  })
  .from(".section01 .txt04", {
    opacity: 0,
    scale: 3,
  });

const section02TL = gsap.timeline({
  scrollTrigger: {
    trigger: ".section02",
    // markers: true,
    start: "top top",
    end: "bottom top",
    pin: true,
    scrub: 1,
  },
});
section02TL
  .from("section02 .title .char", {
    x: "+=100",
    opacity: 0,
    stagger: {
      each: 0.1,
    },
  })
  .from(".section02 .mainTxt01 .char", {
    x: "+=100",
    opacity: 0,
    stagger: {
      each: 0.1,
    },
  })
  .from(".section02 .mainTxt02 .char", {
    x: "-=100",
    opacity: 0,
    stagger: {
      each: 0.1,
    },
  })
  .from(".section02 .mainTxt03 .char", {
    x: "+=100",
    opacity: 0,
    stagger: {
      each: 0.1,
    },
  })
  .from(".section02 .circleList li", {
    scale: 0,
    opacity: 0,
    ease: "elastic",
    stagger: {
      each: 0.1,
    },
  })
  .from(".section02 .cduBox", {
    scale: 3,
    opacity: 0,
  });

const section03TL = gsap.timeline({
  scrollTrigger: {
    trigger: ".section03",
    // markers: true,
    start: "top top",
    end: "bottom top",
    pin: true,
    scrub: 1,
  },
});
section03TL
  .from(".section03 .title", {
    x: "+=100",
    opacity: 0,
  })
  .from(".section03 .title .char", {
    x: "+=100",
    opacity: 0,
    stagger: {
      each: 0.1,
    },
  })
  .from(".section03 .mainTxt .char", {
    scale: 0,
    opacity: 0,
    stagger: {
      each: 0.1,
    },
  })
  .from(".section03 .list li", {
    x: "+=100",
    opacity: 0,
    stagger: {
      each: 0.1,
    },
  })
  .from(".section03 .redBox", {
    y: "+=100",
    opacity: 0,
  })
  .from(".section03 .airplane", {
    x: "-=100",
    y: "+=100",
    opacity: 0,
  });

//section 04
const section04TL = gsap.timeline({
  scrollTrigger: {
    trigger: ".section04",
    // markers: true,
    start: "top top",
    end: "bottom top",
    pin: true,
    scrub: 1,
  },
});
section04TL
  .from(".section04 .title", {
    x: "+=100",
    opacity: 0,
  })
  .from(".section04 .title .char", {
    x: "+=100",
    opacity: 0,
    stagger: {
      each: 0.1,
    },
  })
  .from(".section04 .mainTxt .char", {
    x: "+=100",
    opacity: 0,
    stagger: {
      each: 0.1,
    },
  })
  .from(".section04 .list li:nth-child(1) .imgBox", {
    opacity: 0,
  })
  .from(".section04 .list li:nth-child(1) .txtBox", {
    x: "+=100",
    opacity: 0,
  })
  .from(".section04 .list li:nth-child(2) .imgBox", {
    opacity: 0,
  })
  .from(".section04 .list li:nth-child(2) .txtBox", {
    x: "-=100",
    opacity: 0,
  })
  .from(".section04 .list li:nth-child(3) .imgBox", {
    opacity: 0,
  })
  .from(".section04 .list li:nth-child(3) .txtBox", {
    x: "-=100",
    opacity: 0,
  })
  .from(".section04 .list li:nth-child(4) .imgBox", {
    opacity: 0,
  })
  .from(".section04 .list li:nth-child(4) .txtBox", {
    x: "-=100",
    opacity: 0,
  });

//section 05
const section05TL = gsap.timeline({
  scrollTrigger: {
    trigger: ".section05",
    start: "top top",
    end: "bottom top",
    pin: true,
    scrub: 1,
  },
});
section05TL
  .from(".section05 .title", {
    x: "+=100",
    opacity: 0,
  })
  .from(".section05 .title .char", {
    x: "+=100",
    opacity: 0,
    stagger: {
      each: 0.1,
    },
  })
  .from(".section05 .mainTxt .char", {
    x: "+=100",
    opacity: 0,
    stagger: {
      each: 0.1,
    },
  })
  .from(".section05 .list li:nth-child(1)", {
    y: "+=100",
    opacity: 0,
  })
  .from(".section05 .list li:nth-child(2)", {
    y: "-=100",
    opacity: 0,
  })
  .from(".section05 .list li:nth-child(3)", {
    y: "+=100",
    opacity: 0,
  })
  .from(".section05 .list li:nth-child(4)", {
    y: "-=100",
    opacity: 0,
  })
  .from(".section05 .list li:nth-child(5)", {
    y: "+=100",
    opacity: 0,
  })
  .from(CSSRulePlugin.getRule(".tsa .section05 li:after"), {
    cssRule: {
      scale: 0,
    },
    duration: 1,
    ease: "power3",
  });
//section 05 end

//section 06
const section06TL = gsap.timeline({
  scrollTrigger: {
    trigger: ".section06",
    start: "top top",
    end: "bottom top",
    pin: true,
    scrub: 1,
  },
});
section06TL
  .from(".section06 .mainTxt .char", {
    scale: 0,
    opacity: 0,
    stagger: {
      each: 0.1,
    },
  })
  .from(".section06 .subTxt .char", {
    x: "+=100",
    opacity: 0,
    stagger: {
      each: 0.1,
    },
  })
  .from(".section06 .txtDash .char", {
    y: "+=100",
    opacity: 0,
    stagger: {
      each: 0.1,
    },
  })
  .from(".section06 .img", {
    opacity: 0,
    scale: 0,
  })
  .from(".section06 .shortcut .char", {
    x: "-=100",
    opacity: 0,
    stagger: {
      each: 0.1,
    },
  })
  .from(".section06 .btns a", {
    y: "+=100",
    opacity: 0,
    stagger: {
      each: 0.5,
    },
  });

//section 06 end
