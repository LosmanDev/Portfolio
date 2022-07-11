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

//CSS FADE initializer
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
    });
}

//Emailjs for contact from

//REGEX Name & Email
const form_name = document.getElementById("fromName");
form_name.addEventListener("blur", validateName);
const form_email = document.getElementById("fromEmail");
form_email.addEventListener("blur", validateEmail);

function validateName() {
  const name = document.getElementById("fromName");
  const re = /^[a-zA-Z]{2,10}$/;

  if (!re.test(name.value)) {
    name.classList.add("is-invalid");
  } else {
    name.classList.remove("is-invalid");
  }
}

function validateEmail() {
  const email = document.getElementById("fromEmail");
  const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

  if (!re.test(email.value)) {
    email.classList.add("is-invalid");
  } else {
    email.classList.remove("is-invalid");
  }
}

// Form Value Checker and sent Disclaimer

let buttonSend = document.querySelector("#btn-send");

buttonSend.addEventListener("click", (e) => {
  e.preventDefault();

  if (form_name.value.length === 0 || form_email.value.length === 0) {
    form_name.classList.add("is-invalid");
    form_email.classList.add("is-invalid");
  } else {
    form_name.classList.remove("is-invalid");
    form_email.classList.remove("is-invalid");
    buttonSend.classList.remove("bg-black");
    buttonSend.classList.add("btn-outline-success");
    buttonSend.innerHTML = 'Sent! <i class="fa-solid fa-check"></i>';
    sendMail();
    setTimeout(() => {
      location.reload();
    }, 5000);
  }
});
