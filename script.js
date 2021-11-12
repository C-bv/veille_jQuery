  

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
            },1000);
      });
      hideShowPageSwitcher();
});

// Open/close aside + nav_toogler = section
$(".nav_toggler").click(function(){
      $("aside").toggleClass("open");
      $(".nav_toggler").toggleClass("open");
      $("section").toggleClass("open");
});


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
$(".page_switcher_up").click( function(){
      $("section.active").prev().toggleClass("active").removeClass("back").fadeIn();
      $("section.active").next().removeClass("active").toggleClass("back").fadeOut();
      hideShowPageSwitcher();
});


// Switch to next section
$(".page_switcher_down").click( function(){
      $("section.active").next().toggleClass("active").removeClass("back").fadeIn();
      $("section.active").prev().removeClass("active").toggleClass("back").fadeOut();
      hideShowPageSwitcher();
});

// let sectionNumber = 
// function(){

// }
// if a[i] clicked the apply fn prev net to section[i]

$( "a" ).click(function() {
      // `this` is the DOM element that was clicked
      var index = $( "a" ).index( this );
      $("section").index(2).fadeIn();
      console.log("That was div index #" + index );

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

