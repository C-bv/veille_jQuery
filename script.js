$("p").css("color", "#fff");
$("p:first + p").addClass("Helloworld");


// Open/close aside + nav_toogler

$('.nav_toggler').click( function() {
      $("aside").toggleClass("open");
      $(".nav_toggler").toggleClass("open");
      $("section").toggleClass("open");
  } );
