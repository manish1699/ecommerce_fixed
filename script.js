document.addEventListener('DOMContentLoaded', function() {
    // This is where you can dynamically generate product details, images, and prices
    const mainContent = document.querySelector('.main-content');

    for (let i = 0; i < 10; i++) { // Change 10 to the number of products you want to display
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');

        // You can generate random product details, images, and prices here
        const productName = `Product ${i + 1}`;
        const productImage = `https://placekitten.com/200/200?image=${i + 1}`;
        const productPrice = Math.floor(Math.random() * 100) + 1;

        productDiv.innerHTML = `
            <img src="${productImage}" alt="${productName}">
            <h3>${productName}</h3>
            <p>$${productPrice}</p>
            <button>Add to Cart</button>
        `;

        mainContent.appendChild(productDiv);
    }
});