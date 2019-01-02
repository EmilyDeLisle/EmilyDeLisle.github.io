$(document).ready(function() {

  // Navigation animations
  $(".pageNav").click(function(e) {
    e.preventDefault();
    $("html, body").animate({
      scrollTop: $($(this).attr('href')).offset().top
    }, 500, 'linear');
  });

  // Technology and project image animations
  $(".hover").hover(
    function() {
      $(this).children("div").fadeIn();
      $(this).children("img").animate({opacity: "0.3"});},
    function() {
      $(this).children("div").fadeOut();
      $(this).children("img").animate({opacity: "1"});}
  );

});
