const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');
const contactForm = document.getElementById('contact-form');

menuToggle?.addEventListener('click', () => {
  navMenu.classList.toggle('open');
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 760) {
    navMenu.classList.remove('open');
  }
});

const revealElements = document.querySelectorAll('.animate-up');
const revealOptions = {
  root: null,
  rootMargin: '0px 0px -100px 0px',
  threshold: 0.1,
};

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, revealOptions);

revealElements.forEach((item) => revealObserver.observe(item));

if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const button = contactForm.querySelector('button');
    if (button) {
      button.textContent = 'Message Sent';
      button.disabled = true;
    }
    contactForm.reset();
  });
}
