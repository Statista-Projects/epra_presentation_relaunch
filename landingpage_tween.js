/* --------------------------Intro Animation--------------------------------*/
//gsap.registerPlugin(ScrollTrigger);

const svg = document.getElementById('main');
const link = Array.from(
  svg.querySelectorAll(`[id^="intro_elems"] > g`)
).reverse();

//gsap.set(svg, { autoAlpha: 0 });

const all_elems = Array.from(svg.querySelectorAll(`[id^="main_section"] > g`));
gsap.from([svg, link, all_elems], { autoAlpha: 0, duration: 1, stagger: 0.3 });

//let svgDoc = svg.contentDocument;
//console.log(svg.querySelector('[id^="land_text_1"]'));
//globalLinks.forEach((a) => {
//const link = svg.querySelector(`[id^="${a.icon}"]`) id$
//const link = svg.querySelector('[id^="land_text_1"]');

/*
const elements = Array.from(svg.querySelectorAll(`[id^="s2_map_selected"] > g > g`)).reverse()
elements.forEach((el) => {
  el.addEventListener('click', (e) => {
    if (e.stopPropagation) e.stopPropagation()
    window.open(e.target.parentNode.getAttribute('data-url'), '_blank')
  })
})
*/
//const link = svg.querySelector(`[id^="${a.icon}"]`)

//const elemsIcons = Array.from(svg.querySelectorAll(`[id^="${a.icons}"] > g > g`)).reverse()

/*
var land_btn_1 = svgDoc.getElementById("l1_btn");
var land_btn_2 = svgDoc.getElementById("l2_btn");
var land_btn_3 = svgDoc.getElementById("l3_btn");
var land_btn_4 = svgDoc.getElementById("l4_btn");
var land_btn_5 = svgDoc.getElementById("l5_btn");
var land_btn_6 = svgDoc.getElementById("l6_btn");
var land_btn_7 = svgDoc.getElementById("l7_btn");
var land_btn_8 = svgDoc.getElementById("l8_btn");

TweenMax.set(
  [
    land_btn_1,
    land_btn_2,
    land_btn_3,
    land_btn_4,
    land_btn_5,
    land_btn_6,
    land_btn_7,
    land_btn_8
  ],
  { autoAlpha: 0 }
);

var art = svgDoc.getElementById("artwork");
var a1 = svgDoc.getElementById("land_text_1");
var a2 = svgDoc.getElementById("land_text_2");
var a3 = svgDoc.getElementById("land_text_3");
var a4 = svgDoc.getElementById("land_text_4");
var a5 = svgDoc.getElementById("land_text_5");

function artworkAni() {
  var tl = new TimelineMax();
  tl.staggerFrom(
    [art, a2, a3, a4, a5, a1],
    2,
    { autoAlpha: 0, transformOrigin: "50% 50%", ease: Power1.easeInOut },
    0.5,
    "-=0.05"
  );
  return tl;
}

function pathAni(path, start_dot, end_dot, item1, item2, xoff, yoff, btn) {
  var svg_path = svgDoc.getElementById(path);
  var dot = svgDoc.getElementById(end_dot);
  var startdot = svgDoc.getElementById(start_dot);
  var p1_1 = svgDoc.getElementById(item1);
  var p1_2 = svgDoc.getElementById(item2);

  var tl = new TimelineMax();
  var bezierData = MorphSVGPlugin.pathDataToBezier(svg_path, {
    align: dot,
    offsetX: xoff,
    offsetY: yoff
  });
  tl.set(dot, { autoAlpha: 0, xPercent: -50, yPercent: -80 });

  tl.from(startdot, 0.4, {
    autoAlpha: 0,
    scale: 0,
    ease: Power1.easeInOut
  });
  tl.set(dot, { autoAlpha: 1 });
  tl.from(svg_path, 2, { drawSVG: 0, ease: Linear.easeNone })

    .to(
      dot,
      2,
      {
        bezier: { values: bezierData, type: "cubic", autoRotate: 90 },
        ease: Linear.easeNone
      },
      "-=2.05"
    )
    .set(btn, { autoAlpha: 1 })
    .staggerFrom(
      [p1_1, p1_2],
      2,
      { autoAlpha: 0, transformOrigin: "50% 50%", ease: Power1.easeInOut },
      0.5,
      "-=0.05"
    );

  return tl;
}

var overlap = "-=1.8";

var master = new TimelineMax({ autoRemoveChildren: true });
master
  .add("all")
  .add(TweenMax.set("#intro", { visibility: "visible" }))
  .add(artworkAni())
  .add(
    pathAni(
      "p1",
      "p1_dot_start",
      "p1_dot_end",
      "land_slide_1_1",
      "land_slide_1_2",
      0,
      15,
      land_btn_1
    )
  )
  .add(
    pathAni(
      "p2",
      "p2_dot_start",
      "p2_dot_end",
      "land_slide_2_1",
      "land_slide_2_2",
      0,
      15,
      land_btn_2
    ),
    overlap
  )
  .add(
    pathAni(
      "p3",
      "p3_dot_start",
      "p3_dot_end",
      "land_slide_3_1",
      "land_slide_3_2",
      0,
      15,
      land_btn_3
    ),
    overlap
  )
  .add(
    pathAni(
      "p4",
      "p4_dot_start",
      "p4_dot_end",
      "land_slide_4_1",
      "land_slide_4_2",
      0,
      15,
      land_btn_4
    ),
    overlap
  )
  .add("leftside")
  .add(
    pathAni(
      "p5",
      "p5_dot_start",
      "p5_dot_end",
      "land_slide_5_1",
      "land_slide_5_2",
      0,
      5,
      land_btn_5
    ),
    overlap
  )
  .add(
    pathAni(
      "p6",
      "p6_dot_start",
      "p6_dot_end",
      "land_slide_6_1",
      "land_slide_6_2",
      6,
      2.5,
      land_btn_6
    ),
    overlap
  )
  .add(
    pathAni(
      "p7",
      "p7_dot_start",
      "p7_dot_end",
      "land_slide_7_1",
      "land_slide_7_2",
      10,
      4,
      land_btn_7
    ),
    overlap
  )
  .add(
    pathAni(
      "p8",
      "p8_dot_start",
      "p8_dot_end",
      "land_slide_8_1",
      "land_slide_8_2",
      12,
      4,
      land_btn_8
    ),
    overlap
  );

//	master.play("all");
master.timeScale(2);
*/
// add behaviour

/*

    land_btn_1.addEventListener(
      "mousedown",
      function () {
        TweenMax.to(window, 2, {
          scrollTo: "#project01",
          ease: Power1.easeInOut
        });
      },
      false
    );
    land_btn_2.addEventListener(
      "mousedown",
      function () {
        TweenMax.to(window, 2, {
          scrollTo: "#project02",
          ease: Power1.easeInOut
        });
      },
      false
    );
    land_btn_3.addEventListener(
      "mousedown",
      function () {
        TweenMax.to(window, 2, {
          scrollTo: "#project03",
          ease: Power1.easeInOut
        });
      },
      false
    );
    land_btn_4.addEventListener(
      "mousedown",
      function () {
        TweenMax.to(window, 2, {
          scrollTo: "#project04",
          ease: Power1.easeInOut
        });
      },
      false
    );
    land_btn_5.addEventListener(
      "mousedown",
      function () {
        TweenMax.to(window, 2, {
          scrollTo: "#project05",
          ease: Power1.easeInOut
        });
      },
      false
    );
    land_btn_6.addEventListener(
      "mousedown",
      function () {
        TweenMax.to(window, 2, {
          scrollTo: "#project06",
          ease: Power1.easeInOut
        });
      },
      false
    );
    land_btn_7.addEventListener(
      "mousedown",
      function () {
        TweenMax.to(window, 2, {
          scrollTo: "#project07",
          ease: Power1.easeInOut
        });
      },
      false
    );
    land_btn_8.addEventListener(
      "mousedown",
      function () {
        TweenMax.to(window, 2, {
          scrollTo: "#project08",
          ease: Power1.easeInOut
        });
      },
      false
    );
*/
