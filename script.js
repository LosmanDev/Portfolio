//Collapse existing card
$(".port-item").click(function () {
  $(".collapse").collapse("hide");
});

//A lightbox gallery plugin for Bootstrap 3 based on the modal plugin
$(document).on("click", '[data-toggle="lightbox"]', function (e) {
  e.preventDefault();
  $(this).ekkoLightbox();
});

// BOOTSTRAP MODAL FOR READ ME
$("#myModal").on("shown.bs.modal", function () {
  $("#myInput").trigger("focus");
});

AOS.init();

//Emailjs for contact from
(function () {
  emailjs.init("YFXqHcA2AkdvH-RME");
})();

function sendMail(params) {
  let tempParams = {
    from_name: document.getElementById("fromName").value,
    email: document.getElementById("fromEmail").value,
    message: document.getElementById("msg").value,
  };
  emailjs
    .send("service_n1w0hcr", "template_lngukbq", tempParams)
    .then(function (res) {
      console.log("Success", res.status);
      location.reload();
    });
}
