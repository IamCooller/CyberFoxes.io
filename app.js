const myFullpage = new fullpage("#fullpage", {
  //Навигация
  menu: "#Mymenu",
  lockAnchors: false,
  anchors: ["main", "about", "portfolio", "contacts"],
  navigation: true,
  navigationPosition: "left",
  showActiveTooltip: true,
  slidesNavigation: true,
  slidesNavPosition: "bottom",

  //Скроллинг
  css3: true,
  scrollingSpeed: 700,
  autoScrolling: true,
  fitToSection: true,
  fitToSectionDelay: 1000,
  scrollBar: false,
  easing: "easeInOutCubic",
  easingcss3: "ease",
  loopBottom: true,
  loopTop: false,
  loopHorizontal: true,
  continuousVertical: false,
  continuousHorizontal: false,
  scrollHorizontally: false,
  interlockedSlides: false,
  dragAndMove: false,
  offsetSections: false,
  resetSliders: false,
  fadingEffect: false,
  normalScrollElements: "#element1, .element2",
  scrollOverflow: false,
  scrollOverflowReset: false,
  scrollOverflowOptions: null,
  touchSensitivity: 15,
  bigSectionsDestination: null,

  //Доступ
  keyboardScrolling: true,
  animateAnchor: true,
  recordHistory: true,

  //Дизайн
  controlArrows: true,
  verticalCentered: false,
  sectionsColor: ["#fff", "#fff"],
  paddingTop: "3em",
  paddingBottom: "10px",
  fixedElements: "#header, .footer",
  responsiveWidth: 0,
  responsiveHeight: 0,
  responsiveSlides: false,
  parallax: false,
  parallaxOptions: { type: "reveal", percentage: 62, property: "translate" },
  cards: false,
  cardsOptions: { perspective: 100, fadeContent: true, fadeBackground: true },

  //Настроить селекторы
  sectionSelector: ".section",
  slideSelector: ".slide",

  lazyLoading: true,

  //события
  onLeave: function (origin, destination, direction) {},
  afterLoad: function (origin, destination, direction) {},
  afterRender: function () {},
  afterResize: function (width, height) {},
  afterReBuild: function () {},
  afterResponsive: function (isResponsive) {},
  afterSlideLoad: function (section, origin, destination, direction) {},
  onSlideLeave: function (section, origin, destination, direction) {},
});
var slideNow = 1;
var slideCount = $("#slidewrapper").children().length;
var slideInterval = 3000;
var navBtnId = 0;
var translateWidth = 0;

$(document).ready(function () {
  var switchInterval = setInterval(nextSlide, slideInterval);

  $("#viewport").hover(
    function () {
      clearInterval(switchInterval);
    },
    function () {
   /*    switchInterval = setInterval(nextSlide, slideInterval); */
    }
  );

  $("#next-btn").click(function () {
    nextSlide();
  });

  $("#prev-btn").click(function () {
    prevSlide();
  });

  $(".slide-nav-btn").click(function () {
    navBtnId = $(this).index();

    if (navBtnId + 1 != slideNow) {
      translateWidth = -$("#viewport").width() * navBtnId;
      $("#slidewrapper").css({
        transform: "translate(" + translateWidth + "px, 0)",
        "-webkit-transform": "translate(" + translateWidth + "px, 0)",
        "-ms-transform": "translate(" + translateWidth + "px, 0)",
      });
      slideNow = navBtnId + 1;
    }
  });
});

function nextSlide() {
  if (slideNow == slideCount || slideNow <= 0 || slideNow > slideCount) {
    $("#slidewrapper").css("transform", "translate(0, 0)");
    slideNow = 1;
  } else {
    translateWidth = -$("#viewport").width() * slideNow;
    $("#slidewrapper").css({
      transform: "translate(" + translateWidth + "px, 0)",
      "-webkit-transform": "translate(" + translateWidth + "px, 0)",
      "-ms-transform": "translate(" + translateWidth + "px, 0)",
    });
    slideNow++;
  }
}

function prevSlide() {
  if (slideNow == 1 || slideNow <= 0 || slideNow > slideCount) {
    translateWidth = -$("#viewport").width() * (slideCount - 1);
    $("#slidewrapper").css({
      transform: "translate(" + translateWidth + "px, 0)",
      "-webkit-transform": "translate(" + translateWidth + "px, 0)",
      "-ms-transform": "translate(" + translateWidth + "px, 0)",
    });
    slideNow = slideCount;
  } else {
    translateWidth = -$("#viewport").width() * (slideNow - 2);
    $("#slidewrapper").css({
      transform: "translate(" + translateWidth + "px, 0)",
      "-webkit-transform": "translate(" + translateWidth + "px, 0)",
      "-ms-transform": "translate(" + translateWidth + "px, 0)",
    });
    slideNow--;
  }
}
