$(function() {
  var wHeight = $(window).height();

  autosize($('textarea'));

  $('.venobox').venobox({
    numeratio: true,
    infinigall: true
  });

  //frameheight: wHeight - 100 + 'px'

  $('.image-separator:not(.with-slideshow), .gallery-cover-image, .gallery-photo-inner').imagefill();

  $(window).scroll(function() {
    var height;

    if ($('.gallery-cover').length) {
      height = 0;
    } else {
      height = $(window).height() + 400;
    }

    if ($(this).scrollTop() >= height) {
      $('.footer').show();
    } else {
      $('.footer').hide();
    }
  });
});

$(window).load(function(){
  $('.js-slideshow').flexslider({
    animation: 'slide',
    slideshowSpeed: 7000,
    animationSpeed: 1000,
    controlNav: false,
    directionNav: false,
    keyboard: false
  });
});
