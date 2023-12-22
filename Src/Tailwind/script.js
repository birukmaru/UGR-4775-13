// responsive nav

document.getElementById("toggle").addEventListener("click", function () {
    var menu = document.getElementById("menu");
    menu.classList.toggle("opacity-100");
    menu.classList.toggle("invisible");
  });

  document.getElementById("close").addEventListener("click", function () {
    var menu = document.getElementById("menu");
    menu.classList.remove("opacity-100");
    menu.classList.add("invisible");
  });

// send mail to contact

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

// download Resume

  function downloadResume() {
    var resumeUrl = "images/Resume.pdf";
    var link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "your_resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }


 


 