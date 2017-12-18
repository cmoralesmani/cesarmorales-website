$(document).ready(function(e){
  $('#navigation').scrollToFixed();
});

// Cuando la pagina este completamente cargada incluido los graficos
$(window).on('load',function(){
  $('.main-nav li a, .servicelink').bind('click', function(event){
    var $anchor = $(this);
    var $section = '.' + $anchor.attr('data-ref');
    $('html, body').stop().animate({
      scrollTop: $($section).offset().top - 71
    }, 1500,'easeInOutExpo');
    event.preventDefault();
  });
});

// Scroll hacia la seccion a la que este indicada en data-ref de la etiqueta a
$('a').click(function(e){
  var section = $(this).attr('data-ref');
  section = '.' + section;
  if(section){
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $(section).offset().top
    });
  }
});
