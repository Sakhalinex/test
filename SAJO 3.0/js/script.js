// Слайдер на главной
$(document).ready(function(){
    $('.slider').slick({
        arrows:false,
        dots:true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 6000,
    });
});

//Каталог на главной
$(function() {
    $(".sorting__item").click(function() {
        $(".sorting__item").removeClass("active");         
        $(this).toggleClass("active");
    })
});

//Диапазон цен на главной
$( function() {
    $( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 30000,
      values: [ 5000, 20000 ],
      slide: function( event, ui ) {
        $( "#amount_1" ).val( ui.values[ 0 ] );
        $( "#amount_2" ).val( ui.values[ 1 ] );
      }
    });
    $( "#amount_1" ).val( $( "#slider-range" ).slider( "values", 0 ) );
    $( "#amount_2" ).val( $( "#slider-range" ).slider( "values", 0 ) );
  } );

// Бургер на мобильных телефонах
$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger, .header__menu').toggleClass('active');
    });
});

//
////Табы на главной
//(function($) {
//$(function() {
//  
//  $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
//    $(this)
//      .addClass('active').siblings().removeClass('active')
//      .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
//  });
//  
//});
//})(jQuery);
//
//
////Выпадающее меню
//$(document).ready(function() {
//    $('.open-sub').click(function(event) {
//        $('.open-sub, .sub-menu-block').toggleClass('active');
//    });
//});
//
////Табы на карточке товара
//(function($) {
//$(function() {
//  
//  $('ul.tabs__caption-product').on('click', 'li:not(.active)', function() {
//    $(this)
//      .addClass('active').siblings().removeClass('active')
//      .closest('div.tabs-product').find('div.tabs__content-product').removeClass('active').eq($(this).index()).addClass('active');
//  });
//  
//});
//})(jQuery);
//
//// Слайдер на карточке товара
//
//$(document).ready(function(){
//    $('.other-goods__items').slick({
//        arrows:true,
//        dots:false,
//        slidesToShow: 3,
//        slidesToScroll: 1,
//
//        
//    });
//});
//
////Большой слайдер на карточке
//
//$(document).ready(function(){
//    $('.viewed__slider').slick({
//        arrows:true,
//        dots:false,
//        slidesToShow: 4,
//        slidesToScroll: 1,
//
//        
//    });
//});
//
////Приоритет загрузки JS(Оптимизация скорости загрузки)
//
//function downloadJSAtOnload() {
//      var element = document.createElement("script");
//      element.src = "script.js";
//      document.body.appendChild(element);
//   }
//   if (window.addEventListener)
//      window.addEventListener("load", downloadJSAtOnload, false);
//   else if (window.attachEvent)
//      window.attachEvent("onload", downloadJSAtOnload);
//   else window.onload = downloadJSAtOnload;
//
//
////Ассортимент - фильтр
//$(document).ready(function() {
//    $('.open__sub-filtr').click(function(event) {
//        $('.open__sub-filtr, .sub-filtr').toggleClass('active');
//    });
//});
//$(document).ready(function() {
//    $('.open__sub-filtr-2').click(function(event) {
//        $('.open__sub-filtr-2, .sub-filtr-2').toggleClass('active');
//    });
//});
//$(document).ready(function() {
//    $('.open__sub-filtr-3').click(function(event) {
//        $('.open__sub-filtr-3, .sub-filtr-3').toggleClass('active');
//    });
//});
//$(document).ready(function() {
//    $('.open__sub-filtr-4').click(function(event) {
//        $('.open__sub-filtr-4, .sub-filtr-4').toggleClass('active');
//    });
//});
//$(document).ready(function() {
//    $('.open__sub-filtr-5').click(function(event) {
//        $('.open__sub-filtr-5, .sub-filtr-5').toggleClass('active');
//    });
//});
//
////Ассортимент - диапазон слайдер
//$( function() {
//    $( "#slider-range" ).slider({
//      range: true,
//      min: 0,
//      max: 30000,
//      values: [ 75, 300 ],
//      slide: function( event, ui ) {
//        $( "#amount" ).val( "от" + " " + ui.values[ 0 ] + " " + "руб" );
//        $( "#amount_1" ).val( "до" + " " + ui.values[ 1 ] + " " + "руб" );
//      }
//    });
//    $( "#amount" ).val( "от" + " " + $( "#slider-range" ).slider( "values", 0 ) + " "  + "руб" );
//    $( "#amount_1" ).val( "до" + " " + $( "#slider-range" ).slider( "values", 1 ) + " "  + "руб" );
//  } );
