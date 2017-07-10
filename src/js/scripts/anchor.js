$(document).ready(function(){

  function anchorScroll(boxAnchorLink){
    $(boxAnchorLink + ' a').on('click', function(e){
        e.preventDefault();
        var attr = $(this).attr('href').substring(1);
        var currentPosition = $(document).scrollTop();
        var idPosition = $('#'+attr).offset().top;
        var scrollTime = Math.abs(currentPosition - idPosition) / 4; // Math.abs - модуль числа.
        $('body,html').animate({'scrollTop':idPosition-70},scrollTime);
    });
  };

  anchorScroll('.page-header__main-nav');
  anchorScroll('.page-footer__nav');

});