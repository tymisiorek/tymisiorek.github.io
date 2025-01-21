// Back to Top Button
const backToTopButton = document.getElementById('back-to-top');

// Show/hide the back-to-top button based on scroll position
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

// Scroll to the top when the button is clicked
backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Smooth Scroll for Navigation Links
const navLinks = document.querySelectorAll('header nav a');
navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default anchor behavior
        const targetId = event.target.getAttribute('href').substring(1); // Get target section ID
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Highlight Project on Hover
const projects = document.querySelectorAll('.project');
projects.forEach(project => {
    project.addEventListener('mouseover', () => {
        project.style.borderColor = '#007bff'; // Highlight border on hover
    });
    project.addEventListener('mouseout', () => {
        project.style.borderColor = '#ddd'; // Reset border on hover out
    });
});
