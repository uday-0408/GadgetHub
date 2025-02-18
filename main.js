document.addEventListener("DOMContentLoaded", function () {
  updateCartCount();

  const minRange = document.getElementById("min-range");
  const maxRange = document.getElementById("max-range");
  const minPriceInput = document.getElementById("min-price-input");
  const maxPriceInput = document.getElementById("max-price-input");
  const categorySelect = document.querySelector(".filters-section select");
  const conditionCheckboxes = document.querySelectorAll(".form-check-input");

  // Sync range sliders with input fields
  minRange.addEventListener("input", function () {
    minPriceInput.value = minRange.value;
    fetchProducts();
  });

  maxRange.addEventListener("input", function () {
    maxPriceInput.value = maxRange.value;
    fetchProducts();
  });

  categorySelect.addEventListener("change", fetchProducts);
  conditionCheckboxes.forEach((checkbox) =>
    checkbox.addEventListener("change", fetchProducts)
  );

  fetchProducts(); // Fetch products on page load
});

// Cart storage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(product) {
  const existingItem = cart.find((item) => item.serialNo === product.serialNo);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
}

function removeFromCart(serialNo) {
  cart = cart.filter((item) => item.serialNo !== serialNo);
  localStorage.setItem("cart");
  updateCartCount();
}

function updateCartCount() {
  const cartCount = document.getElementById("cart-count");
  if (cartCount) {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
  }
}

class ProductStore {
  constructor() {
    this.products = [
      // Laptops
      {
        name: "Laptop",
        category: "Laptops",
        Product_condition: "new",
        description: "High-performance laptop",
        serialNo: "LAP001",
        price: 75000,
        image: "Images/laptop/laptop1.jpg",
      },
      {
        name: "Gaming Laptop",
        category: "Laptops",
        Product_condition: "used",
        description: "Powerful gaming laptop",
        serialNo: "LAP002",
        price: 60000,
        image: "Images/laptop/laptop1.jpg",
      },
      {
        name: "Business Laptop",
        category: "Laptops",
        Product_condition: "new",
        description: "Ideal for professionals",
        serialNo: "LAP003",
        price: 90000,
        image: "Images/laptop/laptop1.jpg",
      },
      {
        name: "Student Laptop",
        category: "Laptops",
        Product_condition: "used",
        description: "Budget-friendly laptop",
        serialNo: "LAP004",
        price: 35000,
        image: "Images/laptop/laptop1.jpg",
      },
      {
        name: "Touchscreen Laptop",
        category: "Laptops",
        Product_condition: "new",
        description: "Convertible touchscreen laptop",
        serialNo: "LAP005",
        price: 80000,
        image: "Images/laptop/laptop1.jpg",
      },
      {
        name: "Ultra-thin Laptop",
        category: "Laptops",
        Product_condition: "new",
        description: "Sleek and lightweight",
        serialNo: "LAP006",
        price: 70000,
        image: "Images/laptop/laptop1.jpg",
      },
      {
        name: "Basic Laptop",
        category: "Laptops",
        Product_condition: "used",
        description: "Affordable laptop for basic tasks",
        serialNo: "LAP007",
        price: 25000,
        image: "Images/laptop/laptop1.jpg",
      },
      {
        name: "Workstation Laptop",
        category: "Laptops",
        Product_condition: "new",
        description: "Best for high-end tasks",
        serialNo: "LAP008",
        price: 100000,
        image: "Images/laptop/laptop1.jpg",
      },

      // Smartphones
      {
        name: "Smartphone",
        category: "Smartphones",
        Product_condition: "new",
        description: "Latest model smartphone",
        serialNo: "PHN001",
        price: 50000,
        image: "Images/mobile/phone1.jpg",
      },
      {
        name: "Budget Smartphone",
        category: "Smartphones",
        Product_condition: "used",
        description: "Affordable smartphone",
        serialNo: "PHN002",
        price: 15000,
        image: "Images/mobile/phone1.jpg",
      },
      {
        name: "Flagship Smartphone",
        category: "Smartphones",
        Product_condition: "new",
        description: "Top-tier smartphone",
        serialNo: "PHN003",
        price: 80000,
        image: "Images/mobile/phone1.jpg",
      },
      {
        name: "Gaming Smartphone",
        category: "Smartphones",
        Product_condition: "new",
        description: "Designed for gaming",
        serialNo: "PHN004",
        price: 60000,
        image: "Images/mobile/phone1.jpg",
      },
      {
        name: "Mid-Range Smartphone",
        category: "Smartphones",
        Product_condition: "new",
        description: "Balanced performance and price",
        serialNo: "PHN005",
        price: 30000,
        image: "Images/mobile/phone1.jpg",
      },
      {
        name: "Entry-Level Smartphone",
        category: "Smartphones",
        Product_condition: "used",
        description: "Basic smartphone features",
        serialNo: "PHN006",
        price: 10000,
        image: "Images/mobile/phone1.jpg",
      },
      {
        name: "Foldable Smartphone",
        category: "Smartphones",
        Product_condition: "new",
        description: "Innovative foldable screen",
        serialNo: "PHN007",
        price: 90000,
        image: "Images/mobile/phone1.jpg",
      },
      {
        name: "Compact Smartphone",
        category: "Smartphones",
        Product_condition: "used",
        description: "Small-sized phone with great performance",
        serialNo: "PHN008",
        price: 25000,
        image: "Images/mobile/phone1.jpg",
      },

      // Wearables
      {
        name: "Smartwatch",
        category: "Wearables",
        Product_condition: "new",
        description: "Stylish smartwatch",
        serialNo: "SW001",
        price: 25000,
        image: "Images/wearable/watch1.jpeg",
      },
      {
        name: "Fitness Band",
        category: "Wearables",
        Product_condition: "used",
        description: "Track your fitness",
        serialNo: "SW002",
        price: 8000,
        image: "Images/wearable/watch1.jpeg",
      },
      {
        name: "Premium Smartwatch",
        category: "Wearables",
        Product_condition: "new",
        description: "High-end smartwatch",
        serialNo: "SW003",
        price: 40000,
        image: "Images/wearable/watch1.jpeg",
      },
      {
        name: "Basic Smartwatch",
        category: "Wearables",
        Product_condition: "used",
        description: "Budget-friendly smartwatch",
        serialNo: "SW004",
        price: 15000,
        image: "Images/wearable/watch1.jpeg",
      },
      {
        name: "Hybrid Smartwatch",
        category: "Wearables",
        Product_condition: "new",
        description: "Analog watch with smart features",
        serialNo: "SW005",
        price: 35000,
        image: "Images/wearable/watch1.jpeg",
      },
      {
        name: "Kids Smartwatch",
        category: "Wearables",
        Product_condition: "new",
        description: "Designed for children",
        serialNo: "SW006",
        price: 12000,
        image: "Images/wearable/watch1.jpeg",
      },
      {
        name: "Smart Ring",
        category: "Wearables",
        Product_condition: "used",
        description: "Wearable technology on your finger",
        serialNo: "SW007",
        price: 18000,
        image: "Images/wearable/watch1.jpeg",
      },
      {
        name: "Luxury Smartwatch",
        category: "Wearables",
        Product_condition: "new",
        description: "Premium smartwatch with luxury design",
        serialNo: "SW008",
        price: 100000,
        image: "Images/wearable/watch1.jpeg",
      },
    ];

    this.categoryMap = new Map();
    this.productSet = new Set();

    this.products.forEach((product) => {
      this.productSet.add(product.name.toLowerCase());

      if (!this.categoryMap.has(product.category)) {
        this.categoryMap.set(product.category, []);
      }
      this.categoryMap.get(product.category).push(product);
    });
  }

  // Filter products by category using HashMap (O(1))
  filterByCategory(category) {
    return category && category !== ""
      ? this.categoryMap.get(category) || []
      : this.products;
  }

  // Check if a product exists using Set (O(1))
  hasProduct(name) {
    return this.productSet.has(name.toLowerCase());
  }

  // QuickSort function to sort products by price (O(n log n))
  quickSort(arr) {
    if (arr.length <= 1) return arr;

    const pivot = arr[arr.length - 1];
    const left = arr.filter((p) => p.price < pivot.price);
    const middle = arr.filter((p) => p.price === pivot.price);
    const right = arr.filter((p) => p.price > pivot.price);

    return [...this.quickSort(left), ...middle, ...this.quickSort(right)];
  }

  // Sort products by price
  sortByPrice() {
    this.products = this.quickSort(this.products);
  }
}

const store = new ProductStore();

function fetchProducts() {
  const productsContainer = document.getElementById("products-container");
  if (!productsContainer) {
    console.error("Error: #products-container not found!");
    return;
  }

  const selectedCategory = document.querySelector(
    ".filters-section select"
  ).value;
  const selectedConditions = Array.from(
    document.querySelectorAll(".form-check-input:checked")
  ).map((cb) => cb.value);
  const minPrice =
    parseInt(document.getElementById("min-price-input").value) || 0;
  const maxPrice =
    parseInt(document.getElementById("max-price-input").value) ||
    Number.MAX_VALUE;

  let filteredProducts = store.filterByCategory(selectedCategory);

  // Filter by condition
  if (selectedConditions.length > 0) {
    filteredProducts = filteredProducts.filter((product) =>
      selectedConditions.includes(product.Product_condition)
    );
  }

  // Filter by price range
  filteredProducts = filteredProducts.filter(
    (product) => product.price >= minPrice && product.price <= maxPrice
  );

  // Sort products by price
  filteredProducts = store.quickSort(filteredProducts);

  // Display products
  productsContainer.innerHTML = "";
  if (filteredProducts.length === 0) {
    productsContainer.innerHTML =
      "<p class='text-center'>No products found.</p>";
    return;
  }

  filteredProducts.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.className = "col-md-4 mb-4";
    productCard.innerHTML = `
      <div class="card">
          <img src="${product.image}" class="card-img-top" alt="${product.name}">
          <div class="card-body">
              <h5 class="card-title">${product.name}</h5>
              <p class="card-text">Category: ${product.category}</p>
              <p class="card-text">Condition: ${product.Product_condition}</p>
              <p class="card-text">Description: ${product.description}</p>
              <p class="card-text">Serial No: ${product.serialNo}</p>
              <p class="card-text">Price: ₹${product.price}</p>
              <button class="btn btn-primary w-100 add-to-cart" data-serial="${product.serialNo}">
                Add to Cart
              </button>
          </div>
      </div>`;
    productsContainer.appendChild(productCard);

    // Add event listener to the button
    productCard.querySelector(".add-to-cart").addEventListener("click", () => {
      const productToAdd = store.products.find(
        (p) => p.serialNo === product.serialNo
      );
      addToCart(productToAdd);
    });
  });
}
