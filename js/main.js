const header = document.getElementById('siteHeader');
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.getElementById('primaryNav');
const heroSlides = document.querySelectorAll('.hero-slide');
let heroIndex = 0;

const onScroll = () => {
  if (!header) return;
  if (window.scrollY > 12) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
};

window.addEventListener('scroll', onScroll);
window.addEventListener('load', onScroll);

const closeNav = () => {
  if (!header || !navToggle) return;
  header.classList.remove('nav-open');
  navToggle.setAttribute('aria-expanded', 'false');
};

if (navToggle && header) {
  navToggle.addEventListener('click', () => {
    const isOpen = header.classList.toggle('nav-open');
    navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });
}

if (navLinks) {
  navLinks.addEventListener('click', (event) => {
    if (event.target.tagName === 'A') {
      closeNav();
    }
  });
}

window.addEventListener('resize', () => {
  if (window.innerWidth > 900) {
    closeNav();
  }
});

const cycleHeroSlides = () => {
  if (heroSlides.length < 2) return;
  heroSlides[heroIndex].classList.remove('active');
  heroIndex = (heroIndex + 1) % heroSlides.length;
  heroSlides[heroIndex].classList.add('active');
};

setInterval(cycleHeroSlides, 7000);
