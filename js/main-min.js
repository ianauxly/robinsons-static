"use strict";$(document).ready(function(){var e,s,l,t;e=$("#newsletterNavButton"),s=$("#overlay"),l=$(".overlay-close"),t=$("body"),e.click(function(){s.addClass("active"),s.removeClass("closed"),t.addClass("scroll-pause")}),l.click(function(){s.removeClass("active"),s.addClass("closed"),t.removeClass("scroll-pause")}),$(document).on("click",function(e){0===$(e.target).closest("#newsletter").length&&0===$(e.target).closest("#newsletterNavButton").length&&(s.removeClass("active"),s.addClass("closed"),t.removeClass("scroll-pause"))})});