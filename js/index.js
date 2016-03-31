$(function() {
  $('.js-link').on('click', function(e) {
    var $link = $(e.currentTarget);
    var target = $link.data('target');
    $("html, body").animate({ scrollTop: $(target).offset().top - 92 }, 600);
  });
});