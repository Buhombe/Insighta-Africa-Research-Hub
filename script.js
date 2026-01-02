document.addEventListener("DOMContentLoaded", function () {

  // ----------- 1. Form Submission to Google Sheet -----------
  const form = document.getElementById("application-form");
  if (form) {
    form.addEventListener("submit", function(e) {
      e.preventDefault();

      const url = "https://script.google.com/macros/s/AKfycbxU5h4mB0tS5Sq28KYTpoa75MYWt8AM1Hc7OUltxbAT10VpyG7sFJBIRfg73BdvyMQ/exec"; // Your Web App URL

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

  // ----------- 2. Animated Counters with Slide-In Effect -----------
  const counters = document.querySelectorAll('.counter');

  const observerOptions = {
    threshold: 0.5 // triggers when 50% of counter is visible
  };

  const counterObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        const target = +counter.getAttribute('data-target');
        let count = 0;
        const increment = Math.ceil(target / 100); // smooth speed

        const updateCount = () => {
          count += increment;
          if (count < target) {
            counter.innerText = count;
            requestAnimationFrame(updateCount);
          } else {
            counter.innerText = target;
          }
        };

        // Add slide-in animation
        counter.parentElement.classList.add('show');

        updateCount();
        observer.unobserve(counter); // animate once
      }
    });
  }, observerOptions);

  counters.forEach(counter => counterObserver.observe(counter));

});
