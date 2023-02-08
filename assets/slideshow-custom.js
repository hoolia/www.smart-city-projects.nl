$(document).ready(function() {
  //$('#oc-inivoslider1').nivoSlider({});
    				

      // Move menu below slider
      if ($(".bottom-menu").length) {
      $("#shopify-section-").insertBefore("#shopify-section-header");
        $(".banner7").css({"margin-bottom": "0px"});
      stickyOffset += $('.shopify-section.slider').height();
      //console.log(stickyOffset);
    }
  });