// -----------------------
// Cart Class Definition
// -----------------------
class Cart {
  constructor(limit = 10) {
    // Load cart items from localStorage or start with an empty array.
    this.items = JSON.parse(localStorage.getItem("cart")) || [];
    this.limit = limit;
    this.cartCountEl = document.getElementById("cart-count");
  }

  // Save the current cart items to localStorage and update the cart badge.
  save() {
    localStorage.setItem("cart", JSON.stringify(this.items));
    this.updateDisplayCount();
  }

  // Returns the total quantity of items in the cart.
  getTotalCount() {
    return this.items.reduce((total, item) => total + item.quantity, 0);
  }

  // Update the badge (cart count) shown in navigation.
  updateDisplayCount() {
    if (this.cartCountEl) {
      this.cartCountEl.textContent = this.getTotalCount();
    }
  }

  // Add an item to the cart (FIFO behavior if cart limit is reached).
  addItem(product) {
    const existing = this.items.find(
      (item) => item.serialNo === product.serialNo
    );
    if (existing) {
      existing.quantity++;
    } else {
      if (this.items.length >= this.limit) {
        // Remove the oldest item if the limit is reached.
        this.items.shift();
      }
      this.items.push({ ...product, quantity: 1 });
    }
    this.save();
  }
}

// Global instance of the Cart class.
const cartInstance = new Cart(10);

// -----------------------
// ProductStore Class
// -----------------------
class ProductStore {
  constructor() {
    // For brevity, the product items are not listed here.
    this.products = [
      {
        name: "Dell XPS 15 9520",
        category: "laptop",
        product_condition: "NEW",
        description:
          "High-performance 15.6-inch laptop with Intel Core i7 processor, 32GB RAM, and 1TB SSD, suitable for professionals and creators.",
        serialNo: "XPS15-9520-001",
        price: 56669,
        image: "Images/laptop/XPS15-9520-001.jpg",
      },
      {
        name: "iPhone 15 Pro",
        category: "Smartphone",
        product_condition: "new",
        description:
          "Apple iPhone 15 Pro with A17 Pro chip, 256GB storage, and advanced camera system.",
        serialNo: "IPH15PRO-256",
        price: 134999,
        image: "Images/mobile/IPH15PRO-256.jpg",
      },
      {
        name: "Samsung Galaxy Watch 6",
        category: "Wearable",
        product_condition: "new",
        description:
          "Premium smartwatch with advanced health tracking, AMOLED display, and seamless integration with Samsung devices.",
        serialNo: "SGW6-001",
        price: 35999,
        image: "Images/wearable/SGW6-001.jpg",
      },

      {
        name: "Asus ROG Strix G16",
        category: "Laptops",
        product_condition: "new",
        description:
          "Gaming laptop with Intel Core i9, 16GB RAM, RTX 4070, and 1TB SSD.",
        serialNo: "ROG-G16-001",
        price: 142999,
        image: "Images/laptop/ROG-G16-001.jpg",
      },
      {
        name: "HP Spectre x360",
        category: "Laptops",
        product_condition: "new",
        description:
          "Convertible 2-in-1 laptop with Intel Core i7, 16GB RAM, and 512GB SSD.",
        serialNo: "SPECTRE-X360-002",
        price: 112999,
        image: "Images/laptop/SPECTRE-X360-002.jpg",
      },
      {
        name: "Lenovo Legion 5 Pro",
        category: "Laptops",
        product_condition: "new",
        description:
          "Powerful gaming laptop with AMD Ryzen 7, RTX 3060, and 1TB SSD.",
        serialNo: "LEGION5PRO-003",
        price: 126499,
        image: "Images/laptop/LEGION5PRO-003.jpg",
      },
      {
        name: "Acer Predator Helios 300",
        category: "Laptops",
        product_condition: "used",
        description:
          "Gaming beast with Intel Core i7, 16GB RAM, RTX 3060, and 1TB SSD.",
        serialNo: "PREDATOR-004",
        price: 118999,
        image: "Images/laptop/PREDATOR-004.jpg",
      },
      {
        name: "MSI Creator Z16",
        category: "Laptops",
        product_condition: "new",
        description:
          "Premium creator laptop with Intel Core i9, RTX 3070, and 32GB RAM.",
        serialNo: "CREATORZ16-005",
        price: 179999,
        image: "Images/laptop/CREATORZ16-005.jpg",
      },
      {
        name: "Razer Blade 15",
        category: "Laptops",
        product_condition: "new",
        description:
          "Ultra-thin gaming laptop with Intel i7, RTX 3070, and 16GB RAM.",
        serialNo: "BLADE15-006",
        price: 184999,
        image: "Images/laptop/BLADE15-006.jpg",
      },
      {
        name: "LG Gram 17",
        category: "Laptops",
        product_condition: "new",
        description:
          "Lightweight ultrabook with Intel i7, 16GB RAM, and 1TB SSD.",
        serialNo: "GRAM17-007",
        price: 134999,
        image: "Images/laptop/GRAM17-007.jpg",
      },
      {
        name: "Microsoft Surface Laptop 5",
        category: "Laptops",
        product_condition: "used",
        description:
          "Sleek laptop with Intel i7, 16GB RAM, and PixelSense touchscreen.",
        serialNo: "SURFACE5-008",
        price: 124999,
        image: "Images/laptop/SURFACE5-008.jpg",
      },
      {
        name: "Samsung Galaxy Book 3 Ultra",
        category: "Laptops",
        product_condition: "new",
        description:
          "High-end laptop with Intel i9, RTX 4050, and AMOLED display.",
        serialNo: "GALAXYBOOK3-009",
        price: 156999,
        image: "Images/laptop/GALAXYBOOK3-009.jpg",
      },
      {
        name: "Huawei MateBook X Pro",
        category: "Laptops",
        product_condition: "new",
        description:
          "Sleek ultrabook with 3K touchscreen, Intel i7, and 16GB RAM.",
        serialNo: "MATEBOOKX-010",
        price: 139999,
        image: "Images/laptop/MATEBOOKX-010.jpg",
      },
      // Smartphones
      {
        name: "Samsung Galaxy S23 Ultra",
        category: "Smartphone",
        product_condition: "new",
        description:
          "Flagship smartphone with Snapdragon 8 Gen 2, 200MP camera, and S Pen.",
        serialNo: "S23ULTRA-001",
        price: 124999,
        image: "Images/mobile/S23ULTRA-001.jpg",
      },
      {
        name: "Google Pixel 7 Pro",
        category: "Smartphone",
        product_condition: "used",
        description:
          "Google’s top-tier phone with Tensor G2 chip and advanced AI camera.",
        serialNo: "PIXEL7PRO-002",
        price: 94999,
        image: "Images/mobile/PIXEL7PRO-002.jpg",
      },
      {
        name: "OnePlus 11 5G",
        category: "Smartphone",
        product_condition: "new",
        description:
          "Flagship killer with Snapdragon 8 Gen 2 and Hasselblad-tuned cameras.",
        serialNo: "ONEPLUS11-003",
        price: 74999,
        image: "Images/mobile/ONEPLUS11-003.jpg",
      },
      {
        name: "Xiaomi 13 Pro",
        category: "Smartphone",
        product_condition: "new",
        description:
          "Premium smartphone with Leica-powered cameras and Snapdragon 8 Gen 2.",
        serialNo: "XIAOMI13PRO-004",
        price: 86999,
        image: "Images/mobile/XIAOMI13PRO-004.jpg",
      },
      {
        name: "Realme GT 3",
        category: "Smartphone",
        product_condition: "new",
        description:
          "Blazing-fast phone with 240W charging and Snapdragon 8+ Gen 1.",
        serialNo: "REALMEGT3-005",
        price: 65999,
        image: "Images/mobile/REALMEGT3-005.jpg",
      },
      // Wearables
      {
        name: "Apple Watch Ultra",
        category: "Wearable",
        product_condition: "new",
        description:
          "Rugged smartwatch with titanium case, advanced health sensors, and long battery life.",
        serialNo: "AWULTRA-001",
        price: 89999,
        image: "Images/wearable/AWULTRA-001.jpg",
      },
      {
        name: "Garmin Fenix 7X",
        category: "Wearable",
        product_condition: "new",
        description:
          "Premium adventure smartwatch with GPS, solar charging, and fitness tracking.",
        serialNo: "FENIX7X-002",
        price: 72999,
        image: "Images/wearable/FENIX7X-002.jpg",
      },
      {
        name: "Fitbit Sense 2",
        category: "Wearable",
        product_condition: "new",
        description:
          "Advanced health smartwatch with ECG, stress tracking, and sleep monitoring.",
        serialNo: "SENSE2-003",
        price: 32999,
        image: "Images/wearable/SENSE2-003.jpg",
      },
      {
        name: "Amazfit GTR 4",
        category: "Wearable",
        product_condition: "used",
        description:
          "Stylish smartwatch with AMOLED display, built-in GPS, and 14-day battery life.",
        serialNo: "GTR4-004",
        price: 18999,
        image: "Images/wearable/GTR4-004.jpg",
      },
    ];

    this.categoryMap = new Map();
    this.productSet = new Set();

    // Build category map and product set.
    this.products.forEach((product) => {
      this.productSet.add(product.name.toLowerCase());
      if (!this.categoryMap.has(product.category)) {
        this.categoryMap.set(product.category, []);
      }
      this.categoryMap.get(product.category).push(product);
    });
  }

  // Filter products by category.
  filterByCategory(category) {
    return category && category !== ""
      ? this.categoryMap.get(category) || []
      : this.products;
  }

  // Add a new product.
  addProduct(
    name,
    category,
    Product_condition,
    description,
    serialNo,
    price,
    image
  ) {
    if (this.hasProduct(name)) {
      console.error("Error: Product already exists!");
      return;
    }
    const product = {
      name,
      category,
      Product_condition,
      description,
      serialNo,
      price,
      image,
    };
    this.products.push(product);
    this.productSet.add(name.toLowerCase());
    if (!this.categoryMap.has(category)) {
      this.categoryMap.set(category, []);
    }
    this.categoryMap.get(category).push(product);
    alert("Product added successfully!");
  }

  // Check if a product exists.
  hasProduct(name) {
    return this.productSet.has(name.toLowerCase());
  }

  // QuickSort function to sort products by price.
  quickSort(arr) {
    if (arr.length <= 1) return arr;
    const pivot = arr[arr.length - 1];
    const left = arr.filter((p) => p.price < pivot.price);
    const middle = arr.filter((p) => p.price === pivot.price);
    const right = arr.filter((p) => p.price > pivot.price);
    return [...this.quickSort(left), ...middle, ...this.quickSort(right)];
  }

  // Sort products by price.
  sortByPrice() {
    this.products = this.quickSort(this.products);
  }
}

const store = new ProductStore();

// -----------------------
// DOMContentLoaded and Products Display
// -----------------------
document.addEventListener("DOMContentLoaded", function () {
  // Update cart count from Cart class.
  cartInstance.updateDisplayCount();

  const minRange = document.getElementById("min-range");
  const maxRange = document.getElementById("max-range");
  const minPriceInput = document.getElementById("min-price-input");
  const maxPriceInput = document.getElementById("max-price-input");
  const categorySelect = document.querySelector(".filters-section select");
  const conditionCheckboxes = document.querySelectorAll(".form-check-input");

  // Fetch products on page load and when filter values change.
  fetchProducts();

  if (minRange) minRange.addEventListener("input", updatePriceInputs);
  if (maxRange) maxRange.addEventListener("input", updatePriceInputs);
  if (minPriceInput) minPriceInput.addEventListener("input", updateRangeInputs);
  if (maxPriceInput) maxPriceInput.addEventListener("input", updateRangeInputs);

  function updatePriceInputs() {
    let minValue = parseInt(minRange.value);
    let maxValue = parseInt(maxRange.value);
    if (minValue > maxValue - 500) {
      minRange.value = maxValue - 500;
      minValue = parseInt(minRange.value);
    }
    minPriceInput.value = minValue;
    maxPriceInput.value = maxValue;
    fetchProducts();
  }

  // Sync range sliders with input fields.
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

  fetchProducts(); // Initial fetch on page load.
});

// -----------------------
// Sell Device Function
// -----------------------
// Note: This function is not used in the current version of the project.
function sellDevice2(event) {
  alert("Product added successfully!");
  event.preventDefault();
  const form = document.getElementById("sell-form");
  const selects = form.querySelectorAll("select.form-select");
  const name = form.querySelector("input[type='text']").value;
  const price = parseFloat(form.querySelector("input[type='number']").value);
  const description = form.querySelector("textarea.form-control").value;
  const category = selects[0].value;
  const condition = selects[1].value;
  const serialNo = Date.now();

  // Determine folder based on category.
  let folder;
  if (category === "Laptops") {
    folder = "laptop";
  } else if (category === "Smartphones") {
    folder = "mobile";
  } else if (category === "Wearables") {
    folder = "wearable";
  } else {
    folder = "other";
  }
  const imagePath = `Images/${folder}/${folder}1.jpg`;

  store.addProduct(
    name,
    category,
    condition,
    description,
    serialNo,
    price,
    imagePath
  );

  form.reset();
}

// -----------------------
// Fetch Products and Display Them
// -----------------------
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

  if (selectedConditions.length > 0) {
    filteredProducts = filteredProducts.filter((product) =>
      selectedConditions.includes(product.product_condition)
    );
  }

  filteredProducts = filteredProducts.filter(
    (product) => product.price >= minPrice && product.price <= maxPrice
  );

  filteredProducts = store.quickSort(filteredProducts);

  productsContainer.innerHTML = "";
  if (filteredProducts.length === 0) {
    productsContainer.innerHTML =
      "<p class='text-center'>No products found.</p>";
    return;
  }

  filteredProducts.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.className = "col-md-6 col-xl-4 mb-4";
    productCard.innerHTML = `
      <div class="card product-card">
          <img src="${product.image}" class="card-img-top" alt="${product.name}">
          <div class="card-body">
              <h5 class="card-title">${product.name}</h5>
              <p class="card-text">Category: ${product.category}</p>
              <p class="card-text">Condition: ${product.product_condition}</p>
              <p class="card-text">Description: ${product.description}</p>
              <p class="card-text">Serial No: ${product.serialNo}</p>
              <p class="card-text">Price: ₹${product.price}</p>
              <button class="btn btn-primary w-100 add-to-cart" data-serial="${product.serialNo}">
                Add to Cart
              </button>
          </div>
      </div>`;
    productsContainer.appendChild(productCard);

    // Add event listener to add product to cart.
    productCard.querySelector(".add-to-cart").addEventListener("click", () => {
      const productToAdd = store.products.find(
        (p) => p.serialNo === product.serialNo
      );
      cartInstance.addItem(productToAdd);
    });
  });
}
