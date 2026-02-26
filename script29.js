// Product list (Array of objects)
var products = [
    { name: "Mouse", price: 25 },
    { name: "Keyboard", price: 100 },
    { name: "Monitor", price: 300 },
    { name: "Cable", price: 10 },
    { name: "Pad", price: 15 }
];

// Function to display products
function displayProducts(list) {
    var ul = document.getElementById("productList");
    ul.innerHTML = "";   // clear previous items

    list.forEach(function(product) {
        var li = document.createElement("li");
        li.textContent = product.name + " - $" + product.price;
        ul.appendChild(li);
    });
}

// Show all products initially
displayProducts(products);

// Filter function
function filterProducts() {

    var filtered = products.filter(function(product) {
        return product.price < 50;
    });

    displayProducts(filtered);
}
function resetProducts() {
    displayProducts(products);
}