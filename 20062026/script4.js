async function fetchProducts()
{
let response = await fetch("https://dummyjson.com/products");
let data = await response.json();


let selectedProducts = [
    "Eyeshadow Palette with Mirror",
    "Essence Mascara Lash Princess",
    "Powder Canister",
    "Red Lipstick"
];

let products = data.products.filter(product =>
    selectedProducts.includes(product.title)
);

let output = "";

products.forEach(product => {

    output += `
    <div class="col-md-6">

        <div class="card shadow-lg h-100">

            <img src="${product.thumbnail}" class="card-img-top">

            <div class="card-body text-center">

                <h4 class="card-title text-primary">
                    ${product.title}
                </h4>

                <p class="card-text">
                    ${product.description}
                </p>

                <h5 class="text-danger fw-bold">
                    $${product.price}
                </h5>

                <button class="btn btn-success rounded-pill px-4">
                    Add to Cart
                </button>

            </div>

        </div>

    </div>
    `;
});

document.getElementById("products").innerHTML = output;

}

fetchProducts();
