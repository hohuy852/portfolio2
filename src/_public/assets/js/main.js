$(document).ready(function () {
  $(window).scroll(function () {
    /* Check the location of each desired element */
    let scroll_pos = $(window).scrollTop();
    $(".c-scroll").each(function (i) {
      if (scroll_pos + 200 >= $(this).offset().top) {
        $(".c-mainvisual__navitem")
          .siblings()
          .find(".c-mainvisual__pos")
          .removeClass("c-mainvisual__pos--active");
        $(".c-mainvisual__navitem")
          .siblings()
          .find(".c-mainvisual__posname")
          .removeClass("c-mainvisual__posname--active");
        $(".c-mainvisual__pos").eq(i).addClass("c-mainvisual__pos--active");
        $(".c-mainvisual__posname")
          .eq(i)
          .addClass("c-mainvisual__posname--active");
      }
      if (scroll_pos >= 618 && scroll_pos <= 1545) {
        $(".c-mainvisual").get(0).style.setProperty("--color", "#333");
        $(".c-mainvisual").get(0).style.setProperty("--dotcolor", "#e6e6e6");
      } else {
        $(".c-mainvisual").get(0).style.setProperty("--color", "#fff");
        $(".c-mainvisual").get(0).style.setProperty("--dotcolor", "#737373");
      }
    });
  });
});
