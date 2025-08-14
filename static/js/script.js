

// 1. Initialize AOS (Animate on Scroll)
AOS.init({
    duration: 800,
    once: true,
    offset: 50,
});

// Typed.js Animation for Hero Section - Enhanced
new Typed('#typed-text', {
  strings: [
    '<span style="color:#ff4b5c;">AIML Enthusiast</span>',
    '<span style="color:#4cafef;">Web Developer</span>',
    '<span style="color:#ffb400;">Problem Solver</span>',
    '<span style="color:#7ed957;">Tech Innovator</span>'
  ],
  typeSpeed: 70,
  backSpeed: 50,
  backDelay: 1000,
  startDelay: 300,
  loop: true,
  smartBackspace: true,
  fadeOut: true,
  fadeOutClass: 'typed-fade-out',
  fadeOutDelay: 500,
  shuffle: false, // can set true for random order
  onComplete: (self) => {
    // Small "bounce" animation after finishing
    const typedElement = document.getElementById('typed-text');
    typedElement.style.transition = 'transform 0.3s ease';
    typedElement.style.transform = 'scale(1.05)';
    setTimeout(() => {
      typedElement.style.transform = 'scale(1)';
    }, 300);
  }
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
