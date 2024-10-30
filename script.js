var _____WB$wombat$assign$function_____ = function (name) {
  return (
    (self._wb_wombat &&
      self._wb_wombat.local_init &&
      self._wb_wombat.local_init(name)) ||
    self[name]
  );
};
if (!self.__WB_pmw) {
  self.__WB_pmw = function (obj) {
    this.__WB_source = obj;
    return this;
  };
}
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  //let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

  $(window).on("load", function () {
    "use strict";
    var loc = window.location.href,
      index = loc.indexOf("#");
    if (index > 0) {
      window.location = loc.substring(0, index);
    }
    if ($(window).width() < 1280) {
      $(".pagedata").removeAttr("id");
      $("html, body").css("overflow-y", "scroll");
    } else {
      $("#pagepiling").pagepiling({
        direction: "vertical",
        sectionsColor: [
          "#171717",
          "#171717",
          "#171717",
          "#171717",
          "#171717",
          "#171717",
        ],
        anchors: [
          "home",
          "creditmonitor",
          "creditline",
          "paylater",
          "exchange",
          "crm",
          "contact",
        ],
        scrollingSpeed: 500,
        easing: "linear",
        loopBottom: false,
        loopTop: false,
        css3: true,
        navigation: {
          bulletsColor: "#535353",
          position: "right",
          tooltips: [
            "Home",
            "Credit Monitor",
            "Credit Line",
            "Pay Later",
            "Exchange",
            "CRM",
            "Contact",
          ],
        },
        onLeave: function (index, nextIndex, direction) {
          $(".navbar-top-default").fadeOut();
          $(".slider-footer").fadeOut();
          $(".slider-copyright").fadeOut();
          if (nextIndex == 1) {
            $("#pp-nav").fadeOut();
          }
          if (index == 1) {
            $("#pp-nav").fadeIn();
          }
          if (
            nextIndex == 1 ||
            nextIndex == 2 ||
            nextIndex == 3 ||
            nextIndex == 4 ||
            nextIndex == 5 ||
            nextIndex == 6 ||
            nextIndex == 7 ||
            nextIndex == 8 ||
            nextIndex == 9 ||
            nextIndex == 10
          ) {
            setTimeout(function () {
              $(".navbar-top-default").fadeIn();
              $(".slider-footer").fadeIn();
              $(".slider-copyright").fadeIn();
            }, 600);
          }
        },
        afterLoad: function (anchorLink, index) {},
        afterRender: function () {
          $("#pp-nav").hide();
        },
      });
    }
    $(".side-menu").removeClass("hidden");
    setTimeout(function () {
      $(".loader-bg").fadeToggle();
    }, 1500);
    $(".navbar-collapse .navbar-nav .nav-link:nth-child(2)").removeClass(
      "active"
    );
  });
  jQuery(function ($) {
    "use strict";
    $(window).on("scroll", function () {
      if ($(this).scrollTop() > 260) {
        $("header").addClass("header-appear");
      } else {
        $("header").removeClass("header-appear");
      }
    });
    $(window).on("scroll", function () {
      if ($(this).scrollTop() > 500) $(".scroll-top-arrow").fadeIn("slow");
      else $(".scroll-top-arrow").fadeOut("slow");
    });
    $(document).on("click", ".scroll-top-arrow", function () {
      $("html, body").animate({ scrollTop: 0 }, 800);
      return false;
    });
    $(".scroll").on("click", function (event) {
      event.preventDefault();
      $("html,body").animate(
        { scrollTop: $(this.hash).offset().top - 60 },
        1200
      );
    });
    $(".slider-btn").on("click", function (event) {
      event.preventDefault();
      $("html,body").animate(
        { scrollTop: $(this.hash).offset().top - 60 },
        1200
      );
    });
    if ($("#sidemenu_toggle").length) {
      $("#sidemenu_toggle").on("click", function () {
        $(".pushwrap").toggleClass("active");
        $(".side-menu").addClass("side-menu-active"),
          $("#close_side_menu").fadeIn(700);
      }),
        $("#close_side_menu").on("click", function () {
          $(".side-menu").removeClass("side-menu-active"),
            $(this).fadeOut(200),
            $(".pushwrap").removeClass("active");
        }),
        $(".side-nav .navbar-nav .nav-link").on("click", function () {
          $(".side-menu").removeClass("side-menu-active"),
            $("#close_side_menu").fadeOut(200),
            $(".pushwrap").removeClass("active");
        }),
        $("#btn_sideNavClose").on("click", function () {
          $(".side-menu").removeClass("side-menu-active"),
            $("#close_side_menu").fadeOut(200),
            $(".pushwrap").removeClass("active");
        });
    }
    $(".progress-bar").each(function () {
      $(this).appear(function () {
        $(this).animate({ width: $(this).attr("aria-valuenow") + "%" }, 2000);
      });
    });
    $("[data-fancybox]").fancybox({
      protect: true,
      animationEffect: "fade",
      hash: null,
    });
    $(".team-classic.owl-team").owlCarousel({
      items: 3,
      margin: 30,
      dots: false,
      nav: false,
      loop: true,
      autoplay: false,
      smartSpeed: 500,
      navSpeed: true,
      autoplayHoverPause: true,
      responsiveClass: true,
      responsive: {
        992: { items: 3 },
        600: { items: 2 },
        320: { items: 1 },
        280: { items: 1 },
      },
    });
    $(".ini-customNextBtn").click(function () {
      var owl = $(".team-classic.owl-team");
      owl.owlCarousel();
      owl.trigger("next.owl.carousel");
    });
    $(".ini-customPrevBtn").click(function () {
      var owl = $(".team-classic.owl-team");
      owl.owlCarousel();
      owl.trigger("prev.owl.carousel", [300]);
    });
    $("#testimonial-carousal").owlCarousel({
      loop: true,
      margin: 120,
      nav: false,
      dots: true,
      autoplay: true,
      responsive: { 0: { items: 1 }, 600: { items: 1 }, 1000: { items: 2 } },
    });
  });
}
/*
     FILE ARCHIVED ON 22:50:19 Sep 30, 2024 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 04:33:13 Oct 30, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.599
  exclusion.robots: 0.02
  exclusion.robots.policy: 0.009
  esindex: 0.011
  cdx.remote: 26.637
  LoadShardBlock: 368.682 (3)
  PetaboxLoader3.datanode: 145.371 (4)
  PetaboxLoader3.resolve: 342.891 (2)
  load_resource: 146.617
*/
