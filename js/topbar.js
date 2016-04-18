$(function() {
  var navbarFixed = false;
  var height;

  if ($('.gallery-cover').length) {
    height = 150;
  } else {
    height = $(window).height() - 130;
  }

  $(window).scroll(function() {
    if(!navbarFixed) {
      if ($(this).scrollTop() > height) {
        $('.navbar-fixed').stop().animate({'top': 0}, 550);
        navbarFixed = true;
      }
    } 
    else {
      if ($(this).scrollTop() <= height) {
        $('.navbar-fixed').stop().animate({'top': '-90px'}, 300);
        navbarFixed = false;
      }
    }
  });
});
