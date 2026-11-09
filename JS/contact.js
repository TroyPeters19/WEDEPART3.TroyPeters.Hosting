
// Wait for the HTML page to load
document.addEventListener("DOMContentLoaded", function () {

    // Get the contact form
    const form = document.querySelector("form");

    // Create a response paragraph
    const response = document.createElement("p");

    // Add the response paragraph to the form
    form.appendChild(response);

    // Add an event listener when the form is submitted
    form.addEventListener("submit", function (event) {

        // Prevent the form from submitting automatically
        event.preventDefault();

        // Get the values entered by the user
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const number = document.getElementById("number").value.trim();
        const reason = document.getElementById("text").value.trim();

        // Check if the full name is empty
        if (name === "") {
            response.textContent = "Please enter your full name.";
            return;
        }

        // Check if the email address is valid
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            response.textContent = "Please enter a valid email address.";
            return;
        }

        // Check if the phone number is valid
        const phonePattern = /^\+?[0-9\s()-]{10,20}$/;
        const phoneDigits = number.replace(/\D/g, "");

        if (!phonePattern.test(number) ||
            phoneDigits.length < 10 ||
            phoneDigits.length > 15) {

            response.textContent = "Please enter a valid phone number.";
            return;
        }

        // Check if the reason for enquiry is empty
        if (reason === "") {
            response.textContent = "Please enter your reason contacting us.";
            return;
        }

        // Display a success message
        response.textContent = "Your enquiry was successfully sent";

        // Clear the form after successful validation
        form.reset();

    });

});
