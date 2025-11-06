const toggleBtn = document.getElementById('toggleBtn');
const container = document.querySelector('.container');

toggleBtn.addEventListener('click', () => {
  container.classList.toggle('reverse');
});
