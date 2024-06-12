$(function () {
  $(".hamburger-button").on("click", function() {
    $("html").toggleClass("js-active");
    $(".header__nav").toggleClass("js-active");
    $(".hamburger-button__line").toggleClass("js-active")
  });
});
