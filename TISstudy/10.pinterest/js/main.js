function showCursorInfo() {
  console.log(e.clientY);
  console.log(e.pageY);
  console.log(e.offsetY);
  console.log(e.screenY);

  $("input[name='clientX']").val(e.clientX);
  $("input[name='clientY']").val(e.clientY);
  $("input[name='pageX']").val(e.pageX);
  $("input[name='pageY']").val(e.pageY);
  $("input[name='offsetX']").val(e.offsetX);
  $("input[name='offsetY']").val(e.offsetY);
  $("input[name='screenX']").val(e.screenX);
  $("input[name='screenY']").val(e.screenY);
}

// 커서 따라다니는 점 만들기
const cursor = $(".cursor");
$(window).on("mousemove", function (e) {
  gsap.to(cursor, { left: e.clientX, top: e.clientY });
});

const itemListUL = $("#works .itemList");
let grid = null;

$.ajax({
  url: "../data/typo.json",
  success: function (res) {
    console.log(res);
    const itemList = res.typoList;
    let output = "";
    $.each(itemList, function (idx, item) {
      // console.log(idx, "==", item);
      output += `
      <li class="item ${item.category}">
        <a href="../images/${item.img}" data-fancybox="${item.category}" data-caption="${item.title}">
          <div class="img">
            <img src="../images/${item.img}" alt="" />
          </div>
          <div class="info">
            <h2>${item.title}</h2>
            <p class="desc">${item.desc}</p>
            <p class="point">
              ${item.point}
            </p>
          </div>
        </a>
      </li>`;
    });
    itemListUL.html(output);
    Fancybox.bind("[data-fancybox]");

    // 이미지 로드 확인해주는 라이브러리
    $(".itemList").imagesLoaded(function () {
      // images have loaded

      // 그리드 정렬되게 만드는 라이브러리 적용
      grid = $(".itemList").isotope({
        // options
        itemSelector: ".item",
        layoutMode: "masonry",
        // sort 적용을 위해 미리 작성 필요함
        getSortData: {
          point: ".point parseFloat",
          title: ".title",
        },
      });
    });
  },
});

itemListUL.on("mouseenter", "li", function () {
  gsap.killTweensOf(".cursor");
  $(".cursor .txt").text("view");
  gsap.to(".cursor", {
    width: 80,
    height: 80,
    backgroundColor: "#f00",
    ease: "elastic",
    duration: 1,
  });
});
itemListUL.on("mouseleave", "li", function () {
  gsap.killTweensOf(".cursor");
  $(".cursor .txt").text("");
  gsap.to(".cursor", {
    width: 10,
    height: 10,
    backgroundColor: "#fff",
    ease: "power4",
    duration: 0.2,
  });
});
$("#filter li").on("mouseenter", function () {
  gsap.killTweensOf(".cursor");
  $(".cursor .txt").text("click");
  gsap.to(".cursor", {
    width: 80,
    height: 80,
    backgroundColor: "#f00",
    ease: "elastic",
    duration: 1,
  });
});
$("#filter li").on("mouseleave", function () {
  gsap.killTweensOf(".cursor");
  $(".cursor .txt").text("");
  gsap.to(".cursor", {
    width: 10,
    height: 10,
    backgroundColor: "#fff",
    ease: "power4",
    duration: 0.2,
  });
});
$("#filter li").on("click", function () {
  if ($(this).hasClass("on")) return;
  $(this).addClass("on").siblings("li").removeClass("on");
  const _filter = $(this).data("filter");
  grid.isotope({
    filter: `.${_filter}`,
    sortBy: ["point", "title"],
    sortAscending: false, //기본값 true (내림차순 정렬)
  });
});
