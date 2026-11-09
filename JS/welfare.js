// NSPCA - Welfare Page Accordion 
// This code allows users to open and close the different sections with a simple animation.


    // Wait until the HTML document has loaded
    document.addEventListener("DOMContentLoaded", function () {

        // Select all accordion buttons
        const accordions = document.querySelectorAll(".accordion");

        // Loop through each accordion button
        accordions.forEach(function (accordion) {

            // Add a click event to each accordion
            accordion.addEventListener("click", function () {

                // Get the content panel below the button
                const panel = accordion.nextElementSibling;

                // Get the plus or minus icon
                const icon = accordion.querySelector(".icon");

                // Check if the panel is currently open
                if (panel.style.maxHeight) {

                    // Close the accordion
                    panel.style.maxHeight = null;

                    // Remove the show class
                    panel.classList.remove("show");

                    // Change the icon to a plus sign
                    icon.textContent = "+";

                } else {

                    // Open the accordion with animation
                    panel.classList.add("show");

                    // Set the panel height based on its content
                    panel.style.maxHeight = panel.scrollHeight + "px";

                    // Change the icon to a minus sign
                    icon.textContent = "−";

                }

            });

        });

    });

// References:

//  MDN Web Docs (n.d.). addEventListener().
// https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener

// MDN Web Docs (n.d.). scrollHeight.
// https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollHeight

// MDN Web Docs (n.d.). classList.
// https://developer.mozilla.org/en-US/docs/Web/API/Element/classList

