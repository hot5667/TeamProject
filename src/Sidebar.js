const sidebarItems = document.querySelectorAll('.sidebar-item');

sidebarItems.forEach(item => {
  item.addEventListener('click', function() {
    sidebarItems.forEach(item => {
      item.classList.remove('clicked');
    });
    this.classList.add('clicked');
  })
})