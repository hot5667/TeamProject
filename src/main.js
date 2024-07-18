const toggleButton = document.getElementById('toggle-button');
const toggleStatus = document.getElementById('toggle-status');

toggleButton.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode');
    document.querySelector('header').classList.toggle('dark-mode');
});

