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

  function enterOnMenu(event) {
    if (event.key === 'Enter') {
      clickOnMenu();
    }
  }

  document.removeEventListener('click', closeMenu)
  document.addEventListener('click', closeMenu);
  menuButton.removeEventListener('click', clickOnMenu);
  menuButton.addEventListener('click', clickOnMenu);
  menuButton.removeEventListener('keyup', enterOnMenu);
  menuButton.addEventListener('keyup', enterOnMenu);
})()