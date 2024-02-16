function sendMail() {


  var name = document.getElementById("name").value ;
  var email = document.getElementById("email").value ;
  var message = document.getElementById("message").value ;



  if (name !== "" && email !== "" && message !== "") {
    var params = {
      name, email, message,
    };
    const serviceID = "service_wrxxp1o";
    const templateID = "template_a5kcq0s";
    emailjs
      .send(serviceID, templateID, params)
      .then((res) => {
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "your message sent successfully ",
          showConfirmButton: false,
          timer: 1500
        });
      })
      .catch((err) => console.log(err));

  } else {
    Swal.fire("Every field is important! ");
  }


}

document.addEventListener("DOMContentLoaded", function () {
  var navbar = document.querySelector('.navbar');

  window.addEventListener('scroll', function () {
    if (window.scrollY > 0) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
});
