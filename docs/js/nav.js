/*! Catch2022 v1.0.0 | (c) 2020  | MIT License | git@github.com:Catch2022/Catch2022-Website */
// hide the title of the game in the navbar while the splash page is visible
var titleHidden = false;
var onceFlag = true; // only used for testing where hot reload leaves the page at the bottom,
                     // meaning titleHidden is false and won't be changed until the page scrolls to the top
$((function() {
  $(window).scroll((function() {
    var x = $(window).scrollTop();
    var vh = $(window).height();
    if (x <= vh*0.55) {
      if(!titleHidden){
        $("#navbar-title").animate({opacity: 0.0}, 300);
        $("#main-nav").animate({padding: "8px 0"}, 300);
        titleHidden = true;
      }
    } else {
      if(titleHidden || onceFlag){
        $("#navbar-title").animate({opacity: 1.0}, 300);
        $("#main-nav").animate({padding: "24px 0"}, 300);
        titleHidden = false;
        onceFlag = false;
      }
    }
  }));
}));