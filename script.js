document.getElementById('darkToggle').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  const toggle = document.getElementById('darkToggle');
  toggle.textContent = document.body.classList.contains('dark-mode') ? "☀️" : "🌙";
});
