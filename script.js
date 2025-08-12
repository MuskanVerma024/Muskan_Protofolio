

// 1. Initialize AOS (Animate on Scroll)
AOS.init({
    duration: 800,
    once: true,
    offset: 50,
});

// 2. Typed.js Animation for Hero Section
new Typed('#typed-text', {
  strings: ['AIML Enthusiast', 'Web Developer', 'Problem Solver', 'Tech Innovator'],
  typeSpeed: 70,
  backSpeed: 50,
  loop: true,
  smartBackspace: true,
});

// 3. Dark Mode Toggle Functionality
const darkToggle = document.getElementById('darkToggle');
const body = document.body;

// Check for saved theme in localStorage
if (localStorage.getItem('theme') === 'dark') {
  body.setAttribute('data-theme', 'dark');
}

darkToggle.addEventListener('click', () => {
  if (body.getAttribute('data-theme') === 'dark') {
    body.removeAttribute('data-theme');
    localStorage.removeItem('theme');
  } else {
    body.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  }
});

// 4. 3D Hero Content Mouse Move Effect
const hero = document.querySelector('.hero');
const heroContent = document.querySelector('.hero-content');

hero.addEventListener('mousemove', (e) => {
    const { clientX, clientY } = e;
    const x = (window.innerWidth / 2 - clientX) / 25;
    const y = (window.innerHeight / 2 - clientY) / 25;

    gsap.to(heroContent, {
        duration: 1,
        rotationY: x,
        rotationX: y,
        transformPerspective: 1000,
        ease: "power2.out"
    });
});

// Reset hero content transform on mouse leave
hero.addEventListener('mouseleave', () => {
    gsap.to(heroContent, {
        duration: 1,
        rotationY: 0,
        rotationX: 0,
        ease: "power2.out"
    });
});