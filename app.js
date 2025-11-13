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

// Profile Image Hover
const profileImage = document.querySelector('#intro .intro-image img');

profileImage.addEventListener('mouseover', () => {
  profileImage.style.transform = 'scale(1.05)';
  profileImage.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
});

profileImage.addEventListener('mouseout', () => {
  profileImage.style.transform = 'scale(1)';
  profileImage.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
});