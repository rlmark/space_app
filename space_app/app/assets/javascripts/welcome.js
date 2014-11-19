$(document).ready( function () {

  $(document).on( 'scroll', function(){

    // if ( $(window).scrollTop() >= 20 ) {
    //     $("header").fadeTo(1000, 0.5);
    // }

  });

  $('a[href^="#"]').click(function (){
    console.log("click is firing");
    //$("header").fadeTo(400, 0.5); figure out something here
    $('html, body').animate({scrollTop: $( $.attr(this, 'href') ).offset().top}, 1500);
      return false;
  });

});

// var first = $('.rover').offset().top;
// var second = $(window).scrollTop();
// var difference = first - second
// console.log("first value of rover " + first);
// console.log("window scroll " + second);
// console.log("the difference is " + difference);
//
// if (($('.rover').offset().top - $(window).scrollTop() ) < 600 ) {
//   console.log("scroll event triggered");
//   $("header").fadeTo(1100, 0.2);
// } else {
//   $("header").fadeTo(1100, 1);
// }
