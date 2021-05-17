var stepper1 = new Stepper(document.querySelector("#stepper1"));
const paymentProcessing = document.querySelector(".payment-processing");
const paymentProcessing2 = document.querySelector(".payment-processing-step-2");

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
        paymentProcessing.classList.remove("d-none");
        paymentProcessing.classList.add("d-block");
        paymentProcessing2.classList.remove("d-none");
        paymentProcessing2.classList.add("d-block");
        setTimeout(() => {
          paymentProcessing.classList.remove("d-block");
          paymentProcessing.classList.add("d-none");
          paymentProcessing2.classList.remove("d-block");
          paymentProcessing2.classList.add("d-none");
          stepper1.next();
        }, 3000);
      }
      form.classList.add("was-validated");
    },
    false
  );
});
