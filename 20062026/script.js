async function fetchProducts() {
    try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();

        const productContainer =
            document.getElementById("product-container");

        data.products.forEach(product => {

            const card = document.createElement("div");
            card.classList.add("card");

            card.innerHTML = `
                <img src="${product.thumbnail}" alt="${product.title}">
                
                <div class="card-content">
                    <h2>${product.title}</h2>
                    
                    <p class="price">$${product.price}</p>
                    
                    <p class="description">
                        ${product.description.substring(0, 80)}...
                    </p>
                </div>
            `;

            productContainer.appendChild(card);
        });

    } catch (error) {
        console.error("Error fetching products:", error);
    }
}

fetchProducts();