const cards = document.querySelectorAll('.index-card');
const origin = document.documentElement.clientHeight - cards[0].getBoundingClientRect().height * .5
if (cards.length)
  document.addEventListener('scroll', () => {
    cards.forEach(card => {
      card.setAttribute('style', `--state: ${(card.getBoundingClientRect().top - origin) < 0 ? 1 : 0}`)
    })
  });