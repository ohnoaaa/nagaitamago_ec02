//一文字ずつでてくる
$('.updown').on('inview', function () {
  // .sxrollが表示されたら
  $(this).addClass('active'); //処理を記述
});

$('.fadeInText').on('inview', function () {
  // .sxrollが表示されたら
  $(this).addClass('upText'); //処理を記述
});
$('.fadeInText-Y').on('inview', function () {
  // .sxrollが表示されたら
  $(this).addClass('upText-Y'); //処理を記述
});

$('.fadeUpTrigger').on('inview', function () {
  // .sxrollが表示されたら
  $(this).addClass('fadeUp');
  //処理を記述
});
$('.fadeLeftTrigger').on('inview', function () {
  // .sxrollが表示されたら
  $(this).addClass('fadeLeft');
  //処理を記述
});
$('.fadeRightTrigger').on('inview', function () {
  // .sxrollが表示されたら
  $(this).addClass('fadeRight');
  //処理を記述
});
$('.fadeInTrigger').on('inview', function () {
  // .sxrollが表示されたら
  $(this).addClass('fadeIn');
  //処理を記述
});
//スライド
// $(function () {
//   $(".slider").slick({
//     autoplay: true,
//     dots: false,
//     arrows: false,
//     fade: true,
//     speed: 2000,
//     autoplaySpeed: 3000,
//   });
// });
//ズームしながらフェード
document.addEventListener('DOMContentLoaded', function () {
  let slides = document.querySelectorAll('.slide');
  let currentSlide = 0;

  function showNextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
  }

  setInterval(showNextSlide, 5000); // 5秒ごとにスライドを切り替える
});

//headerの色を変える
function updateHeaderColorBasedOnSection() {
  if (window.innerWidth < 768) {
    return;
  }

  const header = document.querySelector('.header_o');
  const sections = document.querySelectorAll('section');
  let found = false;

  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();

    if (rect.top <= 0 && rect.bottom >= 0) {
      if (section.classList.contains('dark')) {
        header.style.color = '#fff';
        header.querySelectorAll('a').forEach((element) => {
          element.style.color = '#fff';
          element.querySelectorAll('svg').forEach((svg) => {
            svg.style.fill = '#fff';
          });
          element.addEventListener('mouseover', () => {
            element.style.color = '#EA5514';
            element.querySelectorAll('svg').forEach((svg) => {
              svg.style.fill = '#EA5514';
            });
          });
          element.addEventListener('mouseout', () => {
            element.style.color = '#fff';
            element.querySelectorAll('svg').forEach((svg) => {
              svg.style.fill = '#fff';
            });
          });
        });
      } else {
        header.style.color = '#231815';
        header.querySelectorAll('a').forEach((element) => {
          element.style.color = '#231815';
          element.querySelectorAll('svg').forEach((svg) => {
            svg.style.fill = '#231815';
          });
          element.addEventListener('mouseover', () => {
            element.style.color = '#EA5514';
            element.querySelectorAll('svg').forEach((svg) => {
              svg.style.fill = '#EA5514';
            });
          });
          element.addEventListener('mouseout', () => {
            element.style.color = '#231815';
            element.querySelectorAll('svg').forEach((svg) => {
              svg.style.fill = '#231815';
            });
          });
        });
      }
      found = true;
    }
  });

  // スクロール位置に該当するセクションがない場合のデフォルト設定
  if (!found) {
    header.style.color = '#231815';
    header.querySelectorAll('a').forEach((element) => {
      element.style.color = '#231815';
      element.querySelectorAll('svg').forEach((svg) => {
        svg.style.fill = '#231815';
      });
      element.addEventListener('mouseover', () => {
        element.style.color = '#EA5514';
        element.querySelectorAll('svg').forEach((svg) => {
          svg.style.fill = '#EA5514';
        });
      });
      element.addEventListener('mouseout', () => {
        element.style.color = '#231815';
        element.querySelectorAll('svg').forEach((svg) => {
          svg.style.fill = '#231815';
        });
      });
    });
  }
}

function toggleActiveClassOnScroll() {
  // if (window.innerWidth < 768) {
  // }

  const header = document.querySelector('.header_o');
  if (window.scrollY >= 800) {
    header.classList.add('active');
  } else {
    header.classList.remove('active');
  }
  return;
}

function handleResize() {
  updateHeaderColorBasedOnSection();
  toggleActiveClassOnScroll();
}

window.addEventListener('load', () => {
  handleResize();
});
window.addEventListener('scroll', () => {
  handleResize();
});
window.addEventListener('resize', handleResize);

//商品詳細ページの商品画像
$(function () {
  $('.item_slider').slick({
    autoplay: false,
    arrows: false,
    fade: true,
    asNavFor: '.thumbnail',
  });
  $('.thumbnail').slick({
    autoplay: false,
    slidesToShow: 5,
    asNavFor: '.item_slider',
    focusOnSelect: true,
  });
});

//商品ボタンのプラスマイナス
// document.addEventListener('DOMContentLoaded', function() {
//   const valueElement = document.querySelector('.value');
//   const incrementButton = document.querySelector('.increment');
//   const decrementButton = document.querySelector('.decrement');

//   incrementButton.addEventListener('click', function() {
//       let currentValue = parseInt(valueElement.textContent, 10);
//       valueElement.textContent = currentValue + 1;
//   });

//   decrementButton.addEventListener('click', function() {
//       let currentValue = parseInt(valueElement.textContent, 10);
//       valueElement.textContent = currentValue - 1;
//   });
// });
document.addEventListener('DOMContentLoaded', function () {
  const valueElement = document.querySelector('.value');
  const incrementButton = document.querySelector('.increment');
  const decrementButton = document.querySelector('.decrement');

  // 要素が存在する場合にのみ処理を実行する
  if (valueElement && incrementButton && decrementButton) {
    incrementButton.addEventListener('click', function () {
      let currentValue = parseInt(valueElement.textContent, 10);
      valueElement.textContent = currentValue + 1;
    });

    decrementButton.addEventListener('click', function () {
      let currentValue = parseInt(valueElement.textContent, 10);
      valueElement.textContent = currentValue - 1;
    });
  } else {
    console.log('Counter elements are not found on this page.');
  }
});

//アコーディオンをクリックした時の動作
$('.title').on('click', function () {
  //タイトル要素をクリックしたら
  var findElm = $(this).next('.box'); //直後のアコーディオンを行うエリアを取得し
  $(findElm).slideToggle(); //アコーディオンの上下動作

  if ($(this).hasClass('close')) {
    //タイトル要素にクラス名closeがあれば
    $(this).removeClass('close'); //クラス名を除去し
  } else {
    //それ以外は
    $(this).addClass('close'); //クラス名closeを付与
  }
});

//ページが読み込まれた際にopenクラスをつけ、openがついていたら開く動作※不必要なら下記全て削除
$(window).on('load', function () {
  // $('.accordion-area li:first-of-type section').addClass('open'); //accordion-areaのはじめのliにあるsectionにopenクラスを追加
  $('.open').each(function (index, element) {
    //openクラスを取得
    var Title = $(element).children('.title'); //openクラスの子要素のtitleクラスを取得
    $(Title).addClass('close'); //タイトルにクラス名closeを付与し
    var Box = $(element).children('.box'); //openクラスの子要素boxクラスを取得
    $(Box).slideDown(500); //アコーディオンを開く
  });
});

//ハンバーガーメニュ
$('.burger-btn').on('click', function () {
  //「burger-btn」をクリックすると
  $('.burger-btn').toggleClass('close'); //closeというclassを追加/削除。
  // $(".nav-header-menu").fadeToggle(500); //0.5秒かけてフェードイン/フェードアウト。
  // $(".nav-header-menu").slideToggle(500); //0.5秒かけてフェードイン/フェードアウト。
  $('.nav_container').toggleClass('active'); //0.5秒かけてフェードイン/フェードアウト。
  $('body').toggleClass('noscroll');
});
$('.nav a[href]').on('click', function (event) {
  //リンクがクリックされた時に、
  $('.burger-btn').trigger('click'); //trigger("click")を実行
});

const featuresSwiper = new Swiper('.featuresSwiper', {
  loop: false,
  // slidesPerView: 1,
  spaceBetween: 10,
  loopAdditionalSlides: 1,

  scrollbar: {
    el: '.swiper-scrollbar',
    hide: false,
    draggable: true,
  },
  breakpoints: {
    769: {
      spaceBetween: 20,
      slidesPerView: 3,
      scrollbar: {
        hide: true,
      },
    },
  },
});
