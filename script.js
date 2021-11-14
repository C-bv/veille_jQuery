  

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

// Change color of nav li a 



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
      $("section.active").prev().toggleClass("active").fadeIn();
      $("section.active").next().removeClass("active").fadeOut();
      hideShowPageSwitcher();
});


// Switch to next section
$(".page_switcher_down").click( function(){
      $("section.active").next().toggleClass("active").fadeIn();
      $("section.active").prev().removeClass("active").fadeOut();
      hideShowPageSwitcher();
});


// Open section on navbar a click
let navLinks = $("li > a");
$(navLinks).click(function(){
      let aIndex = $("a").index(this);
      $("section:visible").removeClass("active").fadeOut();
      $("section").eq(aIndex).toggleClass("active").fadeIn();
      hideShowPageSwitcher();
});

// i = 1
// $(navLinks).eq(i).click(function(){
//       if ($(navLinks).eq(i).not("active")){
//             $(navLinks).eq(i).toggleClass("active");
//             $(navLinks).eq(i).siblings().removeClass("active");
//       }
// });



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

