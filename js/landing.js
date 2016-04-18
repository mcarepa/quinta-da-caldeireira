function resizeLandingCover() {
  var wHeight = $(window).height();
  $('.js-landing-cover').height(wHeight);
  $('.js-landing-main').css('margin-top', wHeight);
}

$(function() {
  resizeLandingCover();

  $('.js-scroll-btn').on('click', function(e) {
    e.preventDefault();
    $("html, body").animate({scrollTop: $(window).height()}, 600);
  });
});

$(window).resize(function(){
  resizeLandingCover();
});
