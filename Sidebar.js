export function initializeSideBar() {
  const sidebarItems = document.querySelectorAll('.sidebar-item');

  sidebarItems.forEach(item => {
    item.addEventListener('click', function () {
      sidebarItems.forEach(item => {
        item.classList.remove('clicked');
      });
      this.classList.add('clicked');
    })
  })

  const navLinks = document.querySelectorAll(".sidebar-item");
  const sections = document.querySelectorAll(".content-section");
  const mainContainer = document.getElementById("container");

  navLinks.forEach(link => {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      const targetId = link.getAttribute('href').substring(1) + '-section';

      mainContainer.style.display = 'none';

      sections.forEach(section => {
        section.classList.remove('active');
      });

      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.classList.add('active');
      }
    });
  });
}