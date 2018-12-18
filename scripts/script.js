// Navigation controls
$(document).ready(function() {
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

  // Technology animations
  $("#htmlImage").hover(
    function() {
      $(this).children("div").fadeIn();
      $(this).children("img").animate({opacity: "0.3"});},
    function() {
      $(this).children("div").fadeOut();
      $(this).children("img").animate({opacity: "1"});}
  );

  $("#cssImage").hover(
    function() {
      $(this).children("div").fadeIn();
      $(this).children("img").animate({opacity: "0.3"});},
    function() {
      $(this).children("div").fadeOut();
      $(this).children("img").animate({opacity: "1"});}
  );

  $("#jsImage").hover(
    function() {
      $(this).children("div").fadeIn();
      $(this).children("img").animate({opacity: "0.3"});},
    function() {
      $(this).children("div").fadeOut();
      $(this).children("img").animate({opacity: "1"});}
  );

  $("#bsImage").hover(
    function() {
      $(this).children("div").fadeIn();
      $(this).children("img").animate({opacity: "0.3"});},
    function() {
      $(this).children("div").fadeOut();
      $(this).children("img").animate({opacity: "1"});}
  );

  $("#jqImage").hover(
    function() {
      $(this).children("div").fadeIn();
      $(this).children("img").animate({opacity: "0.3"});},
    function() {
      $(this).children("div").fadeOut();
      $(this).children("img").animate({opacity: "1"});}
  );

  $("#javaImage").hover(
    function() {
      $(this).children("div").fadeIn();
      $(this).children("img").animate({opacity: "0.3"});},
    function() {
      $(this).children("div").fadeOut();
      $(this).children("img").animate({opacity: "1"});}
  );

  $("#psImage").hover(
    function() {
      $(this).children("div").fadeIn();
      $(this).children("img").animate({opacity: "0.3"});},
    function() {
      $(this).children("div").fadeOut();
      $(this).children("img").animate({opacity: "1"});}
  );

  // Project Animations
  $("#medImage").hover(
    function() {
      $(this).children("div").fadeIn();
      $(this).children("img").animate({opacity: "0.3"});},
    function() {
      $(this).children("div").fadeOut();
      $(this).children("img").animate({opacity: "1"});}
  );

  $("#weatherImage").hover(
    function() {
      $(this).children("div").fadeIn();
      $(this).children("img").animate({opacity: "0.3"});},
    function() {
      $(this).children("div").fadeOut();
      $(this).children("img").animate({opacity: "1"});}
  );

  $("#wikiImage").hover(
    function() {
      $(this).children("div").fadeIn();
      $(this).children("img").animate({opacity: "0.3"});},
    function() {
      $(this).children("div").fadeOut();
      $(this).children("img").animate({opacity: "1"});}
  );

  $("#randomImage").hover(
    function() {
      $(this).children("div").fadeIn();
      $(this).children("img").animate({opacity: "0.3"});},
    function() {
      $(this).children("div").fadeOut();
      $(this).children("img").animate({opacity: "1"});}
  );
});
