function onHover() {
  $("#menuImg").attr("src", "assets/images/home/home-ourvision-hover.jpg");
}
function offHover() {
  $("#menuImg").attr("src", "assets/images/home/section4.jpg");
}
function goto(o) {
  document.location = "indexInnovation.html#" + o;
}
function goto2(o) {
  document.location = "indexExpertise.html#" + o;
}
$(document).ready(function () {
  $("a").on("click", function (o) {
    if ("" !== this.hash) {
      o.preventDefault();
      var t = this.hash;
      $("html, body").animate(
        { scrollTop: $(t).offset().top },
        100,
        function () {
          window.location.hash = t;
        }
      );
    }
  });
}),
  window.outerWidth < 700 && $(".carousel").attr("data-interval", "false"),
  $("#submitButton").on("click", function () {
    $("#submitMessage").css("display", "block"),
      $("#submitMessage").delay(3e3).fadeOut("slow");
  });

// blog
var blogImg = document.getElementById("js-blog-img");
var blogHeading = document.getElementById("js-blog-heading");
var blogDescription = document.getElementById("js-blog-description");
var linkToTheBlog = document.getElementById("js-link-to-the-blog");

async function getBlogPosts() {
  let response = await fetch("http://blog.ispdesign.com/wp-json/wp/v2/posts");
  let data = await response.json();
  let latestPost = data[0];
  return latestPost;
}

getBlogPosts().then((latestPost) => {
  let imgHTML = latestPost.content.rendered;
  let htmlObject = document.createElement("div");
  htmlObject.innerHTML = imgHTML;
  let imgSrc = htmlObject.querySelector("img").src;
  blogImg.src = imgSrc;
  blogHeading.innerHTML = latestPost.title.rendered;
  let descriptionText = latestPost.excerpt.rendered;
  let descriptionTextNoChar = descriptionText.replace("[&hellip;]", "");
  blogDescription.innerHTML = descriptionTextNoChar;
  linkToTheBlog.href = latestPost.link;
});
