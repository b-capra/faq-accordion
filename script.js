let accs = document.querySelectorAll(".accordion");

accs.forEach((acc) => {
  acc.addEventListener('click', function() {
    let setClasses = !this.classList.contains('active');
    let arrow = acc.querySelector('img');
    let panel = this.nextElementSibling;

    setClass(accs);

    if (setClasses) {
      this.classList.add('active');
      arrow.classList.add('up');
      panel.style.maxHeight = panel.scrollHeight + 'px';
    };
  });
});

function setClass(els) {
  els.forEach((el) => {
    el.classList.remove('active');
    let tempArr = el.querySelector('img');
    tempArr.classList.remove('up');
    el.nextElementSibling.style.maxHeight = null;
  });
};