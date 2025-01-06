const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');


menuIcon.addEventListener('click', () => {
  navbar.classList.toggle('active');
});


document.addEventListener('click', (e) => {
  if (!menuIcon.contains(e.target) && !navbar.contains(e.target)) {
    navbar.classList.remove('active');
  }
});


const navLinks = document.querySelectorAll('.navbar a');

navLinks.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    const targetSection = document.querySelector(this.getAttribute('href'));


    targetSection.scrollIntoView({
      behavior: 'smooth'
    });


    navLinks.forEach(link => link.classList.remove('active'));
    this.classList.add('active');
  });
});


const scrollToTopBtn = document.querySelector('.scroll-to-top-btn');
const rootElement = document.documentElement;


document.addEventListener('scroll', () => {
  const scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
  
  if (rootElement.scrollTop / scrollTotal > 0.15) {
    scrollToTopBtn.classList.add('show-btn');
  } else {
    scrollToTopBtn.classList.remove('show-btn');
  }
});


scrollToTopBtn.addEventListener('click', () => {
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});


window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  const scrollPos = window.scrollY || document.documentElement.scrollTop;

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    if (scrollPos >= sectionTop - 50 && scrollPos < sectionTop + sectionHeight - 50) {
      const id = section.getAttribute('id');
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${id}`) {
          link.classList.add('active');
        }
      });
    }
  });
});
