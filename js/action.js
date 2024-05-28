
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

document.addEventListener("DOMContentLoaded", function() {

  var navLinks = document.querySelectorAll('.navbar-nav .nav-link');

  
  navLinks.forEach(function(link) {
    link.addEventListener('click', function() {
      var offcanvasNavbar = document.getElementById('offcanvasNavbar');
      var offcanvasNavbarInstance = bootstrap.Offcanvas.getInstance(offcanvasNavbar);
      offcanvasNavbarInstance.hide();
      navLinks.forEach(function(link) {
        link.classList.remove('active');
      });
      this.classList.add('active');
    });
  });
});
