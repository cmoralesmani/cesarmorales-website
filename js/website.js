$(document).ready(function(e){
  $('#navigation').scrollToFixed();
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
