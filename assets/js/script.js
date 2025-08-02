if (window.innerWidth > 768) {
	particlesJS.load('particles-js', 'assets/json/particlesjs-config.json');
}

// Mobile Menu Functionality
document.addEventListener('DOMContentLoaded', function() {
    const hamburgerBtn = document.querySelector('.hamburger-btn');
    const closeBtn = document.querySelector('.close-btn');
    const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

    // Toggle mobile menu
    hamburgerBtn.addEventListener('click', function() {
        if (mobileMenuOverlay.classList.contains('active')) {
            closeMenu();
        } else {
            mobileMenuOverlay.classList.add('active');
            hamburgerBtn.classList.add('active');
            hamburgerBtn.setAttribute('aria-label', 'メニューを閉じる');
            document.body.style.overflow = 'hidden'; // Prevent background scroll
        }
    });

    // Close mobile menu
    function closeMenu() {
        mobileMenuOverlay.classList.remove('active');
        hamburgerBtn.classList.remove('active');
        hamburgerBtn.setAttribute('aria-label', 'メニューを開く');
        document.body.style.overflow = ''; // Restore scroll
    }

    closeBtn.addEventListener('click', closeMenu);

    // Close menu when clicking overlay
    mobileMenuOverlay.addEventListener('click', function(e) {
        if (e.target === mobileMenuOverlay) {
            closeMenu();
        }
    });

    // Close menu when clicking nav links
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // Close menu on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && mobileMenuOverlay.classList.contains('active')) {
            closeMenu();
        }
    });
});