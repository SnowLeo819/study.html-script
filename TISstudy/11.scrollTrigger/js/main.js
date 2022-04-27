gsap.to(".red", {
  x: 800,
  rotation: 180,
  duration: 3,
  scrollTrigger: {
    markers: true,
    trigger: ".red",

    start: "top-=0 center", // 옵션을 2종류 쓸 수 있는데 1번째가 trigger 의 top 좌표, 화면의 bottom 좌표
    end: "bottom+=0 center", // 1번째가 trigger 의 bottom 좌표, 두번째가 화면의 top 좌표
    scrub: 1,
    // pin: true,
    toggleAction: "play pause reverse reset ",
  },
});
gsap.to(".green", {
  x: 1000,
  rotation: 180,
  duration: 3,
  scrollTrigger: ".green",
});
gsap.to(".blue", {
  x: 1000,
  rotation: 180,
  duration: 3,
  scrollTrigger: ".blue",
});
