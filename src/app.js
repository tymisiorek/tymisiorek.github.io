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

// Smooth Scroll for Internal Navigation Links
const navLinks = document.querySelectorAll('header nav a[href^="#"]'); // Select only internal links

navLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default anchor behavior
    const targetId = link.getAttribute('href').substring(1); // Get target section ID
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
    const randomColor = `hsl(${Math.random() * 360}, 60%, 70%)`; // Generate random color
    project.style.backgroundColor = randomColor;
    project.style.transform = 'scale(1.05)'; // Slight zoom effect
  });
  project.addEventListener('mouseout', () => {
    project.style.backgroundColor = ''; // Reset background
    project.style.transform = 'scale(1)'; // Reset zoom
  });
});

// Typing Effect in About Section
const typingText = "Welcome to my portfolio!";
const typingElement = document.createElement('p');
typingElement.className = 'typing-effect';
document.querySelector('#about .container').appendChild(typingElement);

let typingIndex = 0;
function typeEffect() {
  if (typingIndex < typingText.length) {
    typingElement.textContent += typingText.charAt(typingIndex);
    typingIndex++;
    setTimeout(typeEffect, 100); // Adjust typing speed
  }
}
typeEffect();

// Fade-in Sections on Scroll
const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);

sections.forEach((section) => {
  observer.observe(section);
});

// Profile Image Hover Effect
const profileContainer = document.querySelector('#about .profile-container');

profileContainer.addEventListener('mouseover', () => {
  const randomColor = `hsl(${Math.random() * 360}, 60%, 70%)`; 
  profileContainer.style.borderColor = randomColor;
});

profileContainer.addEventListener('mouseout', () => {
  profileContainer.style.borderColor = '#555'; // Reset to default border color
});
