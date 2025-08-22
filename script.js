let currentPage = 0;
const pages = document.querySelectorAll('.page');
const message = "Wishing you the happiest 18 year birthday pa my first nd ever lasting bestfriend may your dreams be fullfilled with Gods help nd ur hardwork nd enjoy ur day not only ur day but ur entir life with lots nf happiness nd hope ur friendship continue till last nd its my promise on ur bday is i am always there has a good friend for u nd lets make a promise to be friends till last HAPPY BIRTHDAY MY BEST FRIEND"
const typedMessage = document.getElementById('typedMessage');

function nextPage() {
  if (currentPage < pages.length - 1) {
    pages[currentPage].classList.remove('active');
    currentPage++;
    pages[currentPage].classList.add('active');

    if (pages[currentPage].id === "message") {
      typeMessage();
    }
    if (pages[currentPage].id === "gallery") {
      // Restart bloom animation for photos
      const blooms = document.querySelectorAll('.bloom');
      blooms.forEach(bloom => {
        bloom.style.animation = 'none';
        bloom.offsetHeight; // trigger reflow
        bloom.style.animation = null;
      });
    }
  }
}

function typeMessage() {
  let i = 0;
  typedMessage.innerHTML = '';
  const interval = setInterval(() => {
    typedMessage.textContent += message.charAt(i);
    i++;
    if (i >= message.length) clearInterval(interval);
  }, 50);
}
