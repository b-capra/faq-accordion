var accs = document.querySelectorAll(".accordion");

for (let i = 0; i < accs.length; i++) {
  accs[i].addEventListener('click', function() {
    this.classList.toggle('active');

    var panel = this.nextElementSibling;
    if (panel.style.display === 'block') {
      panel.style.display = 'none';
    } else {
      panel.style.display = 'block';
    }
  });
}