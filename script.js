  
// GENERAL 

// Hide loader + show start button after load
$(document).ready(function(){
      setTimeout(function(){
            $(".loader").css("opacity","0");
            $(".start").css("opacity","1");
      },900); //9000
   });

// Hide preloader + page_switcher_up
$(".start").click(function(){
      $(".preloader").fadeTo("fast", 0, function(){
            setTimeout(function(){
                  $(".preloader").hide();
            },800);
      });
      hideShowPageSwitcher();
});

// Open/close aside + nav_toogler + section
$(".nav_toggler").click(function(){
      $("aside").toggleClass("open");
      $(".nav_toggler").toggleClass("open");
      $("section").toggleClass("open");
});

// Change nav_toogler icon + color if aside open
let navButton = $(".nav_toggler");
navButton.click(function(){
      if (navButton.hasClass("open")){
            navButton.html("<i class='fas fa-times'></i>").css("color","red");
      }
      else if (navButton.not("open")){
            navButton.html("<i class='fas fa-ellipsis-h'></i>").css("color","#2e64b3");
      }
});

// GENERAL END

// SECTION SWITCHER

// Hide page switcher appopriate button if at section first or bottom
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

// Toggle and remove active class on appropriate navbar links
const activeClassLinksTogglerRemover = function() {
      let sectionActiveIndex = $('section.active').index();
      $(navLinks).removeClass("active");
      $(navLinks).eq(sectionActiveIndex).toggleClass("active");
}

const navLinks = $("li > a");

// Switch to previous section
$(".page_switcher_up").click( function(){
      $("section.active").prev().toggleClass("active").fadeIn();
      $("section.active").next().removeClass("active").fadeOut();
      hideShowPageSwitcher();
      activeClassLinksTogglerRemover();

});

// Switch to next section
$(".page_switcher_down").click( function(){
      $("section.active").next().toggleClass("active").fadeIn();
      $("section.active").prev().removeClass("active").fadeOut();
      hideShowPageSwitcher();
      activeClassLinksTogglerRemover();
});

// Open section on navbar a click
$(navLinks).click(function(){
      let aClickedIndex = $("a").index(this);
      $("section:visible").removeClass("active").fadeOut();
      $("section").eq(aClickedIndex).toggleClass("active").fadeIn();
      activeClassLinksTogglerRemover();
      hideShowPageSwitcher();
});

      // CODE BELOW DOESN'T WORK FOR SECTION:LAST.PREV AND SECTION:FIRST.NEXT

            // $(".page_switcher_up").click( function(){
            //       $("section.active").prev().toggleClass("active").removeClass("back");
            //       $("section.active").next().removeClass("active").toggleClass("back");
            //       hideShowPageSwitcher();
            // });

            // $(".page_switcher_down").click( function(){
            //       $("section.active").next().toggleClass("active").removeClass("back");
            //       $("section.active").prev().removeClass("active").toggleClass("back");
            //       hideShowPageSwitcher();
            // });

// SECTION SWITCHER END

