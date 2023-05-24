const menuLinks = document.querySelectorAll('.mobile-menu-link');
menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    const menuContainer = document.querySelector('.menu-container');
    menuContainer.classList.remove('is-open');
  });
}); 