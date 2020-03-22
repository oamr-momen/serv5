(function(){

  // ********************* Start reload on resize *********************
  // $(window).resize(function() {
  //   location.reload();
  // });
  // ********************* End reload on resize *********************


  // ********************* Start Header *********************
  $('.header').css("minHeight",$(window).height());
  // ********************* End Header *********************


  // ********************* Start navbar ********************* 
  if ($(document).width() >= 992) {
    $('.nav-item').hover(function(){
      $(this).find('.myDropMenu').css({
        opacity: "1",
        visibility: "visible",
      })
      // arrow changing
      $(this).find('.myDropLink .icon').css({
        transform: "rotateZ(" + 90 + 'deg' + ")"
      });
    },function(){
      $(this).find('.myDropMenu').css({
        opacity: "0",
        visibility: "hidden",
      })
      $(this).find('.myDropLink .icon').css({
        transform: "rotateZ(" + 0 + 'deg' + ")"
      });
    });
  }  else {
    $('.nav-item').on('click',function(){
      $(this).find('.myDropMenu').slideToggle();
      $(this).toggleClass("iHere");
      if ($(this).hasClass('iHere')) {
        $(this).find('.myDropLink .icon').css({
          transform: "rotateZ(" + 90 + 'deg' + ")"
        });
      } else {
        $(this).find('.myDropLink .icon').css({
          transform: "rotateZ(" + 0 + 'deg' + ")"
        });
      }
    });
    // arrow changing

    // logo cusomization
    $('.logo a').removeClass('hvr-pulse');
  }
  // ********************* End navbar ************************** 


  // ********************* Start Sync navbar items ************************** 
  $('.header .nav-item .nav-link').on('click',function(){
    $('html , body').animate({
      scrollTop: $("#" + $(this).data('scroll')).offset().top +20
    },700)
  });
  // ********************* End Sync navbar items ************************** 

  // ********************* Start ScrollToTop & down ************************** 
  $(window).on('scroll',function(){
    if ($(window).scrollTop() >= 700) {
      $('.scrollToTop').css({
        opacity: "1",
        visibility: "visible"
      });
    } else {
      $('.scrollToTop').css({
        opacity: "0",
        visibility: "hidden"
      });
    }
  });
  $('.scrollToTop').on('click',function(){
    $('body,html').animate({
      scrollTop: 0
    })
  });

  $('.goDown').on('click',function(){
    $('body,html').animate({
      scrollTop: $('.about-us').offset().top +20
    },700);
  });
  // ********************* End ScrollToTop & down  ************************** 



  // ********************* Start Loading page *********************
  $(window).on("load", function() {
    $(".loading-overlay").fadeOut();
  });
  // ********************* End Loading page *********************

















})();


  if ($(window).width() >= 992) {
    // Start trigger NiceScroll
      $("body").niceScroll({
        cursorcolor: "#333",
        cursorwidth: "13px",
        background: "",
        cursorborder: "1px solid aquamarine",
        cursorborderradius: 10,
        zindex: 999,
      });
    // End trigger NiceScroll
  }


  // Start trigger owl portfolio
  $(".owl-carousel-one").owlCarousel({
    items: 1,
    dots: false,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    loop: true
  });
  $(".owl-carousel-tow").owlCarousel({
    items: 1,
    dots: false,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    loop: true
  });
  $('.navs .next').click(function(){
    $('.portfolio .owl-next').click();
  });
  $('.navs .prev').click(function(){
    $('.portfolio .owl-prev').click();
  });
  // End trigger owl portfolio


  // Start trigger owl 
  $(".owl-carousel-three").owlCarousel({
    items: 1,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    loop: true
  });
  // End trigger owl


  // Start Trigger WoW.js
  var wow = new WOW(
    {
      offset: 150,
    }
  );
  wow.init();
  // End Trigger WoW.js

