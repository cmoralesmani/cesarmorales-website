$(document).ready(function(e){
  $('#navigation').scrollToFixed();
  $('.res-nav_click').on('click',function(){
    $('.main-nav').slideToggle();
    return false;
  });
});

// Cuando la pagina este completamente cargada incluido los graficos
$(window).on('load',function(){
  $('.main-nav li a, .servicelink').bind('click', function(event){
    var $anchor = $(this);
    var $section = '.' + $anchor.attr('data-ref');
    $('html, body').stop().animate({
      scrollTop: $($section).offset().top - 55
    }, 1500,'easeInOutExpo');

    if($(window).width() < 768){
      $('.main-nav').hide();
    }

    event.preventDefault();
  });
});

// Scroll hacia la seccion a la que este indicada en data-ref de la etiqueta a
$('a').click(function(e){
  var section = $(this).attr('data-ref');

  if(section){
    section = '.' + section;
    console.log(section);
    $('html, body').animate({
      scrollTop: $(section).offset().top
    });

    e.preventDefault();
  }
});
