// parallax activator
$('[data-parallax]').jQueryParallax();


// Dropdown menu
$(document).ready(function() {    
  $('li.dropdown').hover(function() {
$('ul.dropdown-menu', this).stop(true, true).slideDown('fast');
$(this).addClass('show');
      }, function() {
$('ul.dropdown-menu', this).stop(true, true).slideUp('fast');
$(this).removeClass('show');
      });
   });




/* Window smooth scroll on click of Launch button */
function smoothScroll() {
  window.scrollBy(4, 700);
}

(function(a){var e=function(){a("html, body").animate({scrollTop:0},1E3);return!1};a.fn.tottTop=function(f){var b=a.extend({scrollTop:800,duration:1E3,scrtollTopBtnDuration:400},f);return this.each(function(){var c=a(this),d=a(window);d.scroll(function(){d.scrollTop()>b.scrollTop?c.fadeIn(b.scrtollTopBtnDuration):c.fadeOut(b.scrtollTopBtnDuration)});c.click(e)})}})(jQuery);

 $('.totop').tottTop({
      scrollTop: 100
  });