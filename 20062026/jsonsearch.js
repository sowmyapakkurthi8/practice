window.onload = getPhones;
function getPhones() {
    fetch("https://dummyjson.com/products/search?q=phone")
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            var productsContainer = document.getElementById("products");
            var allProducts = data.products;
            var cards = '';
            allProducts.forEach(function(product) {
                cards += `
                    <div class="col-md-6 col-lg-4 col-xl-3">
                        <div class="card product-card">
                            <img src="${product.images[0]}" 
                                 class="card-img-top product-img" 
                                 alt="${product.title}">
                            <div class="card-body text-center d-flex flex-column">
                                <h5 class="card-title text-primary">${product.title}</h5>
                                <p class="price">$${product.price}</p>
                                <p class="brand">${product.brand}</p>
                                <span class="badge bg-info text-dark mb-2">${product.category}</span>
                                <p class="card-text text-muted flex-grow-1">${product.description}</p>
                                <button class="btn btn-primary rounded-pill mt-2">
                                    Buy Now
                                </button>
                            </div>
                        </div>
                    </div>
                `;
            });

            productsContainer.innerHTML = cards;
        })
        .catch(function(error) {
            console.log("Error:", error);
            document.getElementById("products").innerHTML = `
                <div class="col-12">
                    <p class="text-center text-white fs-4">Failed to load products</p>
                </div>
            `;
        });
}