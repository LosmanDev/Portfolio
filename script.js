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

function sendMail() {
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

//Dev text transition

const dev_transition = document.querySelector(".devgineer");
const text1 = ` 
<p
data-aos="fade"
data-aos-duration="1500"
class="font-weight-bold full-stack-font font_family text-center mt-4"
>
&lt;dev&gt;Web Engineer&lt;/dev&gt;
</p>`;

const text2 = ` 
<p
data-aos="fade"
data-aos-duration="1500"
class="font-weight-bold full-stack-font font_family text-center mt-4"
>
&lt;dev&gt;Front-End Engineer&lt;/dev&gt;
</p>`;

const text3 = ` 
<p
data-aos="fade"
data-aos-duration="1500"
class="font-weight-bold full-stack-font font_family text-center mt-4"
>
&lt;dev&gt;UI/UX Developer&lt;/dev&gt;
</p>`;

const text4 = ` 
<p
data-aos="fade"
data-aos-duration="1500"
class="font-weight-bold full-stack-font font_family text-center mt-4"
>
&lt;dev&gt;Web Developer&lt;/dev&gt;
</p>`;
const text5 = ` 
<p
data-aos="fade"
data-aos-duration="1500"
class="font-weight-bold full-stack-font font_family text-center mt-4"
>
&lt;dev&gt;Software Developer&lt;/dev&gt;
</p>`;
const text6 = ` 
<p
data-aos="fade"
data-aos-duration="1500"
class="font-weight-bold full-stack-font font_family text-center mt-4"
>
&lt;dev&gt;JavaScript Developer&lt;/dev&gt;
</p>`;
const text7 = ` 
<p
data-aos="fade"
data-aos-duration="1500"
class="font-weight-bold full-stack-font font_family text-center mt-4"
>
&lt;dev&gt;React Developer&lt;/dev&gt;
</p>`;
const text8 = ` 
<p
data-aos="fade"
data-aos-duration="1500"
class="font-weight-bold full-stack-font font_family text-center mt-4"
>
&lt;dev&gt;Software Engineer&lt;/dev&gt;
</p>`;

const texts = [text1, text2, text3, text4, text5, text6, text7, text8];
let index = 0;
setInterval(() => {
  dev_transition.innerHTML = texts[index++];
  if (index >= texts.length) {
    index = 0;
  }
}, 2000);

//Carousel slide animation
$(".carousel").carousel({
  interval: 10000,
});
