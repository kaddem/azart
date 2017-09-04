$(document).ready(function(){

  function bNovoIndexRu() {

    Bnovo_Widget.init(function(){
      Bnovo_Widget.open('_bn_widget_', {
        type: "horizontal",
        lcode: "1492614572",
        layout: "demetra",
        lang: "ru",
        width: "100%",
        background: "#ffffff",
        bg_alpha: "0",
        padding: "0",
        border_radius: "4",
        font_type: "arial",
        font_color: "#333333",
        font_size: "15",
        without_title: "on",
        title_color: "#222222",
        title_size: "18",
        inp_color: "#333333",
        inp_bordhover: "#ffffff",
        inp_bordcolor: "#ffffff",
        inp_alpha: "100",
        btn_background: "#fe8205",
        btn_background_over: "#fe9934",
        btn_textcolor: "#ffffff",
        btn_textover: "#ffffff",
        btn_bordcolor: "#fe8205",
        btn_bordhover: "#fe9934",
        btn_text: "Бронировать номер",
        arrival: "Заезд",
        departure: "Выезд",
        text_concierge: "Получи скидку через Bnovo Concierge",
        // url: "http://azart-test.kademidov.com.swtest.ru/booking.html"
      });
    });
  }

  function bNovoIndexEn() {

    Bnovo_Widget.init(function(){
      Bnovo_Widget.open('_bn_widget_', {
        type: "horizontal",
        lcode: "1492614572",
        layout: "demetra",
        lang: "en",
        width: "100%",
        background: "#ffffff",
        bg_alpha: "0",
        padding: "0",
        border_radius: "4",
        font_type: "arial",
        font_color: "#333333",
        font_size: "15",
        without_title: "on",
        title_color: "#222222",
        title_size: "18",
        inp_color: "#333333",
        inp_bordhover: "#ffffff",
        inp_bordcolor: "#ffffff",
        inp_alpha: "100",
        btn_background: "#fe8205",
        btn_background_over: "#fe9934",
        btn_textcolor: "#ffffff",
        btn_textover: "#ffffff",
        btn_bordcolor: "#fe8205",
        btn_bordhover: "#fe9934",
        btn_text: "Booking",
        arrival: "Arrival",
        departure: "Departure",
        text_concierge: "Получи скидку через Bnovo Concierge",
        // url: "http://azart-test.kademidov.com.swtest.ru/booking.html"
      });
    });
  }

  function bNovoRoomRu() {
    Bnovo_Widget.init(function(){
      Bnovo_Widget.open('_bn_widget_', {
        type: "vertical",
        lcode: "1492614572",
        lang: "ru",
        width: "100%",
        background: "#ffffff",
        bg_alpha: "100",
        padding: "30",
        border_radius: "4",
        font_type: "arial",
        font_color: "#333333",
        font_size: "15",
        without_title: "on",
        title_color: "#222222",
        title_size: "18",
        inp_color: "#333333",
        inp_bordhover: "#cccccc",
        inp_bordcolor: "#cccccc",
        inp_alpha: "100",
        btn_background: "#fe8205",
        btn_background_over: "#fe9934",
        btn_textcolor: "#ffffff",
        btn_textover: "#ffffff",
        btn_bordcolor: "#fe8205",
        btn_bordhover: "#fe9934",
        btn_text: "Бронировать номер",
        arrival: "Заезд",
        departure: "Выезд",
        text_concierge: "Получи скидку через Bnovo Concierge",
        adults: "2"
      });
    });

  }

  function bNovoRoomEn() {

    Bnovo_Widget.init(function(){
      Bnovo_Widget.open('_bn_widget_', {
        type: "vertical",
        lcode: "1492614572",
        lang: "en",
        width: "100%",
        background: "#ffffff",
        bg_alpha: "100",
        padding: "30",
        border_radius: "4",
        font_type: "arial",
        font_color: "#333333",
        font_size: "15",
        without_title: "on",
        title_color: "#222222",
        title_size: "18",
        inp_color: "#333333",
        inp_bordhover: "#cccccc",
        inp_bordcolor: "#cccccc",
        inp_alpha: "100",
        btn_background: "#fe8205",
        btn_background_over: "#fe9934",
        btn_textcolor: "#ffffff",
        btn_textover: "#ffffff",
        btn_bordcolor: "#fe8205",
        btn_bordhover: "#fe9934",
        btn_text: "Booking",
        arrival: "Arrival",
        departure: "Departure",
        text_concierge: "Получи скидку через Bnovo Concierge",
        adults: "2"
      });
    });

  }

  var indexPromo = $('.promo');
  var checkElem = $('.current-lang');

  // if ( $(indexPromo).length != 0 ){
  //   bNovoIndexRu();
  // } else {
  //   if ( $(checkElem).hasClass('menu-link-en') ) {
  //       bNovoRoomEn();
  //   } else if ( $(checkElem).hasClass('menu-link-ru') ) {
  //       bNovoRoomRu();
  //   }
  // }

    if ( $(checkElem).hasClass('lang-item-en') ) {
        if ( $(indexPromo).length != 0 ){
            bNovoIndexEn();
        } else {
            bNovoRoomEn();
        }
    } else if ( $(checkElem).hasClass('lang-item-ru') ) {
        if ( $(indexPromo).length != 0 ){
            bNovoIndexRu();
        } else {
            bNovoRoomRu();
        }
    }

});