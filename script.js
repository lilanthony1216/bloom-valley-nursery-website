document.addEventListener("DOMContentLoaded", function () {
  // Subscribe buttons on all pages
  const subscribeButtons = document.querySelectorAll(".subscribe-btn");
  subscribeButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      alert("Thank you for subscribing.");
    });
  });

  // Add to Cart buttons on gallery page
  const addToCartButtons = document.querySelectorAll(".add-cart-btn");
  addToCartButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      const itemName = button.getAttribute("data-item");
      let cart = JSON.parse(sessionStorage.getItem("cart")) || [];
      cart.push(itemName);
      sessionStorage.setItem("cart", JSON.stringify(cart));
      alert("Item added to the cart.");
    });
  });

  // View Cart button
  const viewCartButton = document.getElementById("view-cart-btn");
  if (viewCartButton) {
    viewCartButton.addEventListener("click", function () {
      let cart = JSON.parse(sessionStorage.getItem("cart")) || [];

      if (cart.length === 0) {
        alert("Your cart is empty.");
      } else {
        alert("Items in your cart:\n" + cart.join("\n"));
      }
    });
  }

  // Clear Cart button
  const clearCartButton = document.getElementById("clear-cart-btn");
  if (clearCartButton) {
    clearCartButton.addEventListener("click", function () {
      sessionStorage.removeItem("cart");
      alert("Cart cleared.");
    });
  }

  // Process Order button
  const processOrderButton = document.getElementById("process-order-btn");
  if (processOrderButton) {
    processOrderButton.addEventListener("click", function () {
      sessionStorage.removeItem("cart");
      alert("Thank you for your order.");
    });
  }

  // Contact form submit button with localStorage
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();

      if (contactForm.checkValidity()) {
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const order = document.getElementById("order").value;
        const feedback = document.getElementById("feedback").value;

        const customerInfo = {
          name: name,
          email: email,
          customOrder: order,
          feedback: feedback,
        };

        localStorage.setItem("customOrderInfo", JSON.stringify(customerInfo));
        alert("Thank you for your message.");
        contactForm.reset();
      } else {
        contactForm.reportValidity();
      }
    });
  }
});
