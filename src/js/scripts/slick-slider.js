$(document).ready(function(){
  console.log("work");

  function sliderRoomPage(id) {

    $(id).slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: id + '-box .rooms__arrow--prev',
      nextArrow: id + '-box .rooms__arrow--next',
      // fade: true,
      dots: true
    });
  
  }

  sliderRoomPage("#single");
  sliderRoomPage("#double");
  sliderRoomPage("#double-window");
  sliderRoomPage("#double-super");
  sliderRoomPage("#family");
  sliderRoomPage("#delux");

  function sliderSingleRoom(id) {

    $(id).slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      // fade: true,
      dots: false
    });
  
  }

  sliderSingleRoom("#rooms-slider");


  function sliderCity(id) {

    $(id).slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: true,
      centerMode: true,
      focusOnSelect: true
    });
  
  }

  sliderCity("#city-slider");
  sliderCity("#excursion-slider");
  

});