document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.querySelector('.menu-icon span');
    const navLinks = document.querySelector('.nav_links');
    const links = document.querySelectorAll('.nav_links a');
    let isMenuOpen = false;
  
    menuIcon.addEventListener('click', () => {
      if (isMenuOpen) {
        gsap.to(navLinks, { duration: 0.5, height: 0, onComplete: () => {
          navLinks.classList.remove('active');
          navLinks.style.display = 'none';
        }});
        gsap.to(links, { duration: 0.5, opacity: 0, y: -10, stagger: 0.1 });
        menuIcon.innerHTML = '&#9776;'; // Menu icon
      } else {
        navLinks.style.display = 'flex';
        navLinks.classList.add('active');
        gsap.fromTo(navLinks, { height: 0 }, { duration: 0.5, height: 'auto' });
        gsap.fromTo(links, { opacity: 0, y: -10 }, { duration: 0.5, opacity: 1, y: 0, stagger: 0.1 });
        menuIcon.innerHTML = '&#10005;'; // Cross icon
      }
      isMenuOpen = !isMenuOpen;
    });
  });
  