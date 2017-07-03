$(window).on('scroll', function(e) {

  if ( $(window).scrollTop() > 70 ) {
    $('.page-header').addClass('page-header--scroll');
  } else {
    $('.page-header').removeClass('page-header--scroll');
  }

});