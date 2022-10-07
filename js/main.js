$(document).ready(function () {
  $(window).load(function () {
    /* -------------------------ANIMATION SETTINGS------------------------------*/
    TweenMax.set("#intro", { visibility: "hidden" });

    /* ----------------ONLOAD SETTINGS------------------------------*/

    // Init controller
    var controller = new ScrollMagic.Controller({
      globalSceneOptions: {
        duration: "170%",
        triggerHook: 0.81,

        reverse: true
      }
    });

    var scenes = {
      intro: {
        intro: "intro-anchor"
      },
      scene1: {
        project01: "anchor1"
      },
      scene2: {
        project02: "anchor2"
      },
      scene3: {
        project03: "anchor3"
      },
      scene4: {
        project04: "anchor4"
      },
      scene5: {
        project05: "anchor5"
      },
      scene6: {
        project06: "anchor6"
      },
      scene7: {
        project07: "anchor7"
      },
      scene8: {
        project08: "anchor8"
      }
    };

    for (var key in scenes) {
      // skip loop if the property is from prototype
      if (!scenes.hasOwnProperty(key)) continue;

      var obj = scenes[key];

      for (var prop in obj) {
        // skip loop if the property is from prototype
        if (!obj.hasOwnProperty(prop)) continue;

        new ScrollMagic.Scene({ triggerElement: "#" + prop })
          .setClassToggle("#" + obj[prop], "active")

          .addTo(controller);
      }
    }

    //  Bind scroll to anchor links using Vanilla JavaScript
    var anchor_nav = document.querySelector(".anchor-nav");

    anchor_nav.addEventListener("click", function (e) {
      var target = e.target,
        id = target.getAttribute("href");

      if (id !== null) {
        if (id.length > 0) {
          e.preventDefault();
          controller.scrollTo(id);

          if (window.history && window.history.pushState) {
            history.pushState("", document.title, id);
          }
        }
      }
    });

    $(".project").each(function () {
      var mainScene = new ScrollMagic.Scene({
        triggerElement: this.children[0]
      })
        .setClassToggle(this, "fade-in")
        .addTo(controller);
    });

    controller.scrollTo(function (target) {
      TweenMax.to(window, 0.5, {
        scrollTo: {
          y: target,
          autoKill: true
        },
        ease: Cubic.easeInOut
      });
    });

    /* --------------------------_________________------------------------------*/
    /* --------------------------Intro Animation--------------------------------*/

    var a = document.getElementById("landing_page");

    var svgDoc = a.contentDocument;

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

    // add behaviour

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

    /* --------------------------SHOW NAVI------------------------------*/

    var showNavi = new ScrollMagic.Scene({
      triggerElement: "#intro",
      triggerHook: "onEnter",
      offset: -500
    })
      .addTo(controller)
      // .addIndicators({ name:'showNavi',	indent:400,	colorTrigger:'pink',	colorStart: 'red',colorEnd: 'green'})
      .setClassToggle("#slide_nav", "visuallyhidden");

    TweenMax.set("header", { visibility: "visible" });

    /* --------------------------Slide 1 Animation------------------------------*/

    var s1_svg_obj = document.getElementById("s1img");

    function s1Ani() {
      var s1_svgDoc = s1_svg_obj.contentDocument;
      var b1 = s1_svgDoc.getElementById("building_1");
      var b2 = s1_svgDoc.getElementById("building_2");
      var b3 = s1_svgDoc.getElementById("building_3");
      var b4 = s1_svgDoc.getElementById("building_4");
      var b5 = s1_svgDoc.getElementById("building_5");

      var s1tl = new TimelineMax();
      s1tl.staggerFrom(
        [b5, b1, b2, b3, b4],
        2,
        { y: 550, transformOrigin: "50% 50%", ease: Power1.easeInOut },
        0.5,
        "-=0.05"
      );
      return s1tl;
    }

    var s1_master = new TimelineMax({ paused: false });
    s1_master.add("all").add(s1Ani());
    s1_master.time(0);

    var slide_1_AniScene = new ScrollMagic.Scene({
      triggerElement: ".s1_right_Content",
      triggerHook: 0.8
    })
      //.addIndicators({name:'slide_1_AniScene',indent:400,	colorTrigger:'pink',	colorStart: 'red',	colorEnd: 'green' })
      .on("start", function () {
        s1_master.play(0);
      })
      .addTo(controller);

    /* --------------------------_________________------------------------------*/
    /* --------------------------Slide 2 Animation------------------------------*/

    /* --------------------------_________________------------------------------*/
    /* --------------------------Slide 3 Animation------------------------------*/
    var s3_svg_obj = document.getElementById("s3img");
    function s3Ani() {
      var s3_svgDoc = s3_svg_obj.contentDocument;
      var bull1 = s3_svgDoc.getElementById("bull_1");
      var bull2 = s3_svgDoc.getElementById("bull_2");

      var s3tl = new TimelineMax();
      s3tl
        .add("in_1")
        .from(bull1, 1.8, { x: "+=330", ease: Power1.easeInOut }, "in_1")
        .from(bull2, 1.8, { x: "-=330", ease: Power1.easeInOut }, "in_1")
        .add("in_2")
        .to(
          bull1,
          2.8,
          {
            x: "-=30",
            ease: Bounce.easeOut,
            yoyo: true,
            repeat: 5,
            repeatDelay: 1.5
          },
          "in_2"
        )
        .to(
          bull2,
          2.8,
          {
            x: "+=30",
            ease: Bounce.easeOut,
            yoyo: true,
            repeat: 5,
            repeatDelay: 1.5
          },
          "in_2"
        );
      return s3tl;
    }

    var s3_master = new TimelineMax({ paused: false });
    s3_master
      .add("all")
      // .add(TweenMax.set("#intro", {  visibility: "visible"}))
      .add(s3Ani());
    s3_master.time(0);

    var slide_3_AniScene = new ScrollMagic.Scene({
      triggerElement: ".s3_header",
      triggerHook: 0.8
    })

      //.addIndicators({ name:'slide_3_AniScene',	indent:400,	colorTrigger:'pink',	colorStart: 'red',colorEnd: 'green'})

      .on("start", function () {
        s3_master.play(0);
      })
      .on("leave", function () {
        s3_master.startTime(0);
        s3_master.kill();
      })
      .addTo(controller);

    /* --------------------------_________________------------------------------*/
    /* --------------------------Slide 4 Animation------------------------------*/

    var s4_svg_obj = document.getElementById("s4img");
    var s4_svg_chart = document.getElementById("s4chart");

    function s4Ani() {
      var s4_svgDoc = s4_svg_obj.contentDocument;
      var b01 = s4_svgDoc.getElementById("building_01");
      var b02 = s4_svgDoc.getElementById("building_02");
      var b03 = s4_svgDoc.getElementById("building_03");
      var b04 = s4_svgDoc.getElementById("building_04");

      var s4_svgChart = s4_svg_chart.contentDocument;
      var c01 = s4_svgChart.getElementById("bar_1");
      var c02 = s4_svgChart.getElementById("bar_2");
      var c03 = s4_svgChart.getElementById("bar_3");
      var c04 = s4_svgChart.getElementById("bar_4");

      var s4tl = new TimelineMax();
      s4tl.staggerFrom(
        [c01, c02, c03, c04],
        1.5,
        { y: "-=390", ease: Expo.easeInOut },
        0.5,
        "-=0.05"
      );
      s4tl.staggerFrom(
        [b01, b02, b03, b04],
        1.8,
        { y: "+=700", transformOrigin: "50% 50%", ease: Expo.easeInOut },
        0.5,
        "-=1.8"
      );
      return s4tl;
    }

    var s4_master = new TimelineMax({ paused: false });
    s4_master
      .add("all")
      // .add(TweenMax.set("#intro", {  visibility: "visible"}))
      .add(s4Ani());
    s4_master.time(0);

    var slide_4_AniScene = new ScrollMagic.Scene({
      triggerElement: ".s4_header",
      triggerHook: 0.8
    })
      //.addIndicators({ name:'slide_4_AniScene',	indent:400,	colorTrigger:'pink',	colorStart: 'red', colorEnd: 'green' })
      .on("start", function () {
        s4_master.play(0);
      })
      .addTo(controller);
    /* --------------------------_________________------------------------------*/
    /* --------------------------Slide 5 Animation------------------------------*/

    var s5_img1 = document.getElementById("s5_chart1");
    var s5_img2 = document.getElementById("s5_chart2");
    var s5_img3 = document.getElementById("s5_chart3");

    var s5_tl = new TimelineMax({ paused: true });
    s5_tl
      .add("in")
      .staggerFrom(
        [s5_img1, s5_img2, s5_img3],
        2.2,
        {
          alpha: 0,
          scale: 0,
          transformOrigin: "50% 50%",
          ease: Power2.easeInOut
        },
        0.5,
        "-=0.05"
      );

    var slide_5_AniScene = new ScrollMagic.Scene({
      triggerElement: ".s5_header",
      triggerHook: 0.8
    })
      //.addIndicators({ name:'slide_5_AniScene',	indent:400,	colorTrigger:'pink',	colorStart: 'red',	colorEnd: 'green'})
      .on("start", function () {
        s5_tl.play(0);
      })
      .addTo(controller);
    /* --------------------------_________________------------------------------*/
    /* --------------------------Slide 6 Animation------------------------------*/
    var s6_img = document.getElementById("s6img");

    function s6Ani() {
      var s6_svgDoc = s6_img.contentDocument;
      var m01 = s6_svgDoc.getElementById("man_1");
      var m02 = s6_svgDoc.getElementById("man_2");
      var m03 = s6_svgDoc.getElementById("man_3");
      var p01 = s6_svgDoc.getElementById("pipes");
      var coffee_path = s6_svgDoc.getElementById("steam");

      var s6tl = new TimelineMax();
      s6tl.staggerFrom(
        [p01, m01, m02, m03],
        1.8,
        { x: "-=500", ease: Power3.easeInOut },
        0.25
      );
      //.fromTo(coffee_path, 15, {strokeDashoffset: l, ease: Linear.easeNone}, {strokeDashoffset:0, repeat: -1, ease: Linear.easeNone});
      //TweenMax.from(coffee_path, 2, { drawSVG: "10%", ease: Linear.easeNone })
      return s6tl;
    }

    var s6_master = new TimelineMax({ paused: false });
    s6_master
      .add("all")
      // .add(TweenMax.set("#intro", {  visibility: "visible"}))
      .add(s6Ani());
    s6_master.time(0);

    var slide_6_AniScene = new ScrollMagic.Scene({
      triggerElement: ".s6_header",
      triggerHook: 0.8
    })
      //.addIndicators({ name:'slide_6_AniScene',	indent:400,	colorTrigger:'pink',	colorStart: 'red',	colorEnd: 'green'})
      .on("start", function () {
        s6_master.play(0);
      })
      .addTo(controller);
    /* --------------------------_________________------------------------------*/
    /* --------------------------Slide 7 Animation------------------------------*/
    var s7_img = document.getElementById("s7_mainImg");

    var s7_svg_chart_1 = document.getElementById("s7chart_1");
    var s7_svg_chart_2 = document.getElementById("s7chart_2");

    function s7Ani1() {
      var s7_svgChart_1 = s7_svg_chart_1.contentDocument;
      var c1_1 = s7_svgChart_1.getElementById("c1_text");
      var c1_2 = s7_svgChart_1.getElementById("c1_cover");
      var c1_3 = s7_svgChart_1.getElementById("c1_tree_1");
      var c1_4 = s7_svgChart_1.getElementById("c1_tree_2");
      var c1_5 = s7_svgChart_1.getElementById("c1_bar1");
      var c1_6 = s7_svgChart_1.getElementById("c1_bar2");
      var c1_7 = s7_svgChart_1.getElementById("c1_bar3");

      var s7tl_1 = new TimelineMax();
      s7tl_1
        .add("in")
        .from(c1_1, 0.8, { alpha: 0, y: "+=30", ease: Expo.easeInOut })
        .from(
          c1_2,
          1.8,
          {
            alpha: 0,
            scaleX: 0,
            transformOrigin: "50% 50%",
            ease: Elastic.easeInOut
          },
          "-=0.9"
        )
        .staggerFrom(
          [c1_3, c1_4],
          1.8,
          { scaleY: 0, transformOrigin: "50% bottom", ease: Elastic.easeInOut },
          0.25,
          "-=1.5"
        )
        .staggerFrom(
          [c1_5, c1_6, c1_7],
          1.8,
          { y: "+=590", transformOrigin: "50% bottom", ease: Expo.easeInOut },
          0.8,
          "-=1.5"
        );

      return s7tl_1;
    }

    function s7Ani2() {
      var s7_svgChart_2 = s7_svg_chart_2.contentDocument;
      var c2_1 = s7_svgChart_2.getElementById("c2_text");
      var c2_2 = s7_svgChart_2.getElementById("c2_cover");
      var c2_3 = s7_svgChart_2.getElementById("c2_tree_1");
      var c2_4 = s7_svgChart_2.getElementById("c2_tree_2");
      var c2_5 = s7_svgChart_2.getElementById("c2_bar1");
      var c2_6 = s7_svgChart_2.getElementById("c2_bar2");
      var c2_7 = s7_svgChart_2.getElementById("c2_bar3");
      var c2_8 = s7_svgChart_2.getElementById("c2_tree_3");

      var s7tl_2 = new TimelineMax();
      s7tl_2
        .add("in")
        .from(c2_1, 0.8, { alpha: 0, y: "+=30", ease: Expo.easeInOut })
        .from(
          c2_2,
          1.8,
          {
            alpha: 0,
            scaleX: 0,
            transformOrigin: "50% 50%",
            ease: Elastic.easeInOut
          },
          "-=0.9"
        )
        .staggerFrom(
          [c2_3, c2_4, c2_8],
          1.8,
          { scaleY: 0, transformOrigin: "50% bottom", ease: Elastic.easeInOut },
          0.25,
          "-=1.5"
        )
        .staggerFrom(
          [c2_5, c2_6, c2_7],
          1.8,
          { y: "+=590", transformOrigin: "50% bottom", ease: Expo.easeInOut },
          0.8,
          "-=1.5"
        );

      return s7tl_2;
    }

    var s7_master = new TimelineMax({ paused: false });
    s7_master
      .add("all")
      // .add(TweenMax.set("#intro", {  visibility: "visible"}))
      .add(s7Ani1())
      .add(s7Ani2());

    s7_master.time(0).timeScale(1.5);

    var slide_7_AniScene = new ScrollMagic.Scene({
      triggerElement: ".s7_header",
      triggerHook: 0.8
    })
      //.addIndicators({ name:'slide_7_AniScene', indent:400,	colorTrigger:'pink',	colorStart: 'red',	colorEnd: 'green' })
      .on("start", function () {
        s7_master.play(0);
      })
      .addTo(controller);

    /* --------------------------Slide 8 2 Animation------------------------------*/
    //S8_Div_1

    var s8_svg_chart_1 = document.getElementById("S8_Div_1");
    var s8_svg_chart_2 = document.getElementById("S8_Div_2");
    var s8_svg_chart_3 = document.getElementById("S8_Div_3");
    var s8_svg_label_1 = document.getElementById("S8_label_1");
    var s8_svg_label_2 = document.getElementById("S8_label_2");
    var s8_svg_label_3 = document.getElementById("S8_label_3");

    s8_index_tl = new TimelineMax({ paused: true, delay: 0.5 });
    s8_index_tl.add("in");
    s8_index_tl
      .staggerFrom(
        [s8_svg_chart_1, s8_svg_chart_2, s8_svg_chart_3],
        3.1,
        {
          scale: 0.85,
          autoAlpha: 0,
          transformOrigin: "50% 50%",
          ease: Elastic.easeOut
        },
        0.36
      )
      .staggerFrom(
        [s8_svg_label_1, s8_svg_label_2, s8_svg_label_3],
        2,
        {
          y: "+=50",
          autoAlpha: 0,
          transformOrigin: "center",
          ease: Elastic.easeOut
        },
        0.16,
        "in+=0.51"
      );

    document.getElementById("s8_btn1").addEventListener("click", function () {
      s8_index_tl.seek(0);
      s8_index_tl.restart();
      s8_index_tl.play(0);
      //window.S8_Development_2_ChartData.update();
    });

    /* --------------------------_________________------------------------------*/
    /* --------------------------Slide 8 Animation------------------------------*/

    var s8_img = document.getElementById("s8_mainImg");
    var s8_tl = new TimelineMax({ paused: true });
    s8_tl
      .add("in")
      .from(s8_img, 1.8, {
        autoAlpha: 0,
        scale: 0.98,
        transformOrigin: "50% bottom",
        ease: Expo.easeInOut
      });

    var slide_8_AniScene = new ScrollMagic.Scene({
      triggerElement: ".s8_header",
      triggerHook: 0.8
    })
      //.addIndicators({	name:'slide_8_AniScene',	indent:400,	colorTrigger:'pink',	colorStart: 'red',	colorEnd: 'green'})
      .on("start", function () {
        s8_tl.play(0);
        epra_tl.restart();
      })
      .addTo(controller);

    /* -------------------------$(document)-____$(window)_____________-------------*/
  });
});

/* --------------------------_________________------------------------------*/

var ep_tl = document.getElementById("s8img");

ep_tl.addEventListener(
  "load",
  function () {
    var ep_svgDoc = ep_tl.contentDocument;
    TweenMax.set(ep_tl, { autoAlpha: 0 });
    var cover = ep_svgDoc.getElementById("Cover");
    var line = ep_svgDoc.getElementById("tl_line");
    var circle_1 = ep_svgDoc.getElementById("tl_1");
    var circle_2 = ep_svgDoc.getElementById("tl_2");
    var circle_3 = ep_svgDoc.getElementById("tl_3");
    var circle_3_1 = ep_svgDoc.getElementById("tl_3_1");
    var circle_4 = ep_svgDoc.getElementById("tl_4");
    var circle_4_1 = ep_svgDoc.getElementById("tl_4_1");
    var circle_5 = ep_svgDoc.getElementById("tl_5");
    var circle_5_1 = ep_svgDoc.getElementById("tl_5_1");
    var circle_6 = ep_svgDoc.getElementById("tl_6");
    var circle_6_line = ep_svgDoc.getElementById("green_line");
    var circle_6_1 = ep_svgDoc.getElementById("gr_icon_1");
    var circle_6_2 = ep_svgDoc.getElementById("gr_icon_2");
    var circle_6_3 = ep_svgDoc.getElementById("gr_icon_3");
    var circle_6_4 = ep_svgDoc.getElementById("gr_icon_4");
    var circle_6_5 = ep_svgDoc.getElementById("gr_icon_5");
    var circle_6_tp_1 = ep_svgDoc.getElementById("tp_1");
    var circle_6_tp_2 = ep_svgDoc.getElementById("tp_2");
    var circle_6_tp_3 = ep_svgDoc.getElementById("tp_3");
    var circle_6_tp_4 = ep_svgDoc.getElementById("tp_4");
    var circle_6_tp_5 = ep_svgDoc.getElementById("tp_5");

    var circle_7 = ep_svgDoc.getElementById("tl_7");
    var circle_8 = ep_svgDoc.getElementById("tl_8");
    var circle_8_1 = ep_svgDoc.getElementById("tl_8_1");
    var circle_8_2 = ep_svgDoc.getElementById("tl_8_2");

    var circle_9 = ep_svgDoc.getElementById("tl_9");
    var circle_10 = ep_svgDoc.getElementById("tl_10");

    var path_1 = ep_svgDoc.getElementById("Path_1");
    var path_2 = ep_svgDoc.getElementById("Path_2");
    var path_3 = ep_svgDoc.getElementById("Path_3");
    var path_4 = ep_svgDoc.getElementById("Path_4");
    var path_5 = ep_svgDoc.getElementById("Path_5");
    var path_6 = ep_svgDoc.getElementById("Path_6");
    var path_7 = ep_svgDoc.getElementById("Path_7");

    var myArray = [
      circle_1,
      circle_2,
      circle_3,
      circle_3_1,
      circle_4,
      circle_4_1,
      circle_5,
      circle_5_1,
      circle_6,
      circle_6_line,
      circle_6_1,
      circle_6_2,
      circle_6_3,
      circle_6_4,
      circle_6_5,
      circle_7
    ];
    var myArray_6 = [
      circle_6_line,
      circle_6_1,
      circle_6_2,
      circle_6_3,
      circle_6_4,
      circle_6_5
    ];
    var myArraySmall = [circle_8, circle_8_1, circle_8_2];
    var myArrayEnd = [circle_9, circle_10];

    var myArray_tip = [
      circle_6_tp_1,
      circle_6_tp_2,
      circle_6_tp_3,
      circle_6_tp_4,
      circle_6_tp_5
    ];
    var myArray_6_over = [
      circle_6_1,
      circle_6_2,
      circle_6_3,
      circle_6_4,
      circle_6_5
    ];

    var masterArray = [
      line,
      circle_1,
      circle_2,
      path_1,
      circle_3,
      circle_3_1,
      path_2,
      circle_4,
      path_3,
      circle_4_1,
      circle_5,
      circle_5_1,
      path_4,
      circle_6,
      circle_6_line,
      circle_6_1,
      circle_6_2,
      circle_6_3,
      circle_6_4,
      circle_6_5,
      path_5,
      circle_7,
      path_6,
      circle_8,
      circle_8_1,
      circle_8_2,
      path_7,
      circle_9,
      circle_10
    ];

    var myArrayPath_1 = [
      path_1,
      path_2,
      path_3,
      path_4,
      path_5,
      path_6,
      path_7
    ];

    TweenMax.set(myArrayPath_1, { visibility: "hidden" });
    TweenMax.set(myArray_tip, { autoAlpha: 0 });
    var s8_imgDiv = document.getElementById("s8_mainImg");

    epra_tl = new TimelineMax({ paused: false, delay: 0.5 });
    epra_tl.to(ep_tl, 0.2, { autoAlpha: 1 });
    epra_tl.to(cover, 0.2, { autoAlpha: 0 });

    epra_tl.staggerFrom(
      masterArray,
      0.8,
      {
        scale: 0.75,
        autoAlpha: 0,
        transformOrigin: "center",
        ease: Power3.easeInOut
      },
      0.36
    );

    epra_tl.timeScale(1);

    // Mouse addEventListener

    myArray_6_over[0].addEventListener(
      "mouseover",
      function (e) {
        TweenMax.to($(this), 0.2, { transformOrigin: "50% 50%", scale: 1.12 });
        TweenMax.to(circle_6_tp_1, 0.2, { autoAlpha: 1 });
      },
      false
    );
    myArray_6_over[0].addEventListener(
      "mouseout",
      function (e) {
        TweenMax.to($(this), 0.2, { transformOrigin: "50% 50%", scale: 1 });
        TweenMax.to(circle_6_tp_1, 0.2, { autoAlpha: 0 });
      },
      false
    );

    myArray_6_over[1].addEventListener(
      "mouseover",
      function (e) {
        TweenMax.to($(this), 0.2, { transformOrigin: "50% 50%", scale: 1.12 });
        TweenMax.to(circle_6_tp_2, 0.2, { autoAlpha: 1 });
      },
      false
    );
    myArray_6_over[1].addEventListener(
      "mouseout",
      function (e) {
        TweenMax.to($(this), 0.2, { transformOrigin: "50% 50%", scale: 1 });
        TweenMax.to(circle_6_tp_2, 0.2, { autoAlpha: 0 });
      },
      false
    );

    myArray_6_over[2].addEventListener(
      "mouseover",
      function (e) {
        TweenMax.to($(this), 0.2, { transformOrigin: "50% 50%", scale: 1.12 });
        TweenMax.to(circle_6_tp_3, 0.2, { autoAlpha: 1 });
      },
      false
    );
    myArray_6_over[2].addEventListener(
      "mouseout",
      function (e) {
        TweenMax.to($(this), 0.2, { transformOrigin: "50% 50%", scale: 1 });
        TweenMax.to(circle_6_tp_3, 0.2, { autoAlpha: 0 });
      },
      false
    );

    myArray_6_over[3].addEventListener(
      "mouseover",
      function (e) {
        TweenMax.to($(this), 0.2, { transformOrigin: "50% 50%", scale: 1.12 });
        TweenMax.to(circle_6_tp_4, 0.2, { autoAlpha: 1 });
      },
      false
    );
    myArray_6_over[3].addEventListener(
      "mouseout",
      function (e) {
        TweenMax.to($(this), 0.2, { transformOrigin: "50% 50%", scale: 1 });
        TweenMax.to(circle_6_tp_4, 0.2, { autoAlpha: 0 });
      },
      false
    );

    myArray_6_over[4].addEventListener(
      "mouseover",
      function (e) {
        TweenMax.to($(this), 0.2, { transformOrigin: "50% 50%", scale: 1.12 });
        TweenMax.to(circle_6_tp_5, 0.2, { autoAlpha: 1 });
      },
      false
    );
    myArray_6_over[4].addEventListener(
      "mouseout",
      function (e) {
        TweenMax.to($(this), 0.2, { transformOrigin: "50% 50%", scale: 1 });
        TweenMax.to(circle_6_tp_5, 0.2, { autoAlpha: 0 });
      },
      false
    );

    var s8_img_out = document.getElementById("s8_mainImg");

    document
      .getElementById("defaultOpen_8")
      .addEventListener("click", function () {
        //TweenMax.set(ep_tl, { autoAlpha:0});

        TweenMax.set(s8_img_out, { autoAlpha: 1, delay: 0.5 });
        epra_tl.seek(0);
        epra_tl.restart();
      });

    document.getElementById("s8_btn1").addEventListener("click", function () {
      TweenMax.set(ep_tl, { autoAlpha: 0 });
      epra_tl.seek(0);
      epra_tl.paused();

      TweenMax.set(s8_img_out, { autoAlpha: 0 });
    });
  },
  false
);

/* --------------------------____Slide 3 Fees RETURNS _____________------------------------------*/
var s3_c2_svg_obj = document.getElementById("s3_content2");

s3_c2_svg_obj.addEventListener(
  "load",
  function () {
    var s3_c2_svgDoc = s3_c2_svg_obj.contentDocument;

    var crane1 = s3_c2_svgDoc.getElementById("crane_1");
    var crane2 = s3_c2_svgDoc.getElementById("crane_2");
    var cr1_load = s3_c2_svgDoc.getElementById("crane_1_load");
    var cr2_load = s3_c2_svgDoc.getElementById("crane_2_load");

    s3_c2tl = new TimelineMax({ paused: false, delay: 0.5 });
    s3_c2tl.add("in_1");
    s3_c2tl.from(crane1, 1.8, { y: 30, ease: Bounce.easeOut }, "in_1");
    s3_c2tl.from(cr1_load, 1.8, { y: 30, ease: Bounce.easeOut }, "in_1");
    s3_c2tl.add("in_2");
    s3_c2tl.from(crane2, 1.8, { y: 40, ease: Bounce.easeOut }, "in_2");
    s3_c2tl.from(cr2_load, 1.8, { y: 40, ease: Bounce.easeOut }, "in_2");
  },
  false
);

document.getElementById("s3_btn2").addEventListener("click", function () {
  s3_c2tl.seek(0);
  s3_c2tl.restart();
});

/* --------------------------________________________________________------------------------------*/

/* --------------------------____Slide 3 Fees INVESTMENT _____________------------------------------*/
var s3_c3_svg_obj = document.getElementById("s3_3_chart");
var s3_3_div = document.getElementById("s3_3_chart_div");
TweenMax.set(s3_3_div, { autoAlpha: 0 });

s3_c3_svg_obj.addEventListener(
  "load",
  function () {
    var s3_c3_svgDoc = s3_c3_svg_obj.contentDocument;

    var s3_cover = s3_c3_svgDoc.getElementById("Cover_All");
    var ic_b1 = s3_c3_svgDoc.getElementById("bar_1");
    var ic_b1_text = s3_c3_svgDoc.getElementById("bar_1_text");

    var ic_b2 = s3_c3_svgDoc.getElementById("bar_2");
    var ic_b2_text = s3_c3_svgDoc.getElementById("bar_2_text");

    var ic_b3 = s3_c3_svgDoc.getElementById("bar_3");
    var ic_b3_text = s3_c3_svgDoc.getElementById("bar_3_text");

    var s3_c3tl = new TimelineMax({ paused: false });
    TweenMax.set(s3_3_div, { autoAlpha: 1 });
    TweenMax.set(s3_cover, { autoAlpha: 0 });

    s3_c3tl
      .add("in_1")
      .staggerFrom(
        [ic_b1_text, ic_b2_text, ic_b3_text],
        2.5,
        { autoAlpha: 0, y: "+=400", ease: Expo.easeInOut },
        0.5
      )
      .staggerFrom(
        [ic_b1, ic_b2, ic_b3],
        2.5,
        { autoAlpha: 0, y: 590, ease: Expo.easeInOut },
        0.5,
        "-=3.55"
      );

    document.getElementById("s3_btn3").addEventListener("click", function () {
      s3_c3tl.seek(0);
      s3_c3tl.restart();
      s3_c3tl.play();
    });
  },
  false
);

/* --------------------------_________________------------------------------*/
