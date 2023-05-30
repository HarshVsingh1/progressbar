const pre = document.getElementById('pre');
const next = document.getElementById('next');
const circle = document.querySelectorAll('.circle');

let currentactive = 1;
console.log(circle.length)


next.addEventListener('click', () => {
  currentactive++;
  update(currentactive);
})

pre.addEventListener('click', () => {

  currentactive--;

  update(currentactive);
})


function update(targetidx) {
  circle.forEach((circle, idx) => {
    console.log(idx)
    if (idx < targetidx) {
      circle.classList.add('active')
    } else {
      circle.classList.remove('active')
    }

  })
  if (currentactive == 1) {
    pre.setAttribute('disabled', '');
  }
  else if (currentactive == circle.length) {
    next.setAttribute('disabled', '');
  }
  else {
    pre.removeAttribute('disabled', '');
    next.removeAttribute('disabled', '');
  }



}
