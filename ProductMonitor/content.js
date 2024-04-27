document.addEventListener("DOMContentLoaded", function () {
  // Targeting the container where the widget will be embedded
  const targetElement = document.querySelector(".cart__ctas");

  if (targetElement) {
    // Create your custom widget container
    const widgetContainer = document.createElement("div");
    widgetContainer.className = "productmonitor";

    // Insert the custom widget before the 'shipinsure' div
    targetElement.insertBefore(widgetContainer, targetElement.firstChild);

    // Insert your components here...
    widgetContainer.innerHTML = `
        <div>Event Info</div>
        <div>Cart Info</div>
        <button id="toggleButton">Toggle</button>
      `;

    // Additional JavaScript to handle interaction...
    const toggleButton = document.getElementById("toggleButton");
    toggleButton.addEventListener("click", function () {
      // Toggle functionality here
    });
  }
});
