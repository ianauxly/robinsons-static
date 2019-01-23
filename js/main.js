"use strict";

$(document).ready(function() {

  //* Overlay Toggle
  //  ==========================================================================
  var $newsletterNav,
      $overlay,
      $overlayClose,
      $body,
      $newsletterNavButton;

   $newsletterNav = $("#newsletterNavButton");
   $overlay = $("#overlay");
   $overlayClose = $(".overlay-close");
   $body = $("body");
   $newsletterNavButton = $('.newsletter-button');


  $newsletterNav.click(function() {
      $overlay.addClass("active");
      $overlay.removeClass("closed");
      $body.addClass("scroll-pause");
  });

  $newsletterNavButton.click(function(event) {
      event.stopPropagation();

      $overlay.addClass("active");
      $overlay.removeClass("closed");
      $body.addClass("scroll-pause");
  });

  $overlayClose.click(function() {
      $overlay.removeClass("active");
      $overlay.addClass("closed");
      $body.removeClass("scroll-pause");
  });

  $(document).on('click', function (e) {
      if (
        $(e.target).closest("#newsletter").length === 0 &&
        $(e.target).closest("#newsletterNavButton").length === 0
      ) {
          $overlay.removeClass("active");
          $overlay.addClass("closed");
          // $body.removeClass("scroll-pause");
      } else if (
        $(e.target).closest("#newsletter").length === 0 &&
        $(e.target).closest("#newsletterNavButton").length === 0 &&
        $(e.target).closest("#menuMobileToggle").length === 0
      ) {
        $body.removeClass("scroll-pause");
      }
  });

  //* MOBILE Overlay Toggle
  //  ==========================================================================
  var $mobileMenuToggleButton,
      $mobileMenu,
      $mobileMenuClose;

      $mobileMenuToggleButton = $('#menuMobileToggle');
      $mobileMenu = $('#mobileMenu');
      $mobileMenuClose = $('#mobileMenu .overlay-close');

      $mobileMenuToggleButton.click(function() {
        $mobileMenu.toggleClass("active");
        $mobileMenu.toggleClass("closed");
        $body.toggleClass("scroll-pause");
      });

      $mobileMenuClose.click(function() {
          $mobileMenu.removeClass("active");
          $mobileMenu.addClass("closed");
          $body.removeClass("scroll-pause");
      });


  //* Header Disappear/Reappear on Scroll
  //  ==========================================================================

  // var lastScrollTop,
  //     $header;
  //
  // lastScrollTop = 0;
  // $header = $('header');
  //
  // $(window).scroll(function(){
  //    var st = $(this).scrollTop();
  //    if (st > lastScrollTop){
  //        // downscroll code
  //        $header.addClass('hideOnScroll');
  //    } else {
  //       // upscroll code
  //       $header.removeClass('hideOnScroll');
  //    }
  //    lastScrollTop = st;
  // });
});
