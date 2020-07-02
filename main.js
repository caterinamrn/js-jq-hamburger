// primo tentativo ma non considera la media query

// $(".fas.fa-bars").click( function () {
//     console.log("ok");
//     $(".hamburger-menu").show("fast");
// });
//
//   $(".fas.fa-times").click( function () {
//       console.log("ok2");
//       $(".hamburger-menu").hide("fast");
//   });


// secondo tentativo
var x = window.matchMedia("(max-width: 1000px)")
mediaQuery(x)
x.addListener(mediaQuery)

  $(".fas.fa-bars").click( function () {
      console.log("ok");
      $(".hamburger-menu").show("fast");
  });

    $(".fas.fa-times").click( function () {
        console.log("ok2");
        $(".hamburger-menu").hide("fast");
  });

// functions
function mediaQuery(x) {
  if (x.matches) {
    
  }
  else {
    $(".hamburger-menu").hide();
  }
}
