
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
      },3000); //5000
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
      $("aside , .nav_toggler, section").toggleClass("open");
});

// Change nav_toogler icon + color if aside open
const navButton = $(".nav_toggler");
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
      demoStyleRemover();
      
});

// Switch to previous section
$(".page_switcher_up").click( function(){
      $("section.active").prev().toggleClass("active").fadeIn();
      $("section.active").next().removeClass("active").fadeOut();
      hideShowPageSwitcher();
      activeClassLinksTogglerRemover();
      demoStyleRemover();
      

});

// Switch to next section
$(".page_switcher_down").click( function(){
      $("section.active").next().toggleClass("active").fadeIn();
      $("section.active").prev().removeClass("active").fadeOut();
      hideShowPageSwitcher();
      activeClassLinksTogglerRemover();
      demoStyleRemover();
      
});

// SECTION SWITCHER END


// Open slide button
const textButton = $(".mini_slide_container > button");
$(textButton).click(function(){
      if($(this).next().is(':hidden')){
            // Hide all content
            slideRemover();
            resetArrow();
            demoStyleRemover();
            // Show content selected
            $(this).next().slideToggle();
            $(this).css("color", "red").css("transform", "rotate(90deg)");
            activeDemo();

      }
      else if($(this).next().is(':visible')){
            slideRemover();
            resetArrow();
            demoStyleRemover();
            activeDemo();
      }
});

// Remove all styles of content containers +  slide buttons
const slideRemover = function() {
      $(".content_container:visible").slideToggle();
      $(textButton).removeAttr("style");
}


// DEMO

// Remove all styles of div demo
const demoDiv = $(".demo");
const demoStyleRemover = function() {
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

// DEMO

const firstCommand = $(".first_command");
const secondCommand = $(".second_command");
const thirdCommand = $(".third_command");
const fourthCommand = $(".fourth_command");

const liste = $(".selecteur_container > ol");

const testClass = $(".selecteur_container > .test");
const testId = $(".selecteur_container > #test");
const testClassParagraphe = $(".selecteur_container > .test > p");
const testIdParagraphe = $(".selecteur_container > #test > p");

const  domTextContainerP = $(".selecteur_text_container > p");
const  domTextContainerTitle = $(".selecteur_text_container > h4");

const  eventsTextContainerImg = $(".selecteur_text_container > img");

const  effectsTextContainerUl = $(".selecteur_text_container > ul");


const activeDemo = function() {
      
      if ($(".content_container:eq(2)").is(":visible")){

            $(firstCommand).click(function(){
                  $(liste).css("color", "red");
                  $(this).css("border" , "1px solid #2e64b3").css("filter", "drop-shadow(0px 0px 8px rgb(46 100 179 / 80%)");
            });

            $(secondCommand).click(function(){
                  $(liste).css("color", "red");
                  $(this).css("border" , "1px solid #2e64b3").css("filter", "drop-shadow(0px 0px 8px rgb(46 100 179 / 80%)");
            });
      }

      if($(".content_container:eq(6)").is(":visible")){

            $(firstCommand).click(function(){
                  testClass.fadeOut();
                  $(this).css("border" , "1px solid #2e64b3").css("filter", "drop-shadow(0px 0px 8px rgb(46 100 179 / 80%)");
            });

            $(secondCommand).click(function(){
                  testId.fadeOut();
                  $(this).css("border" , "1px solid #2e64b3").css("filter", "drop-shadow(0px 0px 8px rgb(46 100 179 / 80%)");
            });

            $(thirdCommand).click(function(){
                  testClassParagraphe.fadeOut();
                  testIdParagraphe.fadeOut();
                  $(this).css("border" , "1px solid #2e64b3").css("filter", "drop-shadow(0px 0px 8px rgb(46 100 179 / 80%)");
            });

            $(fourthCommand).click(function(){
                  testIdParagraphe.fadeOut();
                  $(this).css("border" , "1px solid #2e64b3").css("filter", "drop-shadow(0px 0px 8px rgb(46 100 179 / 80%)");
            });

      }

      if($(".content_container:eq(7)").is(":visible")){

            $(firstCommand).click(function(){
                  $(domTextContainerP).slice(0,2).css("border" , "1px solid black")
                  $(this).css("border" , "1px solid #2e64b3").css("filter", "drop-shadow(0px 0px 8px rgb(46 100 179 / 80%)");
            });

            $(secondCommand).click(function(){
                  $(domTextContainerTitle).eq(0).css("color","red");
                  $(this).css("border" , "1px solid #2e64b3").css("filter", "drop-shadow(0px 0px 8px rgb(46 100 179 / 80%)");
            });

            $(thirdCommand).click(function(){
                  $(domTextContainerP).slice(1,3).css("color","red");
                  $(this).css("border" , "1px solid #2e64b3").css("filter", "drop-shadow(0px 0px 8px rgb(46 100 179 / 80%)");
            });

            $(fourthCommand).click(function(){
                  $(domTextContainerP).eq(1).css("color","red");
                  $(this).css("border" , "1px solid #2e64b3").css("filter", "drop-shadow(0px 0px 8px rgb(46 100 179 / 80%)");
            });
      }

      if($(".content_container:eq(8)").is(":visible")){

            $(firstCommand).click(function(){
                  $(domTextContainerP).eq(3).remove();
                  $(this).css("border" , "1px solid #2e64b3").css("filter", "drop-shadow(0px 0px 8px rgb(46 100 179 / 80%)");
            });

            $(secondCommand).click(function(){
                  $(domTextContainerP).eq(4).append("  Texte ajouté");
                  $(this).css("border" , "1px solid #2e64b3").css("filter", "drop-shadow(0px 0px 8px rgb(46 100 179 / 80%)");
            });
      }

      if($(".content_container:eq(9)").is(":visible")){

            $(firstCommand).click(function(){
                  $(eventsTextContainerImg).eq(0).animate({
                        width: "-=75px"
                  });
                  $(this).css("border" , "1px solid #2e64b3").css("filter", "drop-shadow(0px 0px 8px rgb(46 100 179 / 80%)");
            });

            $(secondCommand).mouseenter(function(){
                  $(eventsTextContainerImg).css("bottom" , "0px");                  
            });

            $(thirdCommand).mouseleave(function(){
                  $(eventsTextContainerImg).css("bottom" , "-150px");
            });
      }

      if($(".content_container:eq(10)").is(":visible")){

            $(firstCommand).click(function(){
                  $(effectsTextContainerUl).slideToggle();
                  $(this).css("border" , "1px solid #2e64b3").css("filter", "drop-shadow(0px 0px 8px rgb(46 100 179 / 80%)");
            });

            $(secondCommand).click(function(){
                  $(effectsTextContainerUl).fadeToggle();
                  $(this).css("border" , "1px solid #2e64b3").css("filter", "drop-shadow(0px 0px 8px rgb(46 100 179 / 80%)");
            });

            $(thirdCommand).click(function(){
                  $(effectsTextContainerUl).hide();
                  $(this).css("border" , "1px solid #2e64b3").css("filter", "drop-shadow(0px 0px 8px rgb(46 100 179 / 80%)");
            });

            $(fourthCommand).click(function(){
                  $(effectsTextContainerUl).show();
                  $(this).css("border" , "1px solid #2e64b3").css("filter", "drop-shadow(0px 0px 8px rgb(46 100 179 / 80%)");
            });
      }else{

      }
};

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