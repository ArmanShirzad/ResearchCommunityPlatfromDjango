// Function to toggle the display of the mobile menu
function toggleMobileMenu() {
    var menu = document.querySelector('.navbar-menu');
    menu.classList.toggle('active');
}

// Add event listener for each navbar link to close the menu on click
document.querySelectorAll('.navbar-link').forEach(link => {
    link.addEventListener('click', () => {
        var menu = document.querySelector('.navbar-menu');
        if (menu.classList.contains('active')) {
            menu.classList.remove('active');
        }
    });
});
