"use strict";

$(document).ready(function() {

  //* Overlay Toggle
  //  ==========================================================================
  var $newsletterNav,
      $overlay,
      $overlayClose,
      $body;

   $newsletterNav = $("#newsletterNavButton");
   $overlay = $("#overlay");
   $overlayClose = $(".overlay-close");
   $body = $("body");

  $newsletterNav.click(function() {
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
          $body.removeClass("scroll-pause");
      }
  });

});
