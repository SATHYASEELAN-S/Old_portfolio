
$(document).ready(function () {

  $("#carousel").addClass("d-none");
  $("#aboutme").removeClass("d-none");
  $(".btn-me").addClass("underline-text");
  $(".about-active").on("click", function () {
    var targetId = $(this).data("target");

    $(".about-content").addClass("d-none");
    $("#" + targetId).removeClass("d-none");

    $(".btn-aboutme").removeClass("underline-text");

    $(this).addClass("underline-text");
  });
});