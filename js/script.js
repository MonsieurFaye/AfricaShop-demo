// AfricaShop JavaScript

// Global variables
let cart = [];
let products = [];
let currentFilter = 'all';

// Product data
const productData = [
    // Vêtements
    {
        id: 1,
        name: "Robe Traditionnelle Africaine",
        price: 89.99,
        originalPrice: 120.00,
        category: "vetements",
        image: "assets/images/vetement-1.jpg",
        vendor: "Artisan Kwame",
        location: "Ghana",
        rating: 4.8,
        reviews: 124,
        badge: "Bestseller",
        badgeClass: "bg-primary"
    },
    {
        id: 2,
        name: "Ensemble Traditionnel Coloré",
        price: 156.00,
        category: "vetements",
        image: "assets/images/vetement-2.jpg",
        vendor: "Atelier Malien",
        location: "Mali",
        rating: 4.9,
        reviews: 89,
        badge: "Nouveau",
        badgeClass: "bg-success"
    },
    {
        id: 3,
        name: "Tenue Africaine Moderne",
        price: 134.50,
        category: "vetements",
        image: "assets/images/vetement-3.jpg",
        vendor: "Couture Sénégal",
        location: "Sénégal",
        rating: 4.7,
        reviews: 67,
        badge: "Tendance",
        badgeClass: "bg-warning"
    },
    {
        id: 4,
        name: "Boubou Traditionnel",
        price: 98.00,
        category: "vetements",
        image: "assets/images/vetement-4.jpg",
        vendor: "Maître Tailleur",
        location: "Burkina Faso",
        rating: 4.6,
        reviews: 45,
        badge: "Artisanal",
        badgeClass: "bg-info"
    },
    {
        id: 5,
        name: "Ensemble Kente Premium",
        price: 245.00,
        category: "vetements",
        image: "assets/images/vetement-5.jpg",
        vendor: "Kente Masters",
        location: "Ghana",
        rating: 4.9,
        reviews: 156,
        badge: "Premium",
        badgeClass: "bg-dark"
    },
    {
        id: 6,
        name: "Tissus Africains Authentiques",
        price: 45.00,
        category: "vetements",
        image: "assets/images/vetement-6.jpg",
        vendor: "Tissage Traditionnel",
        location: "Côte d'Ivoire",
        rating: 4.5,
        reviews: 78,
        badge: "Matériau",
        badgeClass: "bg-secondary"
    },

    // Artisanat
    {
        id: 7,
        name: "Décoration Africaine Moderne",
        price: 67.00,
        category: "artisanat",
        image: "assets/images/artisanat-1.jpg",
        vendor: "Design Afrique",
        location: "Afrique du Sud",
        rating: 4.8,
        reviews: 92,
        badge: "Design",
        badgeClass: "bg-primary"
    },
    {
        id: 8,
        name: "Objets Décoratifs Ethniques",
        price: 89.50,
        category: "artisanat",
        image: "assets/images/artisanat-2.jpg",
        vendor: "Artisan Local",
        location: "Kenya",
        rating: 4.7,
        reviews: 134,
        badge: "Unique",
        badgeClass: "bg-warning"
    },
    {
        id: 9,
        name: "Art Mural Africain",
        price: 156.00,
        category: "artisanat",
        image: "assets/images/artisanat-3.jpg",
        vendor: "Galerie Africaine",
        location: "Sénégal",
        rating: 4.9,
        reviews: 67,
        badge: "Art",
        badgeClass: "bg-info"
    },
    {
        id: 10,
        name: "Sculpture Décorative",
        price: 234.00,
        category: "artisanat",
        image: "assets/images/artisanat-4.jpg",
        vendor: "Sculpteur Maître",
        location: "Mali",
        rating: 4.8,
        reviews: 45,
        badge: "Sculpture",
        badgeClass: "bg-dark"
    },
    {
        id: 11,
        name: "Décoration Murale Ethnique",
        price: 78.00,
        category: "artisanat",
        image: "assets/images/artisanat-5.jpg",
        vendor: "Artisanat Moderne",
        location: "Ghana",
        rating: 4.6,
        reviews: 89,
        badge: "Moderne",
        badgeClass: "bg-success"
    },
    {
        id: 12,
        name: "Masques Africains Traditionnels",
        price: 145.00,
        category: "artisanat",
        image: "assets/images/artisanat-6.jpg",
        vendor: "Tradition Vivante",
        location: "Cameroun",
        rating: 4.9,
        reviews: 123,
        badge: "Traditionnel",
        badgeClass: "bg-primary"
    },

    // Cosmétiques
    {
        id: 13,
        name: "Gamme Cosmétiques Naturels",
        price: 45.99,
        originalPrice: 65.00,
        category: "cosmetiques",
        image: "assets/images/cosmetique-1.jpg",
        vendor: "Beauty Africa",
        location: "Nigeria",
        rating: 4.8,
        reviews: 234,
        badge: "Promo",
        badgeClass: "bg-danger"
    },
    {
        id: 14,
        name: "Produits de Beauté Bio",
        price: 67.50,
        category: "cosmetiques",
        image: "assets/images/cosmetique-2.jpg",
        vendor: "Coopérative Féminine",
        location: "Burkina Faso",
        rating: 4.9,
        reviews: 189,
        badge: "Bio",
        badgeClass: "bg-success"
    },
    {
        id: 15,
        name: "Soins Naturels Africains",
        price: 89.00,
        category: "cosmetiques",
        image: "assets/images/cosmetique-3.jpg",
        vendor: "Natural Care",
        location: "Kenya",
        rating: 4.7,
        reviews: 156,
        badge: "Naturel",
        badgeClass: "bg-info"
    },
    {
        id: 16,
        name: "Cosmétiques Traditionnels",
        price: 34.99,
        category: "cosmetiques",
        image: "assets/images/cosmetique-4.jpg",
        vendor: "Tradition Beauté",
        location: "Sénégal",
        rating: 4.6,
        reviews: 98,
        badge: "Tradition",
        badgeClass: "bg-warning"
    },
    {
        id: 17,
        name: "Produits de Soin Premium",
        price: 123.00,
        category: "cosmetiques",
        image: "assets/images/cosmetique-5.jpg",
        vendor: "Premium Care",
        location: "Ghana",
        rating: 4.8,
        reviews: 167,
        badge: "Premium",
        badgeClass: "bg-dark"
    },
    {
        id: 18,
        name: "Gamme Beauté Complète",
        price: 156.50,
        category: "cosmetiques",
        image: "assets/images/cosmetique-6.jpg",
        vendor: "Complete Beauty",
        location: "Mali",
        rating: 4.9,
        reviews: 203,
        badge: "Complet",
        badgeClass: "bg-primary"
    },

    // Bijoux
    {
        id: 19,
        name: "Bijoux Africains Élégants",
        price: 78.00,
        category: "bijoux",
        image: "assets/images/bijoux-1.jpg",
        vendor: "Bijoux Maasai",
        location: "Kenya",
        rating: 4.7,
        reviews: 145,
        badge: "Élégant",
        badgeClass: "bg-primary"
    },
    {
        id: 20,
        name: "Perles Africaines Authentiques",
        price: 56.50,
        category: "bijoux",
        image: "assets/images/bijoux-2.jpg",
        vendor: "Perles d'Afrique",
        location: "Ghana",
        rating: 4.8,
        reviews: 123,
        badge: "Authentique",
        badgeClass: "bg-success"
    },
    {
        id: 21,
        name: "Bijoux Artisanaux Premium",
        price: 134.00,
        category: "bijoux",
        image: "assets/images/bijoux-3.jpg",
        vendor: "Artisan Bijoutier",
        location: "Sénégal",
        rating: 4.9,
        reviews: 89,
        badge: "Premium",
        badgeClass: "bg-dark"
    },
    {
        id: 22,
        name: "Colliers Ethniques",
        price: 89.99,
        category: "bijoux",
        image: "assets/images/bijoux-4.jpg",
        vendor: "Ethnique Style",
        location: "Mali",
        rating: 4.6,
        reviews: 167,
        badge: "Ethnique",
        badgeClass: "bg-info"
    },

    // Sacs
    {
        id: 23,
        name: "Sac Africain en Wax",
        price: 67.00,
        category: "sacs",
        image: "assets/images/sac-1.jpg",
        vendor: "Maroquinerie Africaine",
        location: "Côte d'Ivoire",
        rating: 4.8,
        reviews: 134,
        badge: "Wax",
        badgeClass: "bg-warning"
    },
    {
        id: 24,
        name: "Sac Artisanal Coloré",
        price: 45.50,
        category: "sacs",
        image: "assets/images/sac-2.jpg",
        vendor: "Artisan Sacs",
        location: "Burkina Faso",
        rating: 4.7,
        reviews: 98,
        badge: "Coloré",
        badgeClass: "bg-primary"
    }
];

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    products = [...productData];
    loadProducts();
    initializeEventListeners();
    updateCartCount();
});

// Event listeners
function initializeEventListeners() {
    // Search functionality
    document.getElementById('searchBtn').addEventListener('click', performSearch);
    document.getElementById('searchInput').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });

    // Newsletter form
    document.getElementById('newsletterForm').addEventListener('submit', handleNewsletterSubmit);

    // Login form
    document.getElementById('loginForm').addEventListener('submit', handleLogin);

    // Register form
    document.getElementById('registerForm').addEventListener('submit', handleRegister);

    // Vendor form
    document.getElementById('vendorForm').addEventListener('submit', handleVendorApplication);

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Product loading and filtering
function loadProducts(filter = 'all') {
    const productsGrid = document.getElementById('productsGrid');
    let filteredProducts = products;

    if (filter !== 'all') {
        filteredProducts = products.filter(product => product.category === filter);
    }

    // Show first 12 products
    const productsToShow = filteredProducts.slice(0, 12);
    
    productsGrid.innerHTML = productsToShow.map(product => createProductCard(product)).join('');
    
    // Add animation
    setTimeout(() => {
        document.querySelectorAll('.product-card').forEach((card, index) => {
            setTimeout(() => {
                card.classList.add('fade-in-up');
            }, index * 100);
        });
    }, 100);
}

function createProductCard(product) {
    const hasOriginalPrice = product.originalPrice && product.originalPrice > product.price;
    const discount = hasOriginalPrice ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) : 0;
    
    return `
        <div class="col-lg-4 col-md-6 mb-4">
            <div class="card product-card h-100">
                <div class="product-img-wrapper">
                    <img src="${product.image}" class="card-img-top" alt="${product.name}">
                    
                    <!-- Badge -->
                    <div class="product-badge">
                        <span class="badge ${product.badgeClass}">${product.badge}</span>
                        ${discount > 0 ? `<span class="badge bg-danger ms-1">-${discount}%</span>` : ''}
                    </div>
                    
                    <!-- Actions -->
                    <div class="product-actions">
                        <button class="btn btn-light btn-sm mb-2" onclick="toggleWishlist(${product.id})" title="Ajouter aux favoris">
                            <i class="fas fa-heart"></i>
                        </button>
                        <button class="btn btn-light btn-sm" onclick="quickView(${product.id})" title="Aperçu rapide">
                            <i class="fas fa-eye"></i>
                        </button>
                    </div>
                    
                    <!-- Quick add -->
                    <div class="quick-add">
                        <button class="btn btn-primary w-100" onclick="addToCart(${product.id})">
                            <i class="fas fa-shopping-cart me-2"></i>Ajouter au Panier
                        </button>
                    </div>
                </div>
                
                <div class="card-body">
                    <!-- Vendor info -->
                    <small class="text-muted">${product.vendor} • ${product.location}</small>
                    
                    <!-- Product name -->
                    <h6 class="card-title mt-2 mb-2">${product.name}</h6>
                    
                    <!-- Rating -->
                    <div class="d-flex align-items-center mb-2">
                        <div class="stars me-2">
                            ${generateStars(product.rating)}
                        </div>
                        <small class="text-muted">${product.rating} (${product.reviews})</small>
                    </div>
                    
                    <!-- Price -->
                    <div class="d-flex align-items-center">
                        <span class="price-current h6 mb-0 me-2">${product.price.toFixed(2)} €</span>
                        ${hasOriginalPrice ? `<span class="price-original small">${product.originalPrice.toFixed(2)} €</span>` : ''}
                    </div>
                </div>
            </div>
        </div>
    `;
}

function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    let starsHTML = '';
    
    for (let i = 0; i < fullStars; i++) {
        starsHTML += '<i class="fas fa-star text-warning"></i>';
    }
    
    if (hasHalfStar) {
        starsHTML += '<i class="fas fa-star-half-alt text-warning"></i>';
    }
    
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
        starsHTML += '<i class="far fa-star text-warning"></i>';
    }
    
    return starsHTML;
}

// Filter products
function filterProducts(category) {
    currentFilter = category;
    
    // Update active button
    document.querySelectorAll('.btn-group .btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    loadProducts(category);
    
    // Scroll to products section
    document.getElementById('products').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

// Load more products
function loadMoreProducts() {
    const productsGrid = document.getElementById('productsGrid');
    const currentProducts = productsGrid.children.length;
    
    let filteredProducts = products;
    if (currentFilter !== 'all') {
        filteredProducts = products.filter(product => product.category === currentFilter);
    }
    
    const nextProducts = filteredProducts.slice(currentProducts, currentProducts + 6);
    
    if (nextProducts.length > 0) {
        const newProductsHTML = nextProducts.map(product => createProductCard(product)).join('');
        productsGrid.insertAdjacentHTML('beforeend', newProductsHTML);
        
        // Add animation to new products
        const newCards = Array.from(productsGrid.children).slice(currentProducts);
        newCards.forEach((card, index) => {
            setTimeout(() => {
                card.classList.add('fade-in-up');
            }, index * 100);
        });
    }
}

// Cart functionality
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }
    
    updateCartCount();
    updateCartDisplay();
    showToast('Produit ajouté au panier !', 'success');
    
    // Add pulse animation to cart button
    const cartBtn = document.querySelector('[data-bs-target="#cartOffcanvas"]');
    cartBtn.classList.add('pulse');
    setTimeout(() => cartBtn.classList.remove('pulse'), 1000);
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartCount();
    updateCartDisplay();
    showToast('Produit retiré du panier', 'success');
}

function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (!item) return;
    
    item.quantity += change;
    
    if (item.quantity <= 0) {
        removeFromCart(productId);
    } else {
        updateCartCount();
        updateCartDisplay();
    }
}

function updateCartCount() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('cartCount').textContent = totalItems;
}

function updateCartDisplay() {
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="text-muted text-center">Votre panier est vide</p>';
        cartTotal.style.display = 'none';
        return;
    }
    
    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div class="d-flex align-items-center">
                <img src="${item.image}" alt="${item.name}" class="me-3">
                <div class="flex-grow-1">
                    <h6 class="mb-1">${item.name}</h6>
                    <small class="text-muted">${item.vendor}</small>
                    <div class="d-flex align-items-center justify-content-between mt-2">
                        <div class="quantity-controls">
                            <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">
                                <i class="fas fa-minus"></i>
                            </button>
                            <span class="mx-2">${item.quantity}</span>
                            <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">
                                <i class="fas fa-plus"></i>
                            </button>
                        </div>
                        <div class="text-end">
                            <div class="fw-bold">${(item.price * item.quantity).toFixed(2)} €</div>
                            <button class="btn btn-sm btn-outline-danger" onclick="removeFromCart(${item.id})">
                                <i class="fas fa-trash"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    document.getElementById('totalAmount').textContent = total.toFixed(2) + ' €';
    cartTotal.style.display = 'block';
}

// Wishlist functionality
function toggleWishlist(productId) {
    const btn = event.target.closest('button');
    const icon = btn.querySelector('i');
    
    if (icon.classList.contains('fas')) {
        icon.classList.remove('fas');
        icon.classList.add('far');
        btn.classList.remove('btn-danger');
        btn.classList.add('btn-light');
        showToast('Retiré des favoris', 'success');
    } else {
        icon.classList.remove('far');
        icon.classList.add('fas');
        btn.classList.remove('btn-light');
        btn.classList.add('btn-danger');
        showToast('Ajouté aux favoris !', 'success');
    }
}

// Quick view functionality
function quickView(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    // Create and show quick view modal
    const modalHTML = `
        <div class="modal fade" id="quickViewModal" tabindex="-1">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">${product.name}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-md-6">
                                <img src="${product.image}" class="img-fluid rounded" alt="${product.name}">
                            </div>
                            <div class="col-md-6">
                                <div class="mb-3">
                                    <span class="badge ${product.badgeClass}">${product.badge}</span>
                                </div>
                                <p class="text-muted">${product.vendor} • ${product.location}</p>
                                <div class="d-flex align-items-center mb-3">
                                    <div class="stars me-2">
                                        ${generateStars(product.rating)}
                                    </div>
                                    <small class="text-muted">${product.rating} (${product.reviews} avis)</small>
                                </div>
                                <div class="mb-3">
                                    <span class="h4 text-primary">${product.price.toFixed(2)} €</span>
                                    ${product.originalPrice ? `<span class="text-muted text-decoration-line-through ms-2">${product.originalPrice.toFixed(2)} €</span>` : ''}
                                </div>
                                <p class="text-muted">Produit authentique fabriqué par des artisans africains talentueux. Qualité garantie et commerce équitable.</p>
                                <button class="btn btn-primary btn-lg w-100" onclick="addToCart(${product.id}); bootstrap.Modal.getInstance(document.getElementById('quickViewModal')).hide();">
                                    <i class="fas fa-shopping-cart me-2"></i>Ajouter au Panier
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Remove existing modal if any
    const existingModal = document.getElementById('quickViewModal');
    if (existingModal) {
        existingModal.remove();
    }
    
    // Add modal to body
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    
    // Show modal
    const modal = new bootstrap.Modal(document.getElementById('quickViewModal'));
    modal.show();
    
    // Remove modal from DOM when hidden
    document.getElementById('quickViewModal').addEventListener('hidden.bs.modal', function() {
        this.remove();
    });
}

// Search functionality
function performSearch() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase().trim();
    
    if (!searchTerm) {
        loadProducts(currentFilter);
        return;
    }
    
    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(searchTerm) ||
        product.vendor.toLowerCase().includes(searchTerm) ||
        product.location.toLowerCase().includes(searchTerm) ||
        product.category.toLowerCase().includes(searchTerm)
    );
    
    const productsGrid = document.getElementById('productsGrid');
    
    if (filteredProducts.length === 0) {
        productsGrid.innerHTML = `
            <div class="col-12 text-center py-5">
                <i class="fas fa-search fa-3x text-muted mb-3"></i>
                <h4>Aucun produit trouvé</h4>
                <p class="text-muted">Essayez avec d'autres mots-clés</p>
                <button class="btn btn-primary" onclick="clearSearch()">Voir tous les produits</button>
            </div>
        `;
    } else {
        productsGrid.innerHTML = filteredProducts.map(product => createProductCard(product)).join('');
    }
    
    // Scroll to products
    document.getElementById('products').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

function clearSearch() {
    document.getElementById('searchInput').value = '';
    loadProducts(currentFilter);
}

// Form handlers
function handleNewsletterSubmit(e) {
    e.preventDefault();
    const email = e.target.querySelector('input[type="email"]').value;
    
    // Simulate API call
    const btn = e.target.querySelector('button');
    const originalText = btn.innerHTML;
    btn.innerHTML = '<span class="loading-spinner me-2"></span>Inscription...';
    btn.disabled = true;
    
    setTimeout(() => {
        btn.innerHTML = '<i class="fas fa-check me-2"></i>Inscrit !';
        btn.classList.remove('btn-accent');
        btn.classList.add('btn-success');
        
        showToast('Inscription réussie ! Merci de votre confiance.', 'success');
        
        setTimeout(() => {
            btn.innerHTML = originalText;
            btn.classList.remove('btn-success');
            btn.classList.add('btn-accent');
            btn.disabled = false;
            e.target.reset();
        }, 3000);
    }, 2000);
}

function handleLogin(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Simulate login
    showToast('Connexion réussie ! Bienvenue sur AfricaShop.', 'success');
    bootstrap.Modal.getInstance(document.getElementById('loginModal')).hide();
    e.target.reset();
}

function handleRegister(e) {
    e.preventDefault();
    const name = document.getElementById('regName').value;
    const email = document.getElementById('regEmail').value;
    const password = document.getElementById('regPassword').value;
    
    // Simulate registration
    showToast('Inscription réussie ! Bienvenue dans la famille AfricaShop.', 'success');
    bootstrap.Modal.getInstance(document.getElementById('registerModal')).hide();
    e.target.reset();
}

function handleVendorApplication(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    
    // Simulate vendor application
    showToast('Candidature envoyée ! Nous vous contacterons sous 48h.', 'success');
    bootstrap.Modal.getInstance(document.getElementById('vendorModal')).hide();
    e.target.reset();
}

// Checkout functionality
function checkout() {
    if (cart.length === 0) {
        showToast('Votre panier est vide', 'error');
        return;
    }
    
    // Simulate checkout process
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    showToast(`Commande de ${total.toFixed(2)} € en cours de traitement...`, 'success');
    
    // Clear cart after successful checkout
    setTimeout(() => {
        cart = [];
        updateCartCount();
        updateCartDisplay();
        showToast('Commande confirmée ! Merci pour votre achat.', 'success');
        
        // Close cart offcanvas
        const cartOffcanvas = bootstrap.Offcanvas.getInstance(document.getElementById('cartOffcanvas'));
        if (cartOffcanvas) {
            cartOffcanvas.hide();
        }
    }, 2000);
}

// Utility functions
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

function showToast(message, type = 'success') {
    // Create toast container if it doesn't exist
    let toastContainer = document.getElementById('toastContainer');
    if (!toastContainer) {
        toastContainer = document.createElement('div');
        toastContainer.id = 'toastContainer';
        toastContainer.className = 'position-fixed top-0 end-0 p-3';
        toastContainer.style.zIndex = '9999';
        document.body.appendChild(toastContainer);
    }
    
    // Create toast
    const toastId = 'toast-' + Date.now();
    const toastHTML = `
        <div id="${toastId}" class="toast toast-${type}" role="alert">
            <div class="toast-header">
                <i class="fas fa-${type === 'success' ? 'check-circle text-success' : 'exclamation-circle text-danger'} me-2"></i>
                <strong class="me-auto">AfricaShop</strong>
                <button type="button" class="btn-close" data-bs-dismiss="toast"></button>
            </div>
            <div class="toast-body">
                ${message}
            </div>
        </div>
    `;
    
    toastContainer.insertAdjacentHTML('beforeend', toastHTML);
    
    // Show toast
    const toastElement = document.getElementById(toastId);
    const toast = new bootstrap.Toast(toastElement, {
        autohide: true,
        delay: 5000
    });
    toast.show();
    
    // Remove toast from DOM after it's hidden
    toastElement.addEventListener('hidden.bs.toast', function() {
        this.remove();
    });
}

// Smooth scroll for anchor links
function smoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Initialize smooth scrolling
smoothScroll();

// Add scroll effect to navbar
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.classList.add('shadow-lg');
    } else {
        navbar.classList.remove('shadow-lg');
    }
});

// Add loading animation to buttons
document.addEventListener('click', function(e) {
    if (e.target.matches('.btn-primary, .btn-accent') && !e.target.disabled) {
        const btn = e.target;
        const originalText = btn.innerHTML;
        
        // Don't add loading to cart and modal buttons
        if (btn.closest('.product-card') || btn.closest('.modal') || btn.closest('.offcanvas')) {
            return;
        }
        
        btn.innerHTML = '<span class="loading-spinner me-2"></span>Chargement...';
        btn.disabled = true;
        
        setTimeout(() => {
            btn.innerHTML = originalText;
            btn.disabled = false;
        }, 1500);
    }
});

// Initialize cart display when offcanvas is shown
document.getElementById('cartOffcanvas').addEventListener('show.bs.offcanvas', function() {
    updateCartDisplay();
});

// Add intersection observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.card, .testimonial-card, .category-card').forEach(el => {
        observer.observe(el);
    });
});

