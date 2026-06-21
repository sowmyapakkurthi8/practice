window.onload = getProduct;
function getProduct() {
    fetch("https://dummyjson.com/products/1")
        .then(function(response) {
            return response.json();
        })
        .then(function(product) {
            var cardHTML = `
                <div class="card product-card">
                    <img src="${product.images[0]}" 
                         class="card-img-top product-img" 
                         alt="${product.title}">
                    <div class="card-body text-center p-4">
                        <h2 class="card-title text-primary">
                            ${product.title}
                        </h2>
                        <p class="price">
                            $${product.price}
                        </p>

                        <p class="brand">
                            ${product.brand}
                        </p>

                        <span class="badge bg-warning text-dark fs-6 mb-3">
                            ${product.category}
                        </span>

                        <p class="card-text text-muted">
                            ${product.description}
                        </p>

                        <button class="btn btn-danger rounded-pill px-4">
                            Buy Now
                        </button>
                    </div>
                </div>
            `;  
            
            document.getElementById("product").innerHTML = cardHTML;
        })
        .catch(function(error) {
            console.log("Error:", error);
            document.getElementById("product").innerHTML = "<p class='text-center text-muted'>Failed to load product</p>";
        });
}