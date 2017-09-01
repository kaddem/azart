$(window).on('scroll', function(e) {

  if ( $(window).scrollTop() > 170 ) {

    $('.page-header').addClass('page-header--scroll');
    $('.rooms-slider').css({
      "padding-top": "253px"
    });

    $('.promo').css({
      "margin-top": "143px"
    });
  } else {
    $('.page-header').removeClass('page-header--scroll');
    $('.rooms-slider').css({
      "padding-top": "175px"
    });

    $('.promo').css({
      "margin-top": "0"
    });
  }

});