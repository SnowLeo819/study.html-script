<? include("../include/header.html")?>
<main id="main">
  <div id="mainVisual">
    <ul class="swiper-wrapper">
      <li class="visual01 swiper-slide"></li>
      <li class="visual02 swiper-slide"></li>
      <li class="visual03 swiper-slide"></li>
    </ul>
    <div class="slogan">
      <p class="main" data-splitting>Return to forest</p>
      <p class="sub" data-splitting>숲으로 돌아가는 종이, 네오포레</p>
      <a href="#">브랜드 스토리 자세히 보기<span class="material-icons"> east </span></a>
      <div class="pagination"></div>
    </div>
  </div>
  <!-- main Visual end -->
  <article id="product">
    <div class="titleBox">
      <h2>
        네오포레의 <br />
        다양한 제품을 만나보세요.
      </h2>
      <p>무림은 최고의 기술로 생활의 가치를 더하고 있습니다.</p>
    </div>
    <div class="list">
      <!-- ul>li*6>a>img[src="../images/main/slide_img_$"] -->
      <ul class="swiper-wrapper">
        <li class="swiper-slide">
          <img src="../images/main/slide_img_1.png" alt="" />
          <a href="#" class="link">네오포레 CUP <span class="material-icons"> east </span></a>
        </li>
        <li class="swiper-slide">
          <img src="../images/main/slide_img_2.png" alt="" />
          <a href="#" class="link">네오포레 STRAW <span class="material-icons"> east </span></a>
        </li>
        <li class="swiper-slide">
          <img src="../images/main/slide_img_3.png" alt="" />
          <a href="#" class="link">네오포레 완충재 <span class="material-icons"> east </span></a>
        </li>
        <li class="swiper-slide">
          <img src="../images/main/slide_img_4.png" alt="" />
          <a href="#" class="link">네오포레 FLEX <span class="material-icons"> east </span></a>
        </li>
        <li class="swiper-slide">
          <img src="../images/main/slide_img_5.png" alt="" />
          <a href="#" class="link">펄프 몰드 <span class="material-icons"> east </span></a>
        </li>
        <li class="swiper-slide">
          <img src="../images/main/slide_img_6.png" alt="" />
          <a href="#" class="link">바이오플라스틱<span class="material-icons"> east </span></a>
        </li>
      </ul>
    </div>
    <div class="btns">
      <button class="btn prev">
        <span class="material-icons"> navigate_before </span>
      </button>
      <button class="btn next">
        <span class="material-icons"> navigate_next </span>
      </button>
    </div>
  </article>
  <article id="news">
    <div class="contents">
      <div class="titleBox">
        <h2>
          네오포레의 <br />
          다양한 제품을 만나보세요.
        </h2>
        <p>무림은 최고의 기술로 생활의 가치를 더하고 있습니다.</p>
      </div>
      <ul class="list">
        <li>
          <a href="">
            <div class="img" style="background-image: url('../images/main/card1.jpg')"></div>
            <div class="txtBox">
              <h3>탈 플라스틱 종이컵 '네오포레' 개발 됐다고 합니다 장문 테스트중이에요오오오오옹</h3>
              <p class="date">2021.11.04</p>
              <p class="text">무림의 친환경 경영 및 플라스틱을 대체하는 네오포레 시리즈</p>
            </div>
          </a>
        </li>
        <li>
          <a href="">
            <div class="img" style="background-image: url('../images/main/card2.jpg')"></div>
            <div class="txtBox">
              <h3>'무림, 한솔만 A등급', 제지업계, ESG경영 '양극화' 심화</h3>
              <p class="date">2021.10.29</p>
              <p class="text">'2021년 ESG평가'서 무림, 한솔 A등급, 중소형 제지사 C등급(출처: 머니투데이)</p>
            </div>
          </a>
        </li>
        <li>
          <a href="">
            <div class="img" style="background-image: url('../images/main/card3.jpg')"></div>
            <div class="txtBox">
              <h3>친환경 가치 담은 '종이 빨대' 찾는 기업 늘었다</h3>
              <p class="date">2021.10.08</p>
              <p class="text">무림, 종이 빨대 부착용 비닐도 친환경 종이로 개발 (출처: 아시아경제)</p>
            </div>
          </a>
        </li>
      </ul>
      <div class="btns center">
        <a href="" class="btn large transition">네오포레 소식 더 보기</a>
      </div>
    </div>
  </article>
  <!-- news end -->
  <div id="cs">
    <div class="contents">
      <ul>
        <li>
          <a href="">
            <div class="txtBox">
              <strong>온라인 문의</strong>
              <p>궁금하신 사항을 문의할 수 있습니다.</p>
            </div>
            <div class="btn">
              <span>문의하기<span class="material-icons"> east </span></span>
            </div>
          </a>
        </li>
        <li>
          <a href="">
            <div>
              <strong>담당자 정보</strong>
              <p>업무 담당자를 확인하실 수 있습니다.</p>
            </div>
            <div class="btn">
              <span>문의하기</span>
              <span class="material-icons"> east </span>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
  <!-- cs end -->
</main>
<!-- main end -->

<aside class="popup">
  <div class="contents">
    <img src="../images/popup.png" alt="">
  </div>
  <div class="btns">
    <!-- <button class="oneday">오늘 하루 이 창을 열지 않기</button> -->
      <label> 
      <label class="checkbox"><input type="checkbox" name="" id="onedayCheck" /><span class="label">오늘 하루 이 창을 열지 않기</span></label>
    </label>
    <button class="oneday">닫기</button>
  </div>
</aside>

<? include("../include/footer.html")?>

