let cartTotal = 0;
let cartItems = [];


function initializeCart() {
    const storedTotal = localStorage.getItem('cartTotal');
    const storedItems = localStorage.getItem('cartItems');
    if (storedTotal) {
        cartTotal = parseFloat(storedTotal);
        document.getElementById('cart-total').innerText = cartTotal.toFixed(2);
    }
    if (storedItems) {
        cartItems = JSON.parse(storedItems);
    }
}
function clearCart() {
    cartTotal = 0;
    cartItems = [];
    localStorage.removeItem('cartTotal');
    localStorage.removeItem('cartItems');
    document.getElementById('cart-total').innerText = cartTotal.toFixed(2);
}
function updateCartTotal() {
    const storedTotal = localStorage.getItem('cartTotal');
    const storedItems = localStorage.getItem('cartItems');
    if (storedTotal) {
        cartTotal = parseFloat(storedTotal);
        document.getElementById('cart-total').innerText = cartTotal.toFixed(2);
    }
    if (storedItems) {
        cartItems = JSON.parse(storedItems);
    }
}

function addToCart(event) {
    const button = event.target;
    const productCard = button.closest('.description');
    const priceElement = productCard.querySelector('.product-price');
    const price = parseFloat(priceElement.innerText);
    const title = productCard.querySelector('.book-title').innerText;

    cartTotal += price;
    cartItems.push({ title, price });

    localStorage.setItem('cartTotal', cartTotal.toFixed(2));
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    //document.getElementById('cart-total').innerText = cartTotal.toFixed(2);
    alert('Item added to cart!');
}

function setupEventListeners() {
    const buttons = document.querySelectorAll('.add-to-cart');
    buttons.forEach(button => {
        button.addEventListener('click', addToCart);
    });

    const clearCartButton = document.getElementById('clear-cart');
    if (clearCartButton) {
        clearCartButton.addEventListener('click', clearCart);
    }
}
function removeFromCart(index) {
    const item = cartItems[index];
    cartTotal -= item.price;
    cartItems.splice(index, 1);

    localStorage.setItem('cartTotal', cartTotal.toFixed(2));
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    displayCartItems();
}
function displayCartItems() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = ''; // Clear existing items
    cartItems.forEach((item, index) => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'cart-item';
        itemDiv.innerHTML = `<p>${item.title}: $${item.price.toFixed(2)}</p>
        <button class="btn btn-danger btn-sm" onclick="removeFromCart(${index})">Remove</button>
        `;
        cartItemsContainer.appendChild(itemDiv);
    });
    document.getElementById('cart-total').innerText = cartTotal.toFixed(2);
}

document.addEventListener('DOMContentLoaded', () => {
    //initializeCart();
    updateCartTotal();
    setupEventListeners();
    
    if (document.getElementById('cart-items')) {
        displayCartItems();
    }
});