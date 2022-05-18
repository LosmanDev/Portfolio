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
