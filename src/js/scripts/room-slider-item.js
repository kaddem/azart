$(document).ready(function(){

  var elemSlider = $('.rooms-slider__item');
  var qltElemSlider = $(elemSlider).length;

  var thisNumElem = $('.rooms-slider__num-this');
  var allNumElem = $('.rooms-slider__num-full');

  if ( String(qltElemSlider).length < 2 ) {
    $(allNumElem).text('0'+qltElemSlider);
  } else {
    $(allNumElem).text(qltElemSlider);
  }


  for (var i = 0; i < qltElemSlider; ++i) {
    var num = i + 1;

    if ( String(num).length < 2 ) {
      $(thisNumElem).eq(i).text('0'+num);
    } else {
      $(thisNumElem).eq(i).text(num);
    }

  }

});