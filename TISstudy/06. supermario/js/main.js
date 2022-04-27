const marioListUL = $("#main #marioList");

let marioSlider = null;

function loadJson(jsonFile) {
  $.ajax({
    url: jsonFile,
    success: function (res) {
      const marioList = res.items;
      let output = "";
      // console.log(marioList);
      $.each(marioList, function (idx, item) {
        output += `
                <li class="swiper-slide cards" style="${item.bg}">
                  <div class="img">
                    <img src="${item.img}">
                  </div>
                  <div class="info">
                    <h2 class="title">${item.title}</h2>
                    <p class="desc">${item.desc}</p>
                    <a href="${item.link}" target="${item.target}" class="link">MORE</a>
                  </div>
                </li>
                `;
      });

      marioListUL.html(output);
      if (marioSlider !== null) {
        marioSlider.destroy();
      }

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
      gsap.to("#marioList li .img", {
        x: -100,
        y: -50,
        duration: Math.random() + 0.5,
        onComplete: function () {},
      });
      //css 속성
    },
  });
}

// function moveMario(moveItem) {
//   gsap.to("#loop", {
//     x: 50,
//     y: 100,
//     duration: Math.random() + 0.5,
//     onComplete: moveMario,
//     onCompleteParams: [moveItem],
//   });
// }

// moveMario();

const gnbList = $("#gnb li");
gnbList.on("click", function (e) {
  e.preventDefault();
  const jsonFile = $(this).data("json");
  console.log(jsonFile);
  if ($(this).hasClass("selected")) return;
  $(this).addClass("selected").siblings("li").removeClass("selected");
  loadJson(jsonFile);
});

loadJson("../data/mario.json");
