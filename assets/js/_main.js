/* ==========================================================================
   jQuery plugin settings and other scripts
   ========================================================================== */

$(document).ready(function(){

  var $siteNav = $('.site-nav');
  var $siteNavToggle = $('.site-nav-toggle');

  $siteNavToggle.click(function () {
    $siteNav.toggleClass('is-toggled');
  });

  // init smooth scroll
  $("a").smoothScroll({offset: -20});

  // style the markdown popup
  $("#comment-form-message").focus(function(){
    $('.markdown').removeClass('hidden');
    $('.markdown').addClass('fade');
  });
});
