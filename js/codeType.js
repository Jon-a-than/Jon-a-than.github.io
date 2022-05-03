document.querySelectorAll('figure.highlight').forEach((item) => {
  item.setAttribute('data-type', (item.getAttribute('class').split(' '))[1])
})