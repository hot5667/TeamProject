const sidebarItems = document.querySelectorAll('.sidebar-item');

sidebarItems.forEach(item => {
  item.addEventListener('click', function() {
    sidebarItems.forEach(item => {
      item.classList.remove('clicked');
    });
    this.classList.add('clicked');
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const sidebarItems = document.querySelectorAll('.sidebar-item');
  const subContainer = document.getElementById('Subcontainer');
  const sectionsData = {
      'KimDohyun-section': {
          name: '김도현',
          imgSrc: '/profile/김도현 사진.jpeg',
          introText: '안녕하세요, 김도현입니다.'
      },
      'KimByungYeop-section': {
          name: '김병엽',
          imgSrc: '/profile/김병엽님 사진.jpeg',
          introText: '안녕하세요, 김병엽입니다.'
      },
      'ChoHeeJin-section': {
          name: '조희진',
          imgSrc: '/profile/조희진님 사진.jpeg',
          introText: '안녕하세요, 조희진입니다.'
      },
      'HanSuBin-section': {
          name: '한수빈',
          imgSrc: '/profile/한수빈님 사진.png',
          introText: '안녕하세요, 한수빈입니다.'
      },
      'JanSungHyun-section': {
          name: '장성현',
          imgSrc: '/profile/정성현님 사진.jpeg',
          introText: '안녕하세요, 장성현입니다.'
      }
  };

  sidebarItems.forEach(item => {
      item.addEventListener('click', function(event) {
          event.preventDefault();
          sidebarItems.forEach(item => {
              item.classList.remove('clicked');
          });
          this.classList.add('clicked');
          
          const targetId = this.getAttribute('href').substring(1) + '-section';
          subContainer.innerHTML = '';

          renderTeamInfo(subContainer, sectionsData[targetId]);
      });
  });

  function renderTeamInfo(container, data) {
      const teamDiv = document.createElement('div');
      teamDiv.classList.add('Team1');
      teamDiv.id = data.name;

      const img = document.createElement('img');
      img.src = data.imgSrc;
      img.alt = `${data.name} 프로필 사진`;

      const text = document.createElement('p');
      text.classList.add('team-text');
      text.textContent = data.introText;

      teamDiv.appendChild(img);
      teamDiv.appendChild(text);
      container.appendChild(teamDiv);
  }
});
