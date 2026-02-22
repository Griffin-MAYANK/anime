// ===== Global Variables =====
let currentFilter = 'all';
let searchQuery = '';

// ===== DOM Elements =====
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const galleryGrid = document.getElementById('galleryGrid');
const searchInput = document.getElementById('searchInput');
const filterButtons = document.querySelectorAll('.filter-btn');
const modal = document.getElementById('animeModal');
const closeModalBtn = document.querySelector('.close-modal');

// ===== Mobile Navigation Toggle =====
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// ===== Smooth Scrolling for Navigation =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offset = 80;
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ===== Active Navigation Link =====
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section[id]');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});

// ===== Render Gallery Items =====
function renderGallery(data) {
    galleryGrid.innerHTML = '';
    
    if (data.length === 0) {
        galleryGrid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 3rem;">
                <i class="fas fa-search" style="font-size: 3rem; color: var(--text-light); margin-bottom: 1rem;"></i>
                <p style="font-size: 1.2rem; color: var(--text-light);">No anime found matching your search.</p>
            </div>
        `;
        return;
    }

    data.forEach(anime => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.innerHTML = `
            <img src="${anime.image}" alt="${anime.title}" class="gallery-image">
            <div class="gallery-info">
                <h3 class="gallery-title">${anime.title}</h3>
                <div class="gallery-meta">
                    <span class="genre-tag">${capitalizeFirst(anime.genre)}</span>
                    <div class="rating">
                        <i class="fas fa-star"></i>
                        <span>${anime.rating}</span>
                    </div>
                </div>
                <p class="gallery-description">${anime.description}</p>
            </div>
        `;
        
        galleryItem.addEventListener('click', () => openModal(anime));
        galleryGrid.appendChild(galleryItem);
    });
}

// ===== Filter Gallery =====
function filterGallery() {
    let filteredData = animeData;

    // Apply genre filter
    if (currentFilter !== 'all') {
        filteredData = filteredData.filter(anime => anime.genre === currentFilter);
    }

    // Apply search filter
    if (searchQuery) {
        filteredData = filteredData.filter(anime => 
            anime.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            anime.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
            anime.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
        );
    }

    renderGallery(filteredData);
}

// ===== Filter Button Handlers =====
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        button.classList.add('active');
        
        // Update current filter
        currentFilter = button.getAttribute('data-filter');
        
        // Filter gallery
        filterGallery();
    });
});

// ===== Search Functionality =====
searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value;
    filterGallery();
});

// ===== Modal Functions =====
function openModal(anime) {
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalGenre = document.getElementById('modalGenre');
    const modalRating = document.getElementById('modalRating');
    const modalDescription = document.getElementById('modalDescription');
    const modalTags = document.getElementById('modalTags');

    modalImage.src = anime.image;
    modalImage.alt = anime.title;
    modalTitle.textContent = anime.title;
    modalGenre.textContent = capitalizeFirst(anime.genre);
    modalRating.innerHTML = `<i class="fas fa-star"></i> ${anime.rating}`;
    modalDescription.textContent = anime.description;
    
    // Render tags
    modalTags.innerHTML = '';
    anime.tags.forEach(tag => {
        const tagElement = document.createElement('span');
        tagElement.className = 'tag';
        tagElement.textContent = tag;
        modalTags.appendChild(tagElement);
    });

    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

closeModalBtn.addEventListener('click', closeModal);

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'block') {
        closeModal();
    }
});

// ===== Utility Functions =====
function capitalizeFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// ===== Intersection Observer for Animations =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
        }
    });
}, observerOptions);

// Observe sections for animation
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// ===== Scroll to Top Button =====
const scrollTopBtn = document.createElement('button');
scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
scrollTopBtn.className = 'scroll-top-btn';
scrollTopBtn.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
    color: white;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    display: none;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    box-shadow: var(--shadow-md);
    z-index: 999;
    transition: var(--transition);
`;

document.body.appendChild(scrollTopBtn);

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollTopBtn.style.display = 'flex';
    } else {
        scrollTopBtn.style.display = 'none';
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

scrollTopBtn.addEventListener('mouseenter', () => {
    scrollTopBtn.style.transform = 'translateY(-5px) scale(1.1)';
});

scrollTopBtn.addEventListener('mouseleave', () => {
    scrollTopBtn.style.transform = 'translateY(0) scale(1)';
});

// ===== Particle Background Effect =====
function createParticle() {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.cssText = `
        position: fixed;
        width: 3px;
        height: 3px;
        background: var(--primary-color);
        border-radius: 50%;
        pointer-events: none;
        opacity: 0.3;
        z-index: 1;
    `;
    
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    const duration = 3 + Math.random() * 4;
    
    particle.style.left = x + 'px';
    particle.style.top = y + 'px';
    particle.style.animation = `particleFloat ${duration}s ease-in-out infinite`;
    
    document.body.appendChild(particle);
    
    setTimeout(() => {
        particle.remove();
    }, duration * 1000);
}

// Create particles periodically
setInterval(createParticle, 500);

// Add particle animation to CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes particleFloat {
        0%, 100% {
            transform: translate(0, 0);
        }
        25% {
            transform: translate(20px, -20px);
        }
        50% {
            transform: translate(-20px, -40px);
        }
        75% {
            transform: translate(20px, -60px);
        }
    }
`;
document.head.appendChild(style);

// ===== Preloader =====
window.addEventListener('load', () => {
    const preloader = document.createElement('div');
    preloader.className = 'preloader';
    preloader.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(135deg, var(--bg-gradient-start), var(--bg-gradient-end));
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 9999;
        transition: opacity 0.5s ease;
    `;
    
    preloader.innerHTML = `
        <div style="text-align: center;">
            <i class="fas fa-torii-gate" style="font-size: 4rem; color: var(--primary-color); animation: pulse 1.5s ease-in-out infinite;"></i>
            <p style="margin-top: 1rem; font-size: 1.2rem; color: var(--text-dark);">Loading Gallery...</p>
        </div>
    `;
    
    document.body.insertBefore(preloader, document.body.firstChild);
    
    setTimeout(() => {
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.remove();
        }, 500);
    }, 1000);
});

// Add pulse animation to CSS
const pulseStyle = document.createElement('style');
pulseStyle.textContent = `
    @keyframes pulse {
        0%, 100% {
            transform: scale(1);
            opacity: 1;
        }
        50% {
            transform: scale(1.1);
            opacity: 0.7;
        }
    }
`;
document.head.appendChild(pulseStyle);

// ===== Initialize Gallery =====
renderGallery(animeData);

console.log('🌸 Anime Gallery loaded successfully! Enjoy exploring!');
