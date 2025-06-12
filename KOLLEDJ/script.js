// DOM Elements
const themeToggle = document.getElementById("theme-toggle")
const body = document.body
const carousel = document.querySelector(".carousel-container")
const prevButton = document.querySelector(".carousel-button.prev")
const nextButton = document.querySelector(".carousel-button.next")
const searchInput = document.getElementById("search-input")
const categoryFilter = document.getElementById("category-filter")
const productsGrid = document.getElementById("products-grid")

// ============================================
// PRODUCT DATA - 30 Products with different categories
// ============================================
const products = [
    // Electronics
    {
        id: 1,
        name: "Wireless Headphones",
        category: "Electronics",
        price: 99.99,
        image: "/placeholder.svg?height=200&width=300",
        quantity: 15,
    },
    {
        id: 2,
        name: "Smart Watch",
        category: "Electronics",
        price: 199.99,
        image: "/placeholder.svg?height=200&width=300",
        quantity: 8,
    },
    {
        id: 3,
        name: "Bluetooth Speaker",
        category: "Electronics",
        price: 79.99,
        image: "/placeholder.svg?height=200&width=300",
        quantity: 12,
    },
    {
        id: 4,
        name: "Wireless Mouse",
        category: "Electronics",
        price: 29.99,
        image: "/placeholder.svg?height=200&width=300",
        quantity: 20,
    },
    {
        id: 5,
        name: "USB-C Cable",
        category: "Electronics",
        price: 19.99,
        image: "/placeholder.svg?height=200&width=300",
        quantity: 0,
    }, // Hidden
    {
        id: 6,
        name: "Phone Case",
        category: "Electronics",
        price: 24.99,
        image: "/placeholder.svg?height=200&width=300",
        quantity: 25,
    },
    {
        id: 7,
        name: "Laptop Stand",
        category: "Electronics",
        price: 49.99,
        image: "/placeholder.svg?height=200&width=300",
        quantity: 10,
    },
    {
        id: 8,
        name: "Webcam HD",
        category: "Electronics",
        price: 89.99,
        image: "/placeholder.svg?height=200&width=300",
        quantity: 6,
    },

    // Clothing
    {
        id: 9,
        name: "Cotton T-Shirt",
        category: "Clothing",
        price: 24.99,
        image: "/placeholder.svg?height=200&width=300",
        quantity: 30,
    },
    {
        id: 10,
        name: "Denim Jeans",
        category: "Clothing",
        price: 69.99,
        image: "/placeholder.svg?height=200&width=300",
        quantity: 18,
    },
    {
        id: 11,
        name: "Hoodie",
        category: "Clothing",
        price: 54.99,
        image: "/placeholder.svg?height=200&width=300",
        quantity: 22,
    },
    {
        id: 12,
        name: "Sneakers",
        category: "Clothing",
        price: 89.99,
        image: "/placeholder.svg?height=200&width=300",
        quantity: 14,
    },
    {
        id: 13,
        name: "Baseball Cap",
        category: "Clothing",
        price: 19.99,
        image: "/placeholder.svg?height=200&width=300",
        quantity: 0,
    }, // Hidden
    {
        id: 14,
        name: "Winter Jacket",
        category: "Clothing",
        price: 129.99,
        image: "/placeholder.svg?height=200&width=300",
        quantity: 8,
    },
    {
        id: 15,
        name: "Dress Shirt",
        category: "Clothing",
        price: 39.99,
        image: "/placeholder.svg?height=200&width=300",
        quantity: 16,
    },

    // Home & Kitchen
    {
        id: 16,
        name: "Coffee Maker",
        category: "Home & Kitchen",
        price: 79.99,
        image: "/placeholder.svg?height=200&width=300",
        quantity: 12,
    },
    {
        id: 17,
        name: "Blender",
        category: "Home & Kitchen",
        price: 59.99,
        image: "/placeholder.svg?height=200&width=300",
        quantity: 9,
    },
    {
        id: 18,
        name: "Air Fryer",
        category: "Home & Kitchen",
        price: 119.99,
        image: "/placeholder.svg?height=200&width=300",
        quantity: 7,
    },
    {
        id: 19,
        name: "Ceramic Mug Set",
        category: "Home & Kitchen",
        price: 29.99,
        image: "/placeholder.svg?height=200&width=300",
        quantity: 20,
    },
    {
        id: 20,
        name: "Kitchen Scale",
        category: "Home & Kitchen",
        price: 34.99,
        image: "/placeholder.svg?height=200&width=300",
        quantity: 15,
    },
    {
        id: 21,
        name: "Cutting Board",
        category: "Home & Kitchen",
        price: 24.99,
        image: "/placeholder.svg?height=200&width=300",
        quantity: 0,
    }, // Hidden
    {
        id: 22,
        name: "Non-stick Pan",
        category: "Home & Kitchen",
        price: 49.99,
        image: "/placeholder.svg?height=200&width=300",
        quantity: 11,
    },

    // Books
    {
        id: 23,
        name: "JavaScript Guide",
        category: "Books",
        price: 39.99,
        image: "/placeholder.svg?height=200&width=300",
        quantity: 25,
    },
    {
        id: 24,
        name: "Design Thinking",
        category: "Books",
        price: 29.99,
        image: "/placeholder.svg?height=200&width=300",
        quantity: 18,
    },
    {
        id: 25,
        name: "Business Strategy",
        category: "Books",
        price: 34.99,
        image: "/placeholder.svg?height=200&width=300",
        quantity: 12,
    },
    {
        id: 26,
        name: "Photography Basics",
        category: "Books",
        price: 27.99,
        image: "/placeholder.svg?height=200&width=300",
        quantity: 8,
    },

    // Sports
    {
        id: 27,
        name: "Yoga Mat",
        category: "Sports",
        price: 39.99,
        image: "/placeholder.svg?height=200&width=300",
        quantity: 20,
    },
    {
        id: 28,
        name: "Dumbbells Set",
        category: "Sports",
        price: 89.99,
        image: "/placeholder.svg?height=200&width=300",
        quantity: 6,
    },
    {
        id: 29,
        name: "Water Bottle",
        category: "Sports",
        price: 19.99,
        image: "/placeholder.svg?height=200&width=300",
        quantity: 30,
    },
    {
        id: 30,
        name: "Resistance Bands",
        category: "Sports",
        price: 24.99,
        image: "/placeholder.svg?height=200&width=300",
        quantity: 0,
    },
]

// ============================================
// CAROUSEL DATA
// ============================================
const carouselImages = [
    { src: "/placeholder.svg?height=400&width=800", alt: "Featured Product 1" },
    { src: "/placeholder.svg?height=400&width=800", alt: "Featured Product 2" },
    { src: "/placeholder.svg?height=400&width=800", alt: "Featured Product 3" },
    { src: "/placeholder.svg?height=400&width=800", alt: "Featured Product 4" },
]

// ============================================
// GLOBAL VARIABLES
// ============================================
let cart = [] // Array to store cart items
let currentSlide = 0 // Current carousel slide index
let filteredProducts = [] // Products after filtering

// ============================================
// DOM ELEMENTS
// ============================================
const themeToggleMobile = document.getElementById("theme-toggle-mobile")
const burgerMenu = document.getElementById("burger-menu")
const navMobile = document.getElementById("nav-mobile")
const cartCount = document.getElementById("cart-count")
const cartCountMobile = document.querySelector(".cart-count-mobile")
const cartItems = document.getElementById("cart-items")
const cartSummary = document.getElementById("cart-summary")
const totalPrice = document.getElementById("total-price")
const checkoutBtn = document.getElementById("checkout-btn")
const checkoutModal = document.getElementById("checkout-modal")
const closeModal = document.getElementById("close-modal")
const checkoutForm = document.getElementById("checkout-form")
const customerName = document.getElementById("customer-name")

// Dark Mode Toggle
themeToggle.addEventListener("click", toggleTheme)
themeToggleMobile.addEventListener("click", toggleTheme)


// Check for saved theme preference
const savedDarkMode = localStorage.getItem("darkMode") === "true"
if (savedDarkMode) {
    body.classList.remove("light-mode")
    body.classList.add("dark-mode")
} else {
    body.classList.remove("dark-mode")
    body.classList.add("light-mode")
}

// ============================================
// INITIALIZATION - Run when page loads
// ============================================
document.addEventListener("DOMContentLoaded", () => {
    loadTheme()
    initializeCarousel()
    populateCategories()
    displayProducts()
    setupEventListeners()
})

// ============================================
// THEME TOGGLE FUNCTIONALITY
// ============================================
function toggleTheme() {
    const isDarkMode = document.body.classList.toggle("dark-mode")
    document.body.classList.toggle("light-mode", !isDarkMode)

    themeToggle.textContent = isDarkMode ? "☀️" : "🌙"
    themeToggleMobile.textContent = isDarkMode ? "☀️" : "🌙"

    localStorage.setItem("darkMode", isDarkMode)
}


// Load saved theme preference
function loadTheme() {
    const savedTheme = localStorage.getItem("darkMode")
    if (savedTheme === "false") {
        document.body.classList.remove("dark-mode")
        themeToggle.textContent = "🌙"
        themeToggleMobile.textContent = "🌙"
    }
}

// ============================================
// MOBILE MENU FUNCTIONALITY
// ============================================
function toggleMobileMenu() {
    burgerMenu.classList.toggle("active")
    navMobile.classList.toggle("active")
}

// Carousel Functionality
const totalSlides = carouselImages.length
let carouselInterval = setInterval(() => {
    currentSlide = (currentSlide + 1) % totalSlides
    updateCarousel()
}, 5000)

// Pause carousel on hover
carousel.addEventListener("mouseenter", () => {
    clearInterval(carouselInterval)
})

carousel.addEventListener("mouseleave", () => {
    carouselInterval = setInterval(() => {
        currentSlide = (currentSlide + 1) % totalSlides
        updateCarousel()
    }, 5000)
})

// ============================================
// CAROUSEL FUNCTIONALITY
// ============================================
function initializeCarousel() {
    const carouselSlides = document.getElementById("carousel-slides")
    const carouselDots = document.getElementById("carousel-dots")

    // Create carousel slides
    carouselImages.forEach((image, index) => {
        const slide = document.createElement("div")
        slide.className = "carousel-slide"
        slide.innerHTML = `<img src="${image.src}" alt="${image.alt}">`
        carouselSlides.appendChild(slide)

        // Create dots for navigation
        const dot = document.createElement("div")
        dot.className = `dot ${index === 0 ? "active" : ""}`
        dot.addEventListener("click", () => goToSlide(index))
        carouselDots.appendChild(dot)
    })

    // Auto-advance carousel every 5 seconds
    setInterval(nextSlide, 5000)
}

function updateCarousel() {
    const carouselSlides = document.getElementById("carousel-slides")
    const dots = document.querySelectorAll(".dot")

    // Move slides
    carouselSlides.style.transform = `translateX(-${currentSlide * 100}%)`

    // Update active dot
    dots.forEach((dot, index) => {
        dot.classList.toggle("active", index === currentSlide)
    })
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % carouselImages.length
    updateCarousel()
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + carouselImages.length) % carouselImages.length
    updateCarousel()
}

function goToSlide(index) {
    currentSlide = index
    updateCarousel()
}

// Render Products
function renderProducts(productsToRender) {
    productsGrid.innerHTML = ""

    if (productsToRender.length === 0) {
        productsGrid.innerHTML = '<p class="no-results">No products found matching your criteria.</p>'
        return
    }

    productsToRender.forEach((product) => {
        const productCard = document.createElement("div")
        productCard.className = "product-card"

        productCard.innerHTML = `
      <img src="${product.image}" alt="${product.name}" class="product-image">
      <div class="product-info">
        <h3 class="product-title">${product.name}</h3>
        <span class="product-category">${product.category}</span>
        <p class="product-price">$${product.price.toFixed(2)}</p>
      </div>
    `

        productsGrid.appendChild(productCard)
    })
}

// ============================================
// PRODUCTS FUNCTIONALITY
// ============================================
function populateCategories() {
    // Get unique categories from products that have quantity > 0
    const availableProducts = products.filter((product) => product.quantity > 0)
    const categories = [...new Set(availableProducts.map((product) => product.category))]

    // Add categories to filter dropdown
    categories.forEach((category) => {
        const option = document.createElement("option")
        option.value = category
        option.textContent = category
        categoryFilter.appendChild(option)
    })
}

function displayProducts() {
    // Filter products: only show products with quantity > 0
    let productsToShow = products.filter((product) => product.quantity > 0)

    // Apply search filter
    const searchTerm = searchInput.value.toLowerCase()
    if (searchTerm) {
        productsToShow = productsToShow.filter(
            (product) =>
                product.name.toLowerCase().includes(searchTerm) || product.category.toLowerCase().includes(searchTerm),
        )
    }

    // Apply category filter
    const selectedCategory = categoryFilter.value
    if (selectedCategory !== "all") {
        productsToShow = productsToShow.filter((product) => product.category === selectedCategory)
    }

    // Store filtered products for reference
    filteredProducts = productsToShow

    // Clear and populate products grid
    productsGrid.innerHTML = ""

    if (productsToShow.length === 0) {
        productsGrid.innerHTML = '<p style="text-align: center; grid-column: 1 / -1; padding: 2rem;">No products found.</p>'
        return
    }

    productsToShow.forEach((product) => {
        const productCard = createProductCard(product)
        productsGrid.appendChild(productCard)
    })
}

function createProductCard(product) {
    const card = document.createElement("div")
    card.className = "product-card"

    card.innerHTML = `
        <img src="${product.image}" alt="${product.name}" class="product-image">
        <h3 class="product-name">${product.name}</h3>
        <p class="product-category">${product.category}</p>
        <p class="product-price">$${product.price.toFixed(2)}</p>
        <button class="add-to-cart-btn" onclick="addToCart(${product.id})">
            Add to Cart
        </button>
    `

    return card
}

// Filter and Search Functionality
function filterProducts() {
    const searchTerm = searchInput.value.toLowerCase()
    const selectedCategory = categoryFilter.value

    const filteredProducts = products.filter((product) => {
        const matchesSearch = product.name.toLowerCase().includes(searchTerm)
        const matchesCategory = selectedCategory === "all" || product.category === selectedCategory

        return matchesSearch && matchesCategory
    })

    renderProducts(filteredProducts)
}

searchInput.addEventListener("input", filterProducts)
categoryFilter.addEventListener("change", filterProducts)

// ============================================
// CART FUNCTIONALITY
// ============================================
function addToCart(productId) {
    const product = products.find((p) => p.id === productId)
    if (!product || product.quantity === 0) return

    // Check if product already in cart
    const existingItem = cart.find((item) => item.id === productId)

    if (existingItem) {
        // Increase quantity if not exceeding available stock
        if (existingItem.quantity < product.quantity) {
            existingItem.quantity++
        } else {
            alert("Sorry, not enough stock available!")
            return
        }
    } else {
        // Add new item to cart
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1,
            maxQuantity: product.quantity,
        })
    }

    updateCartDisplay()
    updateCartCount()

    // Show success message
    showNotification("Product added to cart!")
}

function removeFromCart(productId) {
    cart = cart.filter((item) => item.id !== productId)
    updateCartDisplay()
    updateCartCount()
}

function updateQuantity(productId, change) {
    const item = cart.find((item) => item.id === productId)
    if (!item) return

    const newQuantity = item.quantity + change

    if (newQuantity <= 0) {
        removeFromCart(productId)
    } else if (newQuantity <= item.maxQuantity) {
        item.quantity = newQuantity
        updateCartDisplay()
        updateCartCount()
    } else {
        alert("Sorry, not enough stock available!")
    }
}

function updateCartDisplay() {
    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="empty-cart">Your cart is empty</p>'
        cartSummary.style.display = "none"
        return
    }

    cartItems.innerHTML = ""
    let total = 0

    cart.forEach((item) => {
        const cartItem = document.createElement("div")
        cartItem.className = "cart-item"

        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="cart-item-info">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">$${item.price.toFixed(2)} each</div>
            </div>
            <div class="quantity-controls">
                <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                <span class="quantity">${item.quantity}</span>
                <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
            </div>
            <button class="quantity-btn" onclick="removeFromCart(${item.id})" style="background-color: #dc2626;">×</button>
        `

        cartItems.appendChild(cartItem)
        total += item.price * item.quantity
    })

    totalPrice.textContent = total.toFixed(2)
    cartSummary.style.display = "block"
}

function updateCartCount() {
    const count = cart.reduce((sum, item) => sum + item.quantity, 0)
    cartCount.textContent = count
    cartCountMobile.textContent = count
}

// Initial render
renderProducts(products)

// ============================================
// CHECKOUT FUNCTIONALITY
// ============================================
function openCheckoutModal() {
    if (cart.length === 0) {
        alert("Your cart is empty!")
        return
    }
    checkoutModal.style.display = "block"
}

function closeCheckoutModal() {
    checkoutModal.style.display = "none"
    customerName.value = ""
}

function processCheckout(event) {
    event.preventDefault()

    const name = customerName.value.trim()
    if (!name) {
        alert("Please enter your name")
        return
    }

    // Create order summary for WhatsApp
    let orderText = `*New Order from ${name}*\n\n`
    let total = 0

    cart.forEach((item) => {
        const itemTotal = item.price * item.quantity
        orderText += `• ${item.name}\n  Qty: ${item.quantity} × $${item.price.toFixed(2)} = $${itemTotal.toFixed(2)}\n\n`
        total += itemTotal
    })

    orderText += `*Total: $${total.toFixed(2)}*`

    // Send to Google Sheets (you'll need to implement this)
    sendToGoogleSheets(name, cart, total)

    // Open WhatsApp with pre-filled message
    const whatsappNumber = "+77473606910" // Replace with your WhatsApp number
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(orderText)}`
    window.open(whatsappUrl, "_blank")

    // Clear cart and close modal
    cart = []
    updateCartDisplay()
    updateCartCount()
    closeCheckoutModal()

    showNotification("Order sent! Check WhatsApp to complete your purchase.")
}

// ============================================
// GOOGLE SHEETS INTEGRATION
// ============================================
async function sendToGoogleSheets(customerName, cartItems, total) {
    // Note: You'll need to set up Google Sheets API and get your API key
    // This is a placeholder function - implement according to your Google Sheets setup

    const orderData = {
        timestamp: new Date().toISOString(),
        customerName: customerName,
        items: cartItems,
        total: total,
    }

    try {
        // Replace with your Google Sheets API endpoint
        // const response = await fetch('YOUR_GOOGLE_SHEETS_API_ENDPOINT', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(orderData)
        // });

        console.log("Order data to be sent to Google Sheets:", orderData)
    } catch (error) {
        console.error("Error sending to Google Sheets:", error)
    }
}

// ============================================
// UTILITY FUNCTIONS
// ============================================
function showNotification(message) {
    // Create a simple notification
    const notification = document.createElement("div")
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background-color: var(--primary-color);
        color: white;
        padding: 1rem;
        border-radius: 8px;
        z-index: 3000;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
    `
    notification.textContent = message

    document.body.appendChild(notification)

    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.remove()
    }, 3000)
}

// ============================================
// EVENT LISTENERS SETUP
// ============================================
function setupEventListeners() {
    // Theme toggle
    themeToggle.addEventListener("click", toggleTheme)
    themeToggleMobile.addEventListener("click", toggleTheme)

    // Mobile menu
    burgerMenu.addEventListener("click", toggleMobileMenu)

    // Carousel controls
    document.getElementById("next-btn").addEventListener("click", nextSlide)
    document.getElementById("prev-btn").addEventListener("click", prevSlide)

    // Search and filter
    searchInput.addEventListener("input", displayProducts)
    categoryFilter.addEventListener("change", displayProducts)

    // Checkout modal
    checkoutBtn.addEventListener("click", openCheckoutModal)
    closeModal.addEventListener("click", closeCheckoutModal)
    checkoutForm.addEventListener("submit", processCheckout)

    // Close modal when clicking outside
    window.addEventListener("click", (event) => {
        if (event.target === checkoutModal) {
            closeCheckoutModal()
        }
    })

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault()
            const target = document.querySelector(this.getAttribute("href"))
            if (target) {
                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                })

                // Close mobile menu if open
                if (navMobile.classList.contains("active")) {
                    toggleMobileMenu()
                }
            }
        })
    })

    // Load saved theme
    loadTheme()
}

// ============================================
// GOOGLE SHEETS API SETUP INSTRUCTIONS
// ============================================
/*
To implement Google Sheets integration:

1. Go to Google Cloud Console (console.cloud.google.com)
2. Create a new project or select existing one
3. Enable Google Sheets API
4. Create credentials (API key or Service Account)
5. Create a Google Sheet and get the Sheet ID
6. Replace the sendToGoogleSheets function with actual API calls

Example Google Sheets API call:
const SHEET_ID = 'your-sheet-id';
const API_KEY = 'your-api-key';
const range = 'Sheet1!A:E';

const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${range}:append?valueInputOption=RAW&key=${API_KEY}`;

fetch(url, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        values: [[new Date(), customerName, JSON.stringify(cartItems), total]]
    })
});
*/
