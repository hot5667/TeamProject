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
            introText: '안녕하세요,김도현입니다.'
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
  
            renderTeamInfo(subContainer, sectionsData[targetId], targetId);
        });
    });
  
    function renderTeamInfo(container, data, targetId) {
        const teamDiv = document.createElement('div');
        teamDiv.classList.add('Team1');
        teamDiv.id = data.name;
  
        const img = document.createElement('img');
        img.src = data.imgSrc;
        img.alt = `${data.name} 프로필 사진`;
  
        const text = document.createElement('p');
        text.classList.add('team-text');
        
        if (targetId === 'KimByungYeop-section') {
            text.innerHTML = `
            <div class = "KimByungYeop-text">
                MBTI: ENTJ<br> 
                취미: 운동, 코딩 영화: (역사적 배경을 담은) 국제시장, 남산의 부장들, 서울의 봄, 국가부도의 날, 1987<br> 
                노래: (팝송) One Call Away(Charlie Puth), Off My  Face(Justin Bieber), Thinking out Loud(Ed Sheeran) Purpose(Etham)<br>
                게임: (주로 여자친구랑) 오버워치, 크레이지 아케이드, 카트라이더'
            </div>
            `;
        } else if (targetId === "ChoHeeJin-section"){
            text.innerHTML = `
            <div class = "ChoHeeJin-text">
                MBTI: ENTJ<br> 
                취미: 운동, 코딩 영화: (역사적 배경을 담은) 국제시장, 남산의 부장들, 서울의 봄, 국가부도의 날, 1987<br> 
                노래: (팝송) One Call Away(Charlie Puth), Off My  Face(Justin Bieber), Thinking out Loud(Ed Sheeran) Purpose(Etham)<br>
                게임: (주로 여자친구랑) 오버워치, 크레이지 아케이드, 카트라이더'
            </div>
            `;
        } else if(targetId === "HanSuBin-section") {
            text.innerHTML = `
            <div class = "HanSuBin-text">
                MBTI: ENTJ<br> 
                취미: 운동, 코딩 영화: (역사적 배경을 담은) 국제시장, 남산의 부장들, 서울의 봄, 국가부도의 날, 1987<br> 
                노래: (팝송) One Call Away(Charlie Puth), Off My  Face(Justin Bieber), Thinking out Loud(Ed Sheeran) Purpose(Etham)<br>
                게임: (주로 여자친구랑) 오버워치, 크레이지 아케이드, 카트라이더'
            </div>
            `;
        } else if (targetId === "JanSungHyun-section") {
            text.innerHTML = `
            <div class = "JanSungHyun-text">
                MBTI: ENTJ<br> 
                취미: 운동, 코딩 영화: (역사적 배경을 담은) 국제시장, 남산의 부장들, 서울의 봄, 국가부도의 날, 1987<br> 
                노래: (팝송) One Call Away(Charlie Puth), Off My  Face(Justin Bieber), Thinking out Loud(Ed Sheeran) Purpose(Etham)<br>
                게임: (주로 여자친구랑) 오버워치, 크레이지 아케이드, 카트라이더'
            </div>
            `;
        }
  
        teamDiv.appendChild(img);
        teamDiv.appendChild(text);
        container.appendChild(teamDiv);
    }
  });
  
