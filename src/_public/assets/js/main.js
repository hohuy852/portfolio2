$(document).ready(function () {
  // anime({
  //   targets: '#Capa_1 g path',
  //   strokeDashoffset: [anime.setDashoffset, 0],
  //   easing: 'easeInOutSine',
  //   duration: 1500,
  //   delay: function (el, i) { return i * 250 },
  //   direction: 'alternate',
  //   loop: true
  // });

});


const reviewsCarouselOptions = {
  freeMode: true,
  loop: true,
  allowTouchMove: true,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
  slidesPerView: 9,
  spaceBetween: 30,
  speed: 5000
};
const reviewsCarousel = new Swiper('.skill-container', reviewsCarouselOptions);

// const clientSliderConfig = {
//   freeMode: true,
//   loop: true,
//   allowTouchMove: true,
  
//   autoplay: {
//     delay: 0,
//     disableOnInteraction: false,
//   },
//   slidesPerView: 9,
//   spaceBetween: 30,
//   speed: 5000
// };
// const clientSlider = new Swiper('.client-container', clientSliderConfig);

//Timeline
function qs(selector, all = false) {
  return all
    ? document.querySelectorAll(selector)
    : document.querySelector(selector);
}

const sections = qs(".section", true);
const timeline = qs(".timeline");
const line = qs(".line");
line.style.bottom = `calc(100% - 20px)`;
let prevScrollY = window.scrollY;
let up, down;
let full = false;
let set = 0;
const targetY = window.innerHeight * 0.8;

function scrollHandler(e) {
  const { scrollY } = window;
  up = scrollY < prevScrollY;
  down = !up;
  const timelineRect = timeline.getBoundingClientRect();
  const lineRect = line.getBoundingClientRect(); 

  const dist = targetY - timelineRect.top;

  if (down && !full) {
    set = Math.max(set, dist);
    line.style.bottom = `calc(100% - ${set}px)`;
  }

  if (dist > timeline.offsetHeight + 50 && !full) {
    full = true;
    line.style.bottom = `-50px`;
  }

  sections.forEach((item) => {
    // console.log(item);
    const rect = item.getBoundingClientRect(); //     console.log(rect);

    if (rect.top + item.offsetHeight / 5 < targetY) {
      item.classList.add("show-me");
    }
  }); // console.log(up, down);

  prevScrollY = window.scrollY;
}

scrollHandler();
line.style.display = "block";
window.addEventListener("scroll", scrollHandler);
