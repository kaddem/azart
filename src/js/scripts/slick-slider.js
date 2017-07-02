$(document).ready(function(){
  console.log("work");

  function sliderRoomPage(id) {

    $(id).slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
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