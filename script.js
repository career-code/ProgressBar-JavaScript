
// DOM Elements
const circles = document.getElementsByClassName("circle");
// const progressBar = document.querySelector(".indicator");
const progressBar = document.getElementsByClassName("indicator")[0];
const buttons = document.getElementsByTagName("button");

let currentStep = 0;

// Function to update steps and the UI
function updateSteps(e) {
    // Increment or decrement currentStep based on the button clicked
    if (e.target.id === "next" && currentStep < circles.length - 1) {
        currentStep++;
    } else if (e.target.id === "prev" && currentStep > 0) {
        currentStep--;
    }

    // Update the appearance of circles based on the current step
    for (let i = 0; i < circles.length; i++) {
        if (i <= currentStep) {
            circles[i].classList.add("active");
        } else {
            circles[i].classList.remove("active");
        }
    }

    // Update the progress bar width
    progressBar.style.width = `${(currentStep / (circles.length - 1)) * 100}%`;

    // Disable/enable buttons based on the current step
    buttons[0].disabled = currentStep === 0;
    buttons[1].disabled = currentStep === circles.length - 1;
}

// Add click event listeners to all buttons
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", updateSteps);
}
