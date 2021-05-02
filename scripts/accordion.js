(function () {
  function searchAccordion(element) {
    while ((!element.classList.contains('accordion')) && (!element.classList.contains('main-body'))) {
      element = element.parentNode;
    }

    return element;
  }

  function openCloseAccordion(event) {
    const accordion = searchAccordion(event.target);
    const section = accordion.classList.item(1);
    const text = document.querySelector(`.text.${section}`);
    if (accordion.classList.contains('open')) {
      accordion.classList.remove('open');
      text.classList.remove('open');
    } else {
      accordion.classList.add('open');
      text.classList.add('open');
    }
  }

  function enterOnAccordion(event) {
    if (event.key === 'Enter') {
      openCloseAccordion(event);
    }
  }

  const accordions = document.querySelectorAll('.accordion');

  for (const accordion of accordions) {
    accordion.removeEventListener('click', openCloseAccordion);
    accordion.addEventListener('click', openCloseAccordion);
    accordion.removeEventListener('keyup', enterOnAccordion);
    accordion.addEventListener('keyup', enterOnAccordion);
  }
})()