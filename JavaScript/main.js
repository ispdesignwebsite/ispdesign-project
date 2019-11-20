function onHover() {
  $("#menuImg").attr("src", "assets/images/home/home-ourvision-hover.jpg");
}
function offHover() {
  $("#menuImg").attr("src", "assets/images/home/section4.jpg");
}
$(document).ready(function() {
  $("a").on("click", function(t) {
    if ("" !== this.hash) {
      t.preventDefault();
      var e = this.hash;
      $("html, body").animate(
        { scrollTop: $(e).offset().top },
        100,
        function() {
          window.location.hash = e;
        }
      );
    }
  });
}),
  window.outerWidth < 700 && $(".carousel").attr("data-interval", "false");

// goto
function goto($hashtag) {
  document.location = "indexInnovation.html#" + $hashtag;
}

function goto2($hashtag) {
  document.location = "indexExpertise.html#" + $hashtag;
}

// $("#submitMessage")
//   .delay(3000)
//   .fadeOut("slow");

$("#submitButton").on("click", function() {
  $("#submitMessage").css("display", "block");
  $("#submitMessage")
    .delay(3000)
    .fadeOut("slow");
});
