function parallax(elm, factor) {
  var pos = elm.offset().top;
  var scrolled = $(window).scrollTop();
  elm.css('top', - ((pos - scrolled) * factor) + 'px');
}

$(window).scroll(function() {
  $('.js-parallax').each(function() {
    parallax($(this), 0.15);
  });
});
