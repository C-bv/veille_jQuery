

$(document).ready(function() {
      hideShowPageSwitcher();
  });


// Open/close aside + nav_toogler

$('.nav_toggler').click( function() {
      $("aside").toggleClass("open");
      $(".nav_toggler").toggleClass("open");
      $("section").toggleClass("open");
} );



// SECTION SWITCHER

const hideShowPageSwitcher = function(){
      if ( $("section:last").hasClass("active")) {
            $(".page_switcher_down").hide();
          }
      else {
            $(".page_switcher_down").show();
      }
      if ( $("section:first").hasClass("active")) {
            $(".page_switcher_up").hide();
          }
      else {
            $(".page_switcher_up").show();
      }
}

      // Switch to previous section
      $('.page_switcher_up').click( function() {
            $("section.active").prev().toggleClass("active");
            $("section.active").next().removeClass("active");
            hideShowPageSwitcher();
      } );


      // Switch to next section

      $('.page_switcher_down').click( function() {
            $("section.active").next().toggleClass("active");
            $("section.active").prev().removeClass("active");
            hideShowPageSwitcher();
      } );

// SECTION SWITCHER END