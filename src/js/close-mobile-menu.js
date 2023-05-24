document.querySelector('.menu-toggle').addEventListener('click', function(e) {
  e.target.closest('.menu-toggle').classList.toggle('menu-toggle--toggle');
})