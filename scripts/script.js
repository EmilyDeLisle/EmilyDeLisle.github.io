// Navigation controls
$("#aboutLink").on('click', function (e) {
  e.preventDefault();
  $("html, body").animate({
    scrollTop: $($(this).attr('href')).offset().top
  }, 500, 'linear');
});

$("#projectsLink").on('click', function (e) {
  e.preventDefault();
  $("html, body").animate({
    scrollTop: $($(this).attr('href')).offset().top
  }, 500, 'linear');
});

$("#contactLink").on('click', function (e) {
  e.preventDefault();
  $("html, body").animate({
    scrollTop: $($(this).attr('href')).offset().top
  }, 500, 'linear');
});

$("#navLink").on('click', function (e) {
  e.preventDefault();
  $("html, body").animate({
    scrollTop: $($(this).attr('href')).offset().top
  }, 500, 'linear');
});

$("#topLink").on('click', function (e) {
  e.preventDefault();
  $("html, body").animate({
    scrollTop: $($(this).attr('href')).offset().top
  }, 500, 'linear');
});