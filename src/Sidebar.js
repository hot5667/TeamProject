const sidebarItems = document.querySelectorAll('.sidebar-item');

sidebarItems.forEach(item => {
  item.addEventListener('click', function() {
    sidebarItems.forEach(item => {
      item.classList.remove('clicked');
    });
    this.classList.add('clicked');
  })
})

document.addEventListener("DOMContentLoaded", function () {
  const sidebar = document.querySelector('.sidebar'); // 부모 요소인 sidebar를 선택합니다.
  const subContainer = document.getElementById('Subcontainer'); // Subcontainer를 선택합니다.
  const sectionsData = {
      'KimDohyun-section': {
          name: '김도현',
          imgSrc: '/profile/김도현 사진.jpeg'
      },
      'KimByungYeop-section': {
          name: '김병엽',
          imgSrc: '/profile/김병엽님 사진.jpeg'
      },
      'ChoHeeJin-section': {
          name: '조희진',
          imgSrc: '/profile/조희진님 사진.jpeg'
      }
  };

  sidebar.addEventListener('click', function (event) {
      event.preventDefault();
      const targetItem = event.target.closest('.sidebar-item');
      if (!targetItem) return;

      const targetId = targetItem.getAttribute('href').substring(1) + '-section';

      subContainer.innerHTML = '';

      renderTeamInfo(subContainer, sectionsData[targetId]);
  });

  function renderTeamInfo(container, data) {
      const teamDiv = document.createElement('div');
      teamDiv.classList.add('Team1');
      teamDiv.id = data.name; 
      
      const img = document.createElement('img');
      img.src = data.imgSrc;
      img.alt = `${data.name} 프로필 사진`;
      
      teamDiv.appendChild(img);
      container.appendChild(teamDiv);
  }
});
