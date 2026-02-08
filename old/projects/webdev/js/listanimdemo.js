var delay = 0;

$(document).ready(function(){
  $( "#list-of-projects" ).find( "li" ).each(function(i) {
    $(this).css({
      'animation-delay' : delay.toString() + 's'
    });
    delay = delay + 0.5;
  });
});
