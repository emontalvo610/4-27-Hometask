console.log("Here is the content script running");

function initWidget() {
  const cartFormElement = document.querySelector(".cart__ctas");
  console.log("cardform", { content: cartFormElement.innerHTML });
  const widget = document.createElement("div");
  widget.innerHTML = ` 
    <div class="si-widget" >
        <div class="si-widget-container">
        <div class="si-widget-flex-column left">
        
        
        <div class="si-text-container">
        <div class="si-header">
        Daniel Widget
        <svg class="si-leaf-icon" width="12" height="13" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.2199 2.69133C12.2137 2.5843 12.1684 2.48329 12.0925 2.40748C12.0167 2.33167 11.9157 2.28633 11.8087 2.28008C7.64533 2.03563 4.31049 3.28906 2.88861 5.64063C2.39575 6.44503 2.15288 7.37769 2.1908 8.32031C2.21555 8.9231 2.3382 9.51785 2.55393 10.0813C2.5666 10.1159 2.58785 10.1468 2.61568 10.1711C2.64352 10.1953 2.67704 10.2121 2.71312 10.2199C2.74921 10.2278 2.78668 10.2263 2.82205 10.2157C2.85742 10.2051 2.88954 10.1858 2.91541 10.1595L7.56385 5.43992C7.6045 5.39928 7.65275 5.36703 7.70586 5.34503C7.75897 5.32304 7.81589 5.31171 7.87338 5.31171C7.93086 5.31171 7.98779 5.32304 8.0409 5.34503C8.09401 5.36703 8.14226 5.39928 8.18291 5.43992C8.22356 5.48057 8.2558 5.52883 8.2778 5.58194C8.2998 5.63505 8.31112 5.69197 8.31112 5.74946C8.31112 5.80694 8.2998 5.86386 8.2778 5.91697C8.2558 5.97008 8.22356 6.01834 8.18291 6.05899L3.10299 11.2155L2.32697 11.9915C2.24627 12.0701 2.19809 12.1761 2.19201 12.2886C2.18593 12.4011 2.2224 12.5117 2.29416 12.5985C2.33346 12.644 2.38173 12.681 2.43594 12.707C2.49015 12.733 2.54914 12.7476 2.60923 12.7498C2.66933 12.752 2.72923 12.7418 2.7852 12.7198C2.84118 12.6978 2.89202 12.6645 2.93455 12.622L3.85275 11.7038C4.62604 12.0779 5.40643 12.2819 6.18025 12.3092C6.24114 12.3114 6.30184 12.3125 6.36236 12.3125C7.2436 12.3148 8.10812 12.072 8.8594 11.6114C11.211 10.1895 12.4649 6.85524 12.2199 2.69133Z" fill="#1BB333"></path>
        </svg>
        <span class="infoPopupTag">ⓘ</span>
        </div>
        
        
        </div>
        </div>
        <div class="si-widget-flex-column right">
        <div class="si-switch-and-price-container">
        <label class="switch">
        <input type="checkbox" class="" id="widget-checkbox">
        </label>
        
        </div>
        </div>
        </div>

        <div class="event-button" title="Event Info">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" id="event"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M16 13h-3c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1zm0-10v1H8V3c0-.55-.45-1-1-1s-1 .45-1 1v1H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-1V3c0-.55-.45-1-1-1s-1 .45-1 1zm2 17H6c-.55 0-1-.45-1-1V9h14v10c0 .55-.45 1-1 1z"></path></svg>
        <span>Event Info <span>
        </div>

        <div class="cart-button" title="Cart Info">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" id="event"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M16 13h-3c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1zm0-10v1H8V3c0-.55-.45-1-1-1s-1 .45-1 1v1H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-1V3c0-.55-.45-1-1-1s-1 .45-1 1zm2 17H6c-.55 0-1-.45-1-1V9h14v10c0 .55-.45 1-1 1z"></path></svg>
        <span>Cart Info<span>
        </div>
        
    <div>
    `;
  console.log("my widge", widget);
  console.log("updated cart element", cartFormElement.innerHTML);
  cartFormElement.append(widget);
}

function configureWidgetCheckbox() {
  const widgetCheckbox = document.querySelector("#widget-checkbox");
  const widgetDisabled = localStorage.getItem("disable-shopify-widget");
  widgetCheckbox.checked = !!!widgetDisabled;
  widgetCheckbox.onchange = function (e) {
    localStorage.setItem("disable-shopify-widget", e.target.checked);
  };
}

function scrapeProductImages() {
  const widgetDisabled = localStorage.getItem("disable-shopify-widget");
  if (!widgetDisabled) return;
  const images = document.querySelectorAll(".product__media img");
  const imageUrls = [];
  for (let i = 0; i < images.length; i++) {
    imageUrls.push(images[i].src);
  }

  const path = location.pathname.split("/");
  const productName = path[path.length - 1];
  const data = {
    name: productName,
    image: imageUrls.join(","),
  };

  fetch("http://localhost:8080/api/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      // Handle the response data
    })
    .catch((error) => {
      // Handle any errors
    });
}
// Cart info Event handlers and functions

function getCartItems() {
  const items = [];
  document.querySelectorAll(".cart-item__details").forEach((item) => {
    const name = item.querySelector(".cart-item__name").textContent.trim();
    const price = item.querySelector(".product-option").textContent.trim();
    items.push({ name, price });
  });
  return items;
}

function getCartTotal() {
  const totalContainer = document.querySelector(".totals__subtotal-value");
  return totalContainer ? totalContainer.textContent.trim() : "";
}

function createCartInfoModal() {
  // Create container for the modal
  const modalContainer = document.createElement("div");
  modalContainer.id = "cartInfoModal";
  modalContainer.style.cssText =
    "display:block; position:fixed; top:50%; left:50%; transform:translate(-50%, -50%); background:white; z-index:1000; padding:20px; border-radius:5px;";

  // Adding inner HTML content
  modalContainer.innerHTML = `
  <h2>Cart Details</h2>
  <div id="cartItemsContainer"></div>
  <div id="totalPriceContainer"></div>
  <button id="closeButton">Close</button>
  `;

  document.body.appendChild(modalContainer);

  // Hook up the close event to remove the modal
  document.getElementById("closeButton").addEventListener("click", function () {
    modalContainer.remove();
  });
}

async function createEventInfoModal() {
  // Fetch data
  const products = await fetchProductData();

  // Create modal container
  const modalContainer = document.createElement("div");
  modalContainer.id = "eventInfoModal";
  modalContainer.style.cssText =
    "display:block; position:fixed; top:50%; left:50%; transform:translate(-50%, -50%); background:white; z-index:1000; padding:20px; border-radius:5px;";

  // Add HTML for each product, including product name and images
  modalContainer.innerHTML = products
    .map(
      (product) => `
      <div>
          <h4>${product.name}</h4>
          <div>
              ${product.image
                .split(",")
                .map(
                  (url) =>
                    `<img src="${url}" alt="${product.name}" style="width:100px;">`
                )
                .join("")}
          </div>
      </div>
  `
    )
    .join("");

  // Add a close button
  modalContainer.innerHTML +=
    "<button onclick=\"document.body.removeChild(document.getElementById('eventInfoModal'));\">Close</button>";

  // Append to body
  document.body.appendChild(modalContainer);
}

async function fetchProductData() {
  try {
    const response = await fetch("http://localhost:8080/api/products");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch products:", error);
    return []; // Return an empty array on failure
  }
}

function displayCartInfo() {
  createCartInfoModal(); // Ensure modal creation is prior to data insertion.

  const modal = document.getElementById("cartInfoModal");
  const itemsContainer = document.getElementById("cartItemsContainer");
  const totalPriceContainer = document.getElementById("totalPriceContainer");

  const items = getCartItems();
  itemsContainer.innerHTML = items
    .map((item) => `<p>${item.name}: ${item.price}</p>`)
    .join("");
  totalPriceContainer.innerHTML = `<strong>Total: ${getCartTotal()}</strong>`;

  modal.style.display = "block";
}

// Event Info Handler
async function displayEventInfo() {
  await createEventInfoModal();
}

// All Event Handlers
function attachEventHandlers() {
  configureWidgetCheckbox();
  scrapeProductImages();
  document
    .querySelector(".cart-button")
    .addEventListener("click", displayCartInfo);
  document
    .querySelector(".event-button")
    .addEventListener("click", displayEventInfo);
}

setTimeout(async () => {
  console.log(" initializing!");
  if (location.pathname.indexOf("cart") != -1) {
    await initWidget();
    attachEventHandlers();
  } else {
    scrapeProductImages();
  }
}, 5000);
