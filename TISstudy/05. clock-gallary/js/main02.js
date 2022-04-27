const marioListUL = $("#main #marioList");
let marioSlider = null;
function loadJson(jsonFile) {
  $.ajax({
    url: jsonFile,
    success: function (res) {
      console.log(res.items);
      const marioList = res.clock;
      let output = "";
      $.each(marioList, function (idx, item) {
        output += `
          <li class="swiper-slide">
            <div class="img">
              <img src="${item.img}">
            </div>
            <div class="info">
              <h2 class="title" data-splitting>${item.title}</h2>
              <p class="category" data-splitting>${item.category}</p>
              <p class="desc" data-splitting>${item.desc}</p>
              <p class="link" data-splitting>CHF ${item.link}</p>
            </div>
          </li>
        `;
      });
      marioListUL.html(output);
      if (marioSlider !== null) {
        marioSlider.destroy();
      }
      setTimeout(function () {
        gsap.from("#marioList li", {
          opacity: 0,
          y: -300,
          ease: "bounce",
          duration: 1,
          stagger: {
            from: "center",
            amount: 1,
          },
        });
      }, 0);
      //loop 옵션을 쓰면 몇개의 li들이 더 생성된다.
      marioSlider = new Swiper("#main", {
        slidesPerView: "auto",
        loop: true,
        effect: "coverflow",
        centeredSlides: true,
        coverflowEffect: {
          rotate: 0,
          slideShadows: false,
          depth: 1000,
          stretch: 0,
        },
        mousewheel: true,
        pagination: {
          el: "#main .pagination",
          clickable: true,
        },
      });
    },
  });
}

loadJson("../data/bigbang.json");
const gnbList = $("#gnb li");
gnbList.on("click", function (e) {
  e.preventDefault();
  const jsonFile = $(this).data("json");
  if ($(this).hasClass("selected")) return;
  $(this).addClass("selected").siblings("li").removeClass("selected");
  loadJson(jsonFile);
});
