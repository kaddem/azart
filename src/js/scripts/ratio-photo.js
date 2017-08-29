$(window).load(function() {

  function ratioPhoto(block) {
    $(block).each(function(){
      var itemWidth = $(this).width();
      var itemHeight = $(this).height();
      var itemRatio = itemHeight / itemWidth;

      var photo = $(this).find('img');
      var photoWidth = photo.width();
      var photoHeight = photo.height();
      var photoRatio = photoHeight / photoWidth;

      // if ( itemRatio < photoRatio ) {
      //   photo.width('100%');
      //   photo.height('auto');
      // } else if (itemRatio > photoRatio) {
      //   photo.height('100%');
      //   photo.width('auto');
      // } else {
      //   photo.width('100%');
      //   photo.height('auto');
      // }

      if ( itemRatio < photoRatio ) {
        $(photo).attr({
          "width": "100%",
          "height": "auto"
        });
        // photo.width('100%');
        // photo.height('auto');
      } else if (itemRatio > photoRatio) {
        $(photo).attr({
          "width": "auto",
          "height": "100%"
        });
        // photo.height('100%');
        // photo.width('auto');
      } else {
        $(photo).attr({
          "width": "100%",
          "height": "auto"
        });
        // photo.width('100%');
        // photo.height('auto');
      }
    });
  }

  function ratioLetter(block) {
    $(block).each(function(){
      var itemWidth = $(this).width();
      var itemHeight = $(this).height();
      var itemRatio = itemHeight / itemWidth;

      var photo = $(this).find('img');
      var photoWidth = photo.width();
      var photoHeight = photo.height();
      var photoRatio = photoHeight / photoWidth;

      if ( itemRatio > photoRatio ) {
        $(photo).attr({
          "width": "100%"
        });
        // photo.width('100%');
      } else if (itemRatio < photoRatio) {
        // photo.height('100%');
        $(photo).attr({
          "height": "100%"
        });
      } else {
        $(photo).attr({
          "width": "100%"
        });
        // photo.width('100%');
      }
    });
  }

  ratioPhoto('.offers-content__photo-box');
  ratioPhoto('.slider__item');
  // ratioPhoto('.city__photo');
  ratioPhoto('.excursion__photo');
  
  window.addEventListener("resize", function() {

    ratioPhoto('.offers-content__photo-box');
    ratioPhoto('.slider__item');
    // ratioPhoto('.city__photo');
    ratioPhoto('.excursion__photo');

  }, false);

  // $(window).resize(function(){
    

  // });

});