$(document).ready(function(){

    // if( $(window).width() > 768 ) {
    //   owlNews();
    // }

    // $( window ).resize(function() {
    //   if( $(".news__carousel").hasClass("slick-initialized") ) {
    //     console.log('init done');
    //     return;
    //   } else if ( $(window).width() > 768 ) {
    //     owlNews();
    //   }
    // });

    function owlNews() {
      $('#news-carousel').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        // arrows: false,
        fade: true,
        dots: false,

        responsive: [
          {
            breakpoint: 768,
            adaptiveHeight: true
            // settings: "unslick"
          }
        ]
      });
    }
    
    owlNews();


});