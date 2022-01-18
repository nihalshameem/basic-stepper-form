$(document).ready(function () {
  //   $(window).keydown(function (event) {
  //     if (event.keyCode == 13 && event.target.nodeName != "TEXTAREA") {
  //       event.preventDefault();
  //       return false;
  //     }
  //   });

  $(".next-step").click(function () {
    var isValid = true;
    $(".steps.active input").each(function () {
      var element = $(this);
      if (element.val() == "") {
        isValid = false;
      }
    });
    if (isValid) {
      let current = $(".steps.active");
      let next = $(".steps.active").next();
      let current_nav = $(".step-top.active");
      let next_nav = $(".step-top.active").next();
      if (next_nav.next().index() == -1) {
        $(".next-step").hide();
        $(".step-complete").show();
      }
      if (next_nav.next().index() != 0) {
        $(".prev-step").css("visibility", "visible");
      }

      current.removeClass("active");
      next.addClass("active");
      current_nav.removeClass("active").addClass("complete");
      next_nav.addClass("active");
    }
  });
  $(".prev-step").click(function () {
    let current = $(".steps.active");
    let prev = $(".steps.active").prev();
    let current_nav = $(".step-top.active");
    let prev_nav = $(".step-top.active").prev();
    if (prev_nav.index() == 0) {
      $(".prev-step").css("visibility", "hidden");
    }
    if (prev_nav.prev().index() != -1) {
      $(".step-complete").hide();
      $(".next-step").show();
    }
    current.removeClass("active");
    prev.addClass("active");
    current_nav.removeClass("active").removeClass("complete");
    prev_nav.addClass("active").removeClass("complete");
  });
});
