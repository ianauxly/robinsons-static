"use strict";

$(document).ready(function() {

  //* Overlay Toggle
  //  ==========================================================================
  var $newsletterNav,
      $overlay,
      $overlayClose,
      $body,
      $newsletterNavButton,
      $mobileNewsletterNavButton;

   $newsletterNav = $(".newsletterNavButton");
   $overlay = $("#overlay");
   $overlayClose = $(".overlay-close");
   $body = $("body");
   $newsletterNavButton = $('.newsletter-button');
   $mobileNewsletterNavButton = $('#mobileNewsletterNavButton');


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


  $mobileNewsletterNavButton.click(function() {
    $mobileMenu.removeClass("active");
    $mobileMenu.addClass("closed");
    $overlay.addClass("active");
    $overlay.removeClass("closed");
  });

  // $(document).on('click', function (e) {
  //     if (
  //       $(e.target).closest("#newsletter").length === 0 &&
  //       $(e.target).closest("#newsletterNavButton").length === 0
  //     ) {
  //         $overlay.removeClass("active");
  //         $overlay.addClass("closed");
  //         // $body.removeClass("scroll-pause");
  //     } else if (
  //       $(e.target).closest("#newsletter").length === 0 &&
  //       $(e.target).closest("#newsletterNavButton").length === 0 &&
  //       $(e.target).closest("#menuMobileToggle").length === 0
  //     ) {
  //       $body.removeClass("scroll-pause");
  //     }
  // });

  $(document).on('click', function (e) {
      if (
        $(e.target).closest("#newsletter").length === 0 &&
        $(e.target).closest(".newsletterNavButton").length === 0 &&
        $(e.target).closest("#menuMobileToggle").length === 0 &&
        $(e.target).closest("#mobileNewsletterNavButton").length === 0
      ) {
        $body.removeClass("scroll-pause");
        $overlay.removeClass("active");
        $overlay.addClass("closed");
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


      //* Remove 'Cannabis' From Nav Title on Mobile
      //  ==========================================================================
      var eventFired,
          $navHomeButtonText;

          eventFired = 0;
          $navHomeButtonText = $('#home-button a');

          function homeButtonRemoveCannabis() {
            $navHomeButtonText.text('Robinsons');
          }

          function homeButtonAddCannabis() {
            $navHomeButtonText.text('Robinsons Cannabis');
          }

      if ($(window).width() < 1045) {
          homeButtonRemoveCannabis();
      }
      else {
          homeButtonAddCannabis();
      }

      $(window).on('resize', function() {
          if (!eventFired) {
              if ($(window).width() < 1045) {
                  homeButtonRemoveCannabis();
              } else {
                  homeButtonAddCannabis();
              }
          }
      });

});
