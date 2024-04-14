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


// TWEENMAX
var bulbContainer = document.getElementById('bulb-container');
var leaf = document.getElementById('leaf');
var bulbHead = document.getElementById('bulb-head');
var bulbThreadTop = document.getElementById('bulb-thread-top');
var bulbThreadMiddle = document.getElementById('bulb-thread-middle');
var bulbThreadBottom = document.getElementById('bulb-thread-bottom');

//Hob
var path1 = document.getElementById('path1');
var path2 = document.getElementById('path2');
var path3 = document.getElementById('path3');
var path4 = document.getElementById('path4');
var computer = document.getElementById('computer');
var ball = document.getElementById('ball');
var note1 = document.getElementById('note1');
var note2 = document.getElementById('note2');
var ps = document.getElementById('console');
var headphone = document.getElementById('headphone');
var ai = document.getElementById('ai');
var item = document.getElementsByClassName('cls-1');



var bulbGlowLines = [];

for (var i = 0; i < 9; i++) {
  bulbGlowLines.push(document.getElementById('glow-line' + i));
};


TweenMax.set(bulbGlowLines, {
  drawSVG: '100% 100%',
  attr: { stroke: '#fff' }
})
TweenMax.set(leaf, {
  transformOrigin: '50% 110%',
  scale: 0
})
TweenMax.set([bulbHead, bulbThreadTop, bulbThreadMiddle, bulbThreadBottom], {
  drawSVG: '0% 0%'
})

var bulbTl = new TimelineMax({ repeat: 0, repeatDelay: 2 });


bulbTl.set(bulbGlowLines, {
  drawSVG: '100% 100%'
})
  .to(bulbThreadBottom, 1, {
    drawSVG: '100% 0%'
  }, '-=0.5')
  .to(bulbThreadMiddle, 1, {
    drawSVG: '100% 0%'
  }, '-=1')
  .to(bulbThreadTop, 1, {
    drawSVG: '100% 0%'
  }, '-=1')
  .to(bulbHead, 1.25, {
    drawSVG: '100% 0%',
    ease: Power1.easeInOut
  }, '-=1')
  .to(leaf, 0.6, {
    scale: 0.7,
    delay: 0.3,
    ease: SlowMo.ease
  })
  .fromTo(bulbContainer, 0.9, {
    rotation: -9
  }, {
    rotation: 0,
    immediateRender: false,
    ease: Elastic.easeOut
  })

  .to(bulbGlowLines, 0.5, {
    drawSVG: '0% 100%'
  }, '-=1')
  .to(bulbGlowLines, 0.8, {
    drawSVG: '100% 0%',
    alpha: 1
  }, '-=0.8')
  .to([leaf, bulbHead, bulbThreadTop, bulbThreadMiddle, bulbThreadBottom], 1, {
    alpha: 1,
    delay: 1
  })

var hobTl = new TimelineMax({ repeat: 0, repeatDelay: 2 });

hobTl.from(path1, {
  opacity: 0,
  x: -100
})
.from(path2, {
  opacity: 0,
  y: -100
})
.from(path3, {
  opacity: 0,
  x: 100
})
.from(path4, {
  opacity: 0,
  y: 100
})
.to(item, 0.5, {
  drawSVG: '0% 100%'
}, '-=1')
// .to(ball, 0.5, {
//   drawSVG: '0% 100%'
// }, '-=1')
// .to(computer, 0.5, {
//   drawSVG: '0% 100%'
// }, '-=1')
// .to(note1, 0.5, {
//   drawSVG: '0% 100%'
// }, '-=1')
// .to(note2, 0.5, {
//   drawSVG: '0% 100%'
// }, '-=1')
// .to(headphone, 0.5, {
//   drawSVG: '100%'
// })
// .to(ps, 0.5, {
//   drawSVG: '100%'
// }, '-=1')