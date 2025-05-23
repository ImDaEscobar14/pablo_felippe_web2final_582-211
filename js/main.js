document.addEventListener('DOMContentLoaded', function () {
  const toggleButton = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav');
  const body = document.body;

  toggleButton.addEventListener('click', function () {
    navMenu.classList.toggle('open');
    body.classList.toggle('menu-open');
  });
});

