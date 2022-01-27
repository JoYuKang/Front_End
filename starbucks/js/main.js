const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

// console.log(searchEl)
// console.log(searchInputEl)

searchEl.addEventListener('click', function () {
  searchInputEl.focus();
})

searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
})


searchInputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
})


// _.throttle(함수, 시간 )
const badgeEl = document.querySelector('header .badges');
window.addEventListener('scroll', _.throttle(function () {
  if (window.scrollY > 500) {
    //gsap.to(요소, 지속시간, 옵션)
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    });

  } else {
    //gsap.to(요소, 지속시간, 옵션)
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block  '
    });
  }
}, 300));

const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index) {
  //gsap.to(요소, 지속시간, 옵션)
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7,
    opacity: 1
  });
});

// console.log(fadeEls);

//new Swiper(선택자, 옵션)
var swiper_vertical = new Swiper(".notice-line .swiper-container", {
  direction: "vertical",
  autoplay: true,
  loop: true

});


//new Swiper(선택자, 옵션)
var swiper1 = new Swiper(".promotion .swiper-container", {
  autoplay: {
    delay: 5000
  },
  loop: true,
  slidesPerView: 3,
  spaceBetween: 10,
  centeredSlides: true,
  pagination: {
    el: '.promotion .swiper-pagination', //페이지 번호 요소 선택자
    clickable: true
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }

});

const promotionEl = document.querySelector('.promotion ')

const promotionToggleBtn = document.querySelector('.toggle-promotion')

let isHidePromotion = false;

promotionToggleBtn.addEventListener('click', function () {
  isHidePromotion = !isHidePromotion;
  if (isHidePromotion) {
    // 숨김처리
    promotionEl.classList.add('hide');
  } else { // 공개
    promotionEl.classList.remove('hide');

  }

})
// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObject(selector, delay, size) {
  gsap.to( 
    selector, //선택자 
    random(1.5, 2.5),//애니메이션 동작 시간
    { // 옵션 
    y: size,
    repeat: -1, // -1은 무한반복
    yoyo: true, // 반복되는 부분을 역재생
    ease: Power1.easeInOut,
    delay: random(0, delay)
  })
}
floatingObject('.floating1', 1, 15);

floatingObject('.floating2', .5, 15);

floatingObject('.floating3', 1.5, 20);

// click and modify the underlined values
// TweenMax.to(
//   graph
//   graph, 
//   2.5
//   2.5, { ease: 
//   Power1.
//   easeInOut
//   easeInOut, y: -500 });