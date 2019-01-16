"use strict";

$(document).ready(function() {

  //* Overlay Toggle
  //  ==========================================================================
  var $newsletterNav,
      $overlay,
      $overlayClose;

   $newsletterNav = $("#newsletterNavButton");
   $overlay = $("#overlay");
   $overlayClose = $(".overlay-close");

  $newsletterNav.click(function() {
      $overlay.addClass("active");
      $overlay.removeClass("closed");
  });

  $overlayClose.click(function() {
      $overlay.removeClass("active");
      $overlay.addClass("closed");
  });

  $(document).on('click', function (e) {
      if (
        $(e.target).closest("#newsletter").length === 0 &&
        $(e.target).closest("#newsletterNavButton").length === 0
      ) {
          $overlay.removeClass("active");
          $overlay.addClass("closed");
      }
  });

});
