var stepper1Node = document.querySelector("#stepper1");
var stepper1 = new Stepper(document.querySelector("#stepper1"));

stepper1Node.addEventListener("show.bs-stepper", function (event) {
  console.warn("show.bs-stepper", event);
});

// Fetch all the forms we want to apply custom Bootstrap validation styles to
var forms = document.querySelectorAll(".needs-validation");

// Loop over them and prevent submission
Array.prototype.slice.call(forms).forEach(function (form) {
  form.addEventListener(
    "submit",
    function (event) {
      event.preventDefault();
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      } else {
        stepper1.next();
      }
      form.classList.add("was-validated");
    },
    false
  );
});
