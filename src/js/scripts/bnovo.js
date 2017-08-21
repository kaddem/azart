$(document).ready(function(){

  function bNovoIndex() {

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
        arrival: "Заезд",
        departure: "Выезд",
        text_concierge: "Получи скидку через Bnovo Concierge",
        // url: "http://azart-test.kademidov.com.swtest.ru/booking.html"
      });
    });

  }

  function bNovoRoom() {
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
        btn_text: "Забронировать",
        text_concierge: "Получи скидку через Bnovo Concierge",
        adults: "2"
      });
    });

    // Bnovo_Widget.init(function(){
    //   Bnovo_Widget.open('_bn_widget_', {
    //     // type: "vertical",
    //     // lcode: "1492614572",
    //     layout: "demetra",
    //     // lang: "ru",
    //     // width: "100%",
    //     background: "#ffffff",
    //     // bg_alpha: "0",
    //     // padding: "0",
    //     // border_radius: "4",
    //     // font_type: "arial",
    //     // font_color: "#333333",
    //     // font_size: "15",
    //     without_title: "on",
    //     title_color: "#222222",
    //     title_size: "18",
    //     inp_color: "#333333",
    //     inp_bordhover: "#ffffff",
    //     inp_bordcolor: "#ffffff",
    //     inp_alpha: "100",
    //     btn_background: "#fe8205",
    //     btn_background_over: "#fe9934",
    //     btn_textcolor: "#ffffff",
    //     btn_textover: "#ffffff",
    //     btn_bordcolor: "#fe8205",
    //     btn_bordhover: "#fe9934",
    //     arrival: "Заезд",
    //     departure: "Выезд",
    //     text_concierge: "Получи скидку через Bnovo Concierge",
    //     // url: "http://azart-test.kademidov.com.swtest.ru/booking.html"
    //     adults: "2"
    //   });
    // });

  }

  var indexPromo = $('.promo');

  if ( $(indexPromo).length != 0 ){
    bNovoIndex();
  } else {
    bNovoRoom();
  }

});
