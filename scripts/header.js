(function () {
  const menuButton = document.querySelector('.material-icons.menu-icon');
  const menuOptions = document.querySelector('.menu-options');

  function closeMenu(event) {
    if (
      menuOptions.classList.contains('open')
      && !event.target.classList.contains('menu-icon')
    ) {
      menuOptions.classList.remove('open');
    }
  }

  function clickOnMenu() {
    if (menuOptions.classList.contains('open')) {
      menuOptions.classList.remove('open');
    } else {
      menuOptions.classList.add('open');
    }
  }

  document.addEventListener('click', closeMenu);
  menuButton.addEventListener('click', clickOnMenu);
  menuButton.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
      clickOnMenu();
    }
  });
})()