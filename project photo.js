// Function to update the background image and display alt text
function upDate(previewPic) {
    document.getElementById("image").style.backgroundImage = `url('${previewPic.src}')`;
    document.getElementById("image").innerHTML = previewPic.alt;
}

// Function to reset the image background and text
function unDo() {
    document.getElementById("image").style.backgroundImage = `url('')`;
    document.getElementById("image").innerHTML = `Hover over an image below to display here.`;
}

// onFocus Event: When an image gets focus (via Tab)
function change(element) {
    element.style.backgroundColor = "gold";
    element.style.color = "black";
    upDate(element); // Show the image in the #image container when focused
}

// onBlur Event: When focus is lost (Tab away)
function resetFocus(element) {
    element.style.backgroundColor = ""; // Reset background color
    element.style.color = ""; // Reset text color
    unDo(); // Reset #image container content
}

// Add tabindex to images to make them focusable for keyboard navigation
function addTabIndex() {
    let images = document.querySelectorAll("img");
    for (let i = 0; i < images.length; i++) {
        images[i].setAttribute("tabindex", i + 1); // Set tabindex so images are focusable in order
    }
    console.log("Tabindex added to all images.");
}

// Add event listeners for all images after the page loads
function addEventListeners() {
    const images = document.querySelectorAll("img");
    for (let i = 0; i < images.length; i++) {
        const image = images[i];

        // Mouseover event to update the background image and text
        image.addEventListener('mouseover', function () {
            upDate(image);
        });

        // Mouseleave event to reset the background image and text
        image.addEventListener('mouseleave', function () {
            unDo();
        });

        // Focus event to change the background color when focused via keyboard
        image.addEventListener('focus', function () {
            change(image);
        });

        // Blur event to reset when focus is lost
        image.addEventListener('blur', function () {
            resetFocus(image);
        });
    }
}

// Initialize the page functionality onload
window.onload = function () {
    addTabIndex();      // Add tabindex attributes to all images
    addEventListeners(); // Add event listeners for hover and focus events
    console.log('Page loaded, event listeners and tabindex set.');
};
  
