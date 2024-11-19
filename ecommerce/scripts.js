// JavaScript for SecureDrive Solutions Website
const cart = [];

// Function to update cart count
function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    cartCount.textContent = cart.length;
}

// Function to add an item to the cart
function addToCart(productId, productName, productPrice) {
    const product = {
        id: productId,
        name: productName,
        price: productPrice,
    };

    cart.push(product);
    updateCartCount();
    alert(`${productName} has been added to your cart.`);
}

// Function to view cart contents
function viewCart() {
    if (cart.length === 0) {
        alert('Your cart is empty.');
        return;
    }

    let cartDetails = 'Your Cart:\n';
    let total = 0;

    cart.forEach((item, index) => {
        cartDetails += `${index + 1}. ${item.name} - $${item.price}\n`;
        total += item.price;
    });

    cartDetails += `\nTotal: $${total.toFixed(2)}`;
    alert(cartDetails);
}

// Adding event listeners to "Add to Cart" buttons
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.add-to-cart');
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            const productId = button.getAttribute('data-id');
            const productName = button.previousElementSibling.previousElementSibling.textContent;
            const productPrice = parseFloat(button.previousElementSibling.textContent.replace('$', ''));

            addToCart(productId, productName, productPrice);
        });
    });

    // Event listener for cart icon
    const cartIcon = document.querySelector('.cart-icon');
    cartIcon.addEventListener('click', viewCart);
});

function toggleMenu() {
    const nav = document.querySelector('.nav');
    nav.classList.toggle('show');
}
