export function initializeToggleDarkMode() {
    const toggleButton = document.getElementById('toggle-button');
    const toggleStatus = document.getElementById('toggle-status');

    toggleButton.addEventListener('change', () => {
        document.body.classList.toggle('dark-mode');
    });
}