$(window).on('scroll', function(e) {

  if ( $(window).scrollTop() > 170 ) {
    $('.page-header').addClass('page-header--scroll');
  } else {
    $('.page-header').removeClass('page-header--scroll');
  }

});