// Africa Safari Discovery - Main JavaScript

// Navbar scroll behavior
const navbar = document.querySelector('.navbar');
const hero = document.querySelector('.hero');

if (navbar && hero) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.remove('transparent');
      navbar.classList.add('solid');
      navbar.querySelector('.logo').classList.add('solid');
    } else {
      navbar.classList.add('transparent');
      navbar.classList.remove('solid');
      navbar.querySelector('.logo').classList.remove('solid');
    }
  });
}

// Hamburger menu
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
  });
}

// Stats counter animation
const statNumbers = document.querySelectorAll('.stat-number');

const animateCounter = (element, target) => {
  let current = 0;
  const increment = target / 100;
  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      element.textContent = target + '+';
      clearInterval(timer);
    } else {
      element.textContent = Math.floor(current) + '+';
    }
  }, 20);
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const target = parseInt(entry.target.getAttribute('data-target'));
      animateCounter(entry.target, target);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

statNumbers.forEach(stat => observer.observe(stat));

// Countdown timers
function updateCountdowns() {
  const countdowns = document.querySelectorAll('.countdown');
  countdowns.forEach(countdown => {
    const expiry = new Date(countdown.dataset.expiry);
    const now = new Date();
    const diff = expiry - now;
    
    if (diff > 0) {
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      countdown.textContent = `${days}d ${hours}h ${mins}m left`;
    } else {
      countdown.textContent = 'Expired';
    }
  });
}

setInterval(updateCountdowns, 60000);
updateCountdowns();

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});