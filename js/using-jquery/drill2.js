$.fn.hasAttr = function(key) {
  return this.attr(key) !== undefined;
};

$(function() {

  console.log('The dom is ready! (drill 2)');

  $(document).on('keyup',function(event){
    var topMax = 400,
        leftMax = 800,
        top = $(this).attr('top');
        console.log(top);
        // topNew = topMax - ,
        leftNew = Math.floor(Math.random() * leftMax);

    //output to console which key was pressed
    // console.log('The user pressed key: ' + event.which);
    // switch (event.which) {
    //   case "37":
    //     $(".shape").css({ left: leftNew });
    //     break
    //   case "38":
    //     $(".shape").css({ top: topNew });
    //     break
    //   case "39":
    //     $(".shape").css({ left: leftNew });
    //     break
    //   case "40":
    //     $(".shape").css({ top: topNew });
    //     break
    //   default
    // };
  });
});

