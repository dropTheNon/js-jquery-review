$(function(){


  console.log('The dom is ready! (drill 1)');


  function fade() {
    var topMax = 400,
        leftMax = 800,
        topNew = Math.floor(Math.random() * topMax),
        leftNew = Math.floor(Math.random() * leftMax);

    $(".ball").css({ top: topNew, left: leftNew }).fadeIn();
  };

  $(".ball").on("click", function (e) {
    $(".ball").fadeOut();
    setTimeout(fade, 1000);
  });
});

