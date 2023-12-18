function sendMail() {
    var params = {
      name: document.getElementById("name").value,
      fathername: document.getElementById("fathername").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
      message: document.getElementById("message").value,
    };
    const serviceID = "service_r658nt9";
    const templateID = "template_3bg3n9h";
    emailjs.send(serviceID, templateID, params).then((res) => {
      document.getElementById("name").value = "";
      document.getElementById("fathername").value = "";
      document.getElementById("email").value = "";
      document.getElementById("phone").value = "";
      document.getElementById("message").value = "";
      console.log("success", res.status);
      alert("Your message has been sent successfully!");
    });
  }



  document.addEventListener("DOMContentLoaded", function () {
    var $navbarBurgers = Array.prototype.slice.call(
      document.querySelectorAll(".navbar-burger"),
      0
    );
    if ($navbarBurgers.length > 0) {
      $navbarBurgers.forEach(function ($el) {
        $el.addEventListener("click", function () {
          var target = $el.dataset.target;
          var $target = document.getElementById(target);
          $el.classList.toggle("is-active");
          $target.classList.toggle("is-active");
        });
      });
    }
  });



  function downloadResume() {
    var resumeUrl = "images/Resume.pdf";
    var link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "your_resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }