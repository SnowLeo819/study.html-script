const itemListUL = $("#main #itemList");
const lnbUL = $("#main #lnb");
let itemSlider = null;
let itemTweener = null;
let total = 0;
const zAmount = 5000;
const wheelStep = zAmount / 10;
let _z = 0;
function loadJson(jsonFile) {
  $.ajax({
    url: jsonFile,
    success: function (res) {
      // console.log(res);
      const itemList = res.items;
      let output = "";
      let lnbOutput = "";
      total = itemList.length;
      _z = 0;
      $.each(itemList, function (idx, item) {
        lnbOutput += `<li>${item.title}</li>`;
        output += `
          <li style="background:${item.bg}; transform:translateZ(${-zAmount * idx}px);z-index:${total - idx}">
            <div class="info">
              <h2 class="title" data-splitting>${item.title}</h2>
              <p class="desc" data-splitting>${item.desc}</p>
              <a href="${item.link}" target="${item.target}">MORE</a>
            </div>
            <div class="img">
              <img src="${item.img}">
            </div>
          </li>
        `;
      });
      itemListUL.html(output);
      lnbUL.html(lnbOutput);
      $("#lnb li").eq(0).addClass("on");
    },
    error: function (err) {
      location.href = "error.html";
      return;
    },
  });
}

loadJson("../data/mario.json");

const gnbList = $("#gnb li");
gnbList.on("click", function (e) {
  e.preventDefault();
  const jsonFile = $(this).data("json");
  if ($(this).hasClass("selected")) return;
  $(this).addClass("selected").siblings("li").removeClass("selected");
  loadJson(jsonFile);
});

//event delegation 이벤트 위임
let oldIndex = 0;
const lnbList = $("#lnb li");
$("body").on("click", "#lnb li", function () {
  // console.log(e);
  if ($(this).hasClass("on")) return;
  $(this).addClass("on").siblings("li").removeClass("on");
  _z = zAmount * $(this).index();
  const _duration = Math.min(1.5, Math.abs(($(this).index() - oldIndex) * 0.5));
  $("#itemList li").each(function (idx, item) {
    gsap.to(item, { z: _z - zAmount * idx, duration: _duration });
  });
  oldIndex = $(this).index();
});

$(window).on("mousewheel", function (e) {
  // console.log(e);
  console.log(_z);
  console.log(total);
  const wheel = e.originalEvent.deltaY;
  if (wheel > 0) {
    if (_z >= zAmount * (total - 1)) {
      _z = zAmount * (total - 1);
      return;
    }
    _z += wheelStep;
  } else {
    // console.log("위로");
    if (_z <= 0) {
      _z = 0;
      return;
    }
    _z -= wheelStep;
  }
  $("#itemList li").each(function (idx, item) {
    gsap.to(item, { z: _z - zAmount * idx });
  });
  // console.log(Math.floor(_z / zAmount));
  const lnbSelected = Math.floor(_z / zAmount);
  $("#lnb li").eq(lnbSelected).addClass("on").siblings("li").removeClass("on");
});
