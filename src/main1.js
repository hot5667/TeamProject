const toggleButton = document.getElementById('toggle-button');
const toggleStatus = document.getElementById('toggle-status');
const todoBtn = document.getElementById('listbtn');

toggleButton.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode');
    document.querySelector('header').classList.toggle('dark-mode');
    document.querySelector('#listbtn').style.backgroundColor = 'rgb(200, 200, 200)';
});