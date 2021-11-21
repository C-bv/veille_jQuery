
// GENERAL 

// Dark mode
let dark = document.body;

function darkModeOn() {
      dark.classList.add("dark");
}

function darkModeOff() {
	dark.classList.remove("dark");
}


// Hide loader + show start button after load
$(function(){
      setTimeout(function(){
            $(".loader").css("opacity","0");
            $(".start").css("opacity","1");
      },90); //9000


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
      $("aside , .nav_toggler, section").toggleClass("open");
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
            $(".page_switcher_down").fadeOut();
          }
      else {
            $(".page_switcher_down").fadeIn();
      }
      if ( $("section:first").hasClass("active")) {
            $(".page_switcher_up").fadeOut();
          }
      else {
            $(".page_switcher_up").fadeIn();
      }
}

// Toggle and remove active class on appropriate navbar links
const navLinks = $("li > a");
const activeClassLinksTogglerRemover = function() {
      let sectionActiveIndex = $('section.active').index();
      $(navLinks).removeClass("active");
      $(navLinks).eq(sectionActiveIndex).toggleClass("active");
}

// Open section on navbar a click
$(navLinks).click(function(){
      let aClickedIndex = $("a").index(this);
      $("section:visible").removeClass("active").fadeOut();
      $("section").eq(aClickedIndex).toggleClass("active").fadeIn();
      activeClassLinksTogglerRemover();
      hideShowPageSwitcher();
      statusRemover();
      slideRemover();
});

// Switch to previous section
$(".page_switcher_up").click( function(){
      $("section.active").prev().toggleClass("active").fadeIn();
      $("section.active").next().removeClass("active").fadeOut();
      hideShowPageSwitcher();
      activeClassLinksTogglerRemover();
      statusRemover();
      slideRemover();

});

// Switch to next section
$(".page_switcher_down").click( function(){
      $("section.active").next().toggleClass("active").fadeIn();
      $("section.active").prev().removeClass("active").fadeOut();
      hideShowPageSwitcher();
      activeClassLinksTogglerRemover();
      statusRemover();
      slideRemover();
});

// SECTION SWITCHER END


// Open slide button
const textButton = $(".mini_slide_container > button");
$(textButton).click(function(){
      if($(this).next().is(':hidden')){
            // Hide all content
            slideRemover()
            resetArrow()
            statusRemover()
            // Show content selected
            $(this).next().slideToggle();
            $(this).css("color", "red").css("transform", "rotate(90deg)");
      }
      else if($(this).next().is(':visible')){
            $(this).next().slideToggle();
            $(this).removeAttr("style");
            resetArrow()
            statusRemover()
      }
});

// Remove all styles of content containers +  slide buttons
const contentContainer = $(".content_container");
const slideRemover = function() {
      $(contentContainer).slideUp();
      $(textButton).removeAttr("style");
}


// DEMO

// Remove all styles of div demo
const demoDiv = $(".demo");
const statusRemover = function() {
      $(demoDiv).find('*').removeAttr('style');
}


// Reset button
const resetButton = $(".demo > button");
const resetButtonIcon = $(".demo > button > i");

const resetDemo = function() {
      $(resetButtonIcon).css("transform", "rotate(360deg)");
      $(".commands").find('*').removeAttr('style');
      $(".selecteur_container").find('*').removeAttr('style');
      setTimeout(function(){
            $(resetButtonIcon).removeAttr("style");
      },300);
}

$(resetButton).click(resetDemo);

      // INTRODUCTION DEMO
      const liste = $(".selecteur_container > ol");
      const introFirstCommand = $(".first_command");
      const introSecondCommand = $(".second_command");

      // Commande 1
      $(introFirstCommand).click(function(){
            if($(this).siblings().attr("style")){
            // DO NOTHING
            }
            else{
                  $(liste).css("color", "red");
                  $(this).css("border" , "1px solid #2e64b3").css("filter", "drop-shadow(0px 0px 8px rgb(46 100 179 / 80%)");
            }
      });

      // Commande 2
      $(introSecondCommand).click(function(){
            if($(this).siblings().attr("style")){
                  // DO NOTHING
            }
            else{
                  $(liste).css("color", "red");
                  $(this).css("border" , "1px solid #2e64b3").css("filter", "drop-shadow(0px 0px 8px rgb(46 100 179 / 80%)");
            }
      });

      // INTRODUCTION DEMO END

      // SELECTEUR DEMO
      const testClass = $(".selecteur_container > .test");
      const testId = $(".selecteur_container > #test");
      const testClassParagraphe = $(".selecteur_container > .test > p");
      const testIdParagraphe = $(".selecteur_container > #test > p");

      const selecteurFirstCommand = $(".first_command");
      const selecteurSecondCommand = $(".second_command");
      const selecteurThirdCommand = $(".third_command");
      const selecteurFourthCommand = $(".fourth_command");

      // Commande 1
      $(selecteurFirstCommand).click(function(){
            testClass.fadeOut();
            $(this).css("border" , "1px solid #2e64b3").css("filter", "drop-shadow(0px 0px 8px rgb(46 100 179 / 80%)");
      });

      // Commande 2
      $(selecteurSecondCommand).click(function(){
            testId.fadeOut();
            $(this).css("border" , "1px solid #2e64b3").css("filter", "drop-shadow(0px 0px 8px rgb(46 100 179 / 80%)");
      });

      // Commande 3
      $(selecteurThirdCommand).click(function(){
            testClassParagraphe.fadeOut();
            testIdParagraphe.fadeOut();
            $(this).css("border" , "1px solid #2e64b3").css("filter", "drop-shadow(0px 0px 8px rgb(46 100 179 / 80%)");
      });

      // Commande 4
      $(selecteurFourthCommand).click(function(){
            testIdParagraphe.fadeOut();
            $(this).css("border" , "1px solid #2e64b3").css("filter", "drop-shadow(0px 0px 8px rgb(46 100 179 / 80%)");
      });

      // SELECTEUR DEMO END

      // DOM DEMO
      const  domTextContainerP = $(".selecteur_text_container > p");
      const  domTextContainerTitle = $(".selecteur_text_container > h4");

      const domFirstCommand = $(".first_command");
      const domSecondCommand = $(".second_command");
      const domThirdCommand = $(".third_command");
      const domFourthCommand = $(".fourth_command");

      // Commande 1
      $(domFirstCommand).click(function(){
            $(domTextContainerP).slice(0,2).css("border" , "1px solid black")
            $(this).css("border" , "1px solid #2e64b3").css("filter", "drop-shadow(0px 0px 8px rgb(46 100 179 / 80%)");
      });

      // Commande 2
      $(domSecondCommand).click(function(){
            $(domTextContainerTitle).eq(0).css("color","red");
            $(this).css("border" , "1px solid #2e64b3").css("filter", "drop-shadow(0px 0px 8px rgb(46 100 179 / 80%)");
      });

      // Commande 3
      $(domThirdCommand).click(function(){
            $(domTextContainerP).slice(1,3).css("color","red");
            $(this).css("border" , "1px solid #2e64b3").css("filter", "drop-shadow(0px 0px 8px rgb(46 100 179 / 80%)");
      });

      // Commande 4
      $(domFourthCommand).click(function(){
            $(domTextContainerP).eq(1).css("color","red");
            $(this).css("border" , "1px solid #2e64b3").css("filter", "drop-shadow(0px 0px 8px rgb(46 100 179 / 80%)");
      });

      // DOM DEMO END

      // AGIR SUR LE HTML DEMO
      const  htmlTextContainerP = $(".selecteur_text_container > p");

      const htmlFirstCommand = $("section.fonctionnement_section> div > div:nth-child(4) > div > div.demo > div.commands > div.first_command");
      const htmlSecondCommand = $(".second_command");
      const htmlThirdCommand = $(".third_command");

      // Commande 1
      $(htmlFirstCommand).click(function(){
            alert("Text : " + $(htmlTextContainerP).eq(0).text());
            $(this).css("border" , "1px solid #2e64b3").css("filter", "drop-shadow(0px 0px 8px rgb(46 100 179 / 80%)");
      });

      // Commande 2
      $(htmlSecondCommand).click(function(){
            $(htmlTextContainerP).eq(4).append("  Texte ajouté");
            $(this).css("border" , "1px solid #2e64b3").css("filter", "drop-shadow(0px 0px 8px rgb(46 100 179 / 80%)");
      });

      // Commande 3
      $(htmlThirdCommand).click(function(){
            $(htmlTextContainerP).eq(3).remove();
            $(this).css("border" , "1px solid #2e64b3").css("filter", "drop-shadow(0px 0px 8px rgb(46 100 179 / 80%)");
      });

      // AGIR SUR LE HTML DEMO END

      // EVENTS DEMO
      const  eventsTextContainerImg = $(".selecteur_text_container > img");

      const eventsFirstCommand = $(".first_command");
      const eventsSecondCommand = $(".second_command");
      const eventsThirdCommand = $(".third_command");

      // Commande 1
      $(eventsFirstCommand).click(function(){
            $(eventsTextContainerImg).animate({
                  width: "-=75px"
            });
            $(this).css("border" , "1px solid #2e64b3").css("filter", "drop-shadow(0px 0px 8px rgb(46 100 179 / 80%)");
      });

      // Commande 2
      $(eventsSecondCommand).mouseenter(function(){
            $(eventsTextContainerImg).css("bottom" , "75px");
            $(this).css("border" , "1px solid #2e64b3").css("filter", "drop-shadow(0px 0px 8px rgb(46 100 179 / 80%)");
      });

      $(eventsSecondCommand).mouseleave(function(){
            $(this).removeAttr("style");
      });

      // Commande 3
      $(eventsThirdCommand).mouseleave(function(){
            $(eventsTextContainerImg).css("bottom" , "-75px");
            $(this).removeAttr("style");
      });

      $(eventsThirdCommand).mouseenter(function(){
            $(this).css("border" , "1px solid #2e64b3").css("filter", "drop-shadow(0px 0px 8px rgb(46 100 179 / 80%)");
      });

      // EVENTS DEMO END

      

// DEMO END


// TEXT COMPOSER

const textComposer = $(".text_composer");
const arrow = $(".text_composer > i");
const offset = arrow.offset();
const resetArrow = function(){
      $(".alias_text, .selecteur_text, .action, .action_text").removeAttr("style");
      $(arrow).css("left", "25px").css("opacity","0");
}
$(textComposer).click(function(){

      if($(arrow).css("opacity") == "0"){
            $(arrow).css("opacity","1");
            $(".alias_text").css("color", "red");
            $(".alias_text").children().css("color", "red");
            $(".alias_0, .alias_1").fadeOut(200).fadeIn(200).fadeOut(200).fadeIn(200).fadeOut(200).fadeIn(200).fadeOut(200).fadeIn(200).fadeOut(200).fadeIn(200);
      }
      else if($(arrow).css("left") == "25px"){
            $(".alias_0, .alias_1, .alias_text").removeAttr("style");
            $(".alias_text").children().removeAttr("style");
            $(arrow).css("left", "98px");
            $(".selecteur_text").css("color", "red");
            $(".selecteur").fadeOut(200).fadeIn(200).fadeOut(200).fadeIn(200).fadeOut(200).fadeIn(200).fadeOut(200).fadeIn(200).fadeOut(200).fadeIn(200);
      }
      else if($(arrow).css("left") == "98px"){
            $(".selecteur, .selecteur_text").removeAttr("style");
            $(arrow).css("left", "210px");
            $(".action_text").css("color", "red");
            $(".action").fadeOut(200).fadeIn(200).fadeOut(200).fadeIn(200).fadeOut(200).fadeIn(200).fadeOut(200).fadeIn(200).fadeOut(200).fadeIn(200);
      }
      else if($(arrow).css("left") == "210px"){
            resetArrow();
      }
});   

// TEXT COMPOSER END


// LIVE CODING

const liveCodingContainer = $("#live_coding_container");

// LIVE CODING END

}); 