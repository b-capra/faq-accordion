var accs = document.querySelectorAll(".accordion");

accs.forEach((acc) => {
  acc.addEventListener('click', function() {
    this.classList.toggle('active');

    let arrow = acc.querySelector('img');
    arrow.classList.toggle('up');

    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + 'px';
    }
  });
});