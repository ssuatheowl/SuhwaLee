$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {

      // Store hash
      var hash = this.hash;

      var offset = $(hash).offset();
      if (offset != undefined) {
        // Prevent default anchor click behavior
        event.preventDefault();

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 400, function(){

          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    }
  });
});


function hamburgerMenu() {
  var x = document.getElementById("menu");
  if (x.className === "menu-ul") {
    x.className += " responsive";
  } else {
    x.className = "menu-ul";
  }
}

//$(document).ready(function(){
  // Add smooth scrolling to all links
  //$("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    //if (this.hash !== "") {


      // Store hash
      //var hash = this.hash;

      //var offset = $(hash).offset();
      //console.log(offset)
      //if (offset != 0)
      //{


      //var top = $(hash).offset().top

      //if (top != 0) {
        // Prevent default anchor click behavior
      //event.preventDefault();

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      //$('html, body').animate({
      //  scrollTop: top
      //}, 400, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
      //  window.location.hash = hash;
      //});
   // }
 // }
   // } // End if
 // });
//});
