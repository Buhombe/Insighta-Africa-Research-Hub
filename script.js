document.addEventListener("DOMContentLoaded", function () {

  const form = document.getElementById("application-form");
  if (form) {
    form.addEventListener("submit", function(e) {
      e.preventDefault();

      const url = "https://script.google.com/macros/s/AKfycbxU5h4mB0tS5Sq28KYTpoa75MYWt8AM1Hc7OUltxbAT10VpyG7sFJBIRfg73BdvyMQ/exec"; // Badilisha na Web App URL yako

      fetch(url, {
        method: "POST",
        mode: "no-cors",
        body: new FormData(form)
      })
      .then(() => {
        form.reset();
        alert("Application submitted successfully!");
        window.location.href = "thankyou.html"; // redirect
      })
      .catch(err => {
        console.error(err);
        alert("There was an error submitting the form. Try again.");
      });
    });
  }

});
