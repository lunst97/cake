$(function(){
  $('.header-list-a').click(function(){
    var id = $(this).attr('href');

    $('html, body').animate({
      scrollTop: ($(id).offset().top)
    }, 600);
  });
});
