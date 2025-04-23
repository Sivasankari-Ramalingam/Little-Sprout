let cartTotal = 0;
let cartItems = [];

function clearCart() {
    cartTotal = 0;
    cartItems = [];
    // localStorage.removeItem('cartTotal');
    // localStorage.removeItem('cartItems');
    localStorage.setItem('cartTotal', cartTotal.toFixed(2));
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    document.getElementById('cart-total').innerText = cartTotal.toFixed(2);
    window.location.reload();
}
// function updateCartTotal() {
//     const storedTotal = localStorage.getItem('cartTotal');
//     const storedItems = localStorage.getItem('cartItems');
    
//     if (storedTotal) {
//         cartTotal = parseFloat(storedTotal);
//         document.getElementById('cart-total').innerText = cartTotal.toFixed(2);
//     }
//     if (storedItems) {
//         cartItems = JSON.parse(storedItems);
//     }
// }

function loadCart() {
    var storedTotal = localStorage.getItem('cartTotal');
    var storedItems = localStorage.getItem('cartItems');

    if (!storedTotal || !storedItems){
        storedTotal = 0;
        storedItems = [];
        localStorage.setItem('cartTotal', 0);
        localStorage.setItem('cartItems', JSON.stringify(storedItems));
    }    
}

function addToCart(event) {
    const button = event.target;
    const productCard = button.closest('.description');
    const priceElement = productCard.querySelector('.product-price');
    const price = parseFloat(priceElement.innerText);
    const title = productCard.querySelector('.book-title').innerText;

    var cartTotal = parseFloat(localStorage.getItem('cartTotal'));
    const cartItems = JSON.parse(localStorage.getItem('cartItems')); 
    
    cartTotal += price;
    cartItems.push({ title, price });

    localStorage.setItem('cartTotal', cartTotal.toFixed(2));
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    //document.getElementById('cart-total').innerText = cartTotal.toFixed(2);
    alert("Item added successfully");
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

    // const backbutton = document.querySelector('#back');
    // backbutton.addEventListener('click', reload);
}

function displayCartItems() {
    var cartTotal = parseFloat(localStorage.getItem('cartTotal'));
    const cartItems = JSON.parse(localStorage.getItem('cartItems')); 
    const cartItemsContainer = document.getElementById('cart-items');
    cartItems.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'cart-item';
        itemDiv.innerHTML = `<p>${item.title}: $${item.price.toFixed(2)}</p>`;
        cartItemsContainer.appendChild(itemDiv);
    });
    document.getElementById('cart-total').innerText = cartTotal.toFixed(2);
}

function reload(){
    window.location.reload();
   
    //window.location.href = 'fairytale.html';
}

document.addEventListener('DOMContentLoaded', () => {
    
    loadCart();
    setupEventListeners();
    if (document.getElementById('cart-items')) {
        displayCartItems();
    }


    //search functionality
    document.getElementById('searchForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const query = document.getElementById('searchInput').value.toLowerCase();
        const books = document.querySelectorAll('#fairytale .product');
        
        books.forEach(book => {
            const title = book.querySelector('.book-title').textContent.toLowerCase();
            if (title.includes(query)) {
                book.style.display = 'block';
            } else {
                book.style.display = 'none';
            }
        });
    });

    
});