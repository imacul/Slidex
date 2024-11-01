    // Toggle menu on hamburger icon click
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

// Toggle the menu on click
navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close menu when a link is clicked
function closeMenu() {
    navLinks.classList.remove('active');
}

// Close menu when clicking outside the nav area
document.addEventListener('click', (event) => {
    const isClickInsideNav = navLinks.contains(event.target) || navToggle.contains(event.target);
    
    if (!isClickInsideNav) {
        navLinks.classList.remove('active'); // Close menu
    }
});