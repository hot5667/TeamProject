const sidebarItems = document.querySelectorAll('.sidebar-item');

sidebarItems.forEach(item => {
    item.addEventListener('click', function () {
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
            EngName: 'KimDohyun',
            imgSrc: '/profile/김도현 사진.jpeg',
            introText: '안녕하세요,김도현입니다.',
            songIndex: 0,
            audioSrc: '/music/song0.mp3'
        },
        'KimByungYeop-section': {
            name: '김병엽',
            EngName: 'KimByungYeop',
            imgSrc: '/profile/김병엽님 사진.jpeg',
            introText: '안녕하세요, 김병엽입니다.'
        },
        'ChoHeeJin-section': {
            name: '조희진',
            EngName: 'ChoHeeJin',
            imgSrc: '/profile/조희진님 사진.jpeg',
            introText: '안녕하세요, 조희진입니다.'
        },
        'HanSuBin-section': {
            name: '한수빈',
            EngName: 'HanSuBin',
            imgSrc: '/profile/한수빈님 사진.png',
            introText: '안녕하세요, 한수빈입니다.'
        },
        'ZhangSeongHyun-section': {
            name: '장성현',
            EngName: 'ZhangSeongHyun',
            imgSrc: '/profile/정성현님 사진.jpeg',
            introText: '안녕하세요, 장성현입니다.'
        }
    };

    

    sidebarItems.forEach(item => {
        item.addEventListener('click', function (event) {
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
        img.className = `${data.EngName}`;
        img.src = data.imgSrc;
        img.alt = `${data.name} 프로필 사진`;

        const text = document.createElement('p');
        text.classList.add('team-text');
        if (targetId === "KimDohyun-section") {
            text.innerHTML = `
            <div class = "KimDohyun-Profile">
                <div class = "KimDohyun-text">
                    <h2>KimDohyun-Profile</h2>
                    안녕하세요 FE개발자 지망생 김도현이라고 합니다.!<br>
                    저는 이전에 게임 클라이언트 개발을 하면서 그래픽렌더링엔진 관련 해서 학습하였습니다.<br>
                    현재는 FE에 전념하는 만큼 여러분들과 많은 프로젝트를 진행 하면서 친해지고 싶습니다. 잘부탁드립니다!
                    
                </div>
            </div>
            `;
        } else if (targetId === 'KimByungYeop-section') {
            text.innerHTML = `
            <div class = "KimByungYeop-Profile">
                <div class = "KimByungYeop-text">
                    <h2>KimByoungYup  Profile</h2>
                    <p>MBTI: <span class="mbti">ENTJ</span></p>
                    <p>취미: <span class="hobby">운동, 코딩</span></p>
                    <p>영화: <span class="movies">(역사적 배경을 담은) 국제시장, 남산의 부장들, 서울의 봄, 국가부도의 날, 1987</span></p>
                    <p>노래: <span class="songs">(팝송) One Call Away(Charlie Puth), Off My Face(Justin Bieber), Thinking out Loud(Ed Sheeran), Purpose(Etham)</span></p>
                    <p>게임: <span class="games">(주로 여자친구랑) 오버워치, 크레이지 아케이드, 카트라이더</span></p>
                </div>
            </div>
            `;
        } else if (targetId === "ChoHeeJin-section") {
            text.innerHTML = `
            <div class = "ChoHeeJin-Profile">
                <div class = "ChoHeeJin-text">
                    <h2>ChoHeeJin Profile</h2>
                    <p>
                        뽀송 털, 발 꼬순내, 검정콩 세개 진짜 너무 귀여워요..!! 🐶<br><br>
                        가끔 들을 수 있는 발 톡톡 소리랑 물 마시는 소리도 너무 좋아요! 그리고 저는 아이돌 인피니트도 좋아해요! 🎤<br><br>
                        아 최근에는 무한대집회 IV 팬미팅에 갔다왔어요! 콘서트랑 팬미팅은 비싸지만 너무 재미있어요..!! <br><br>
                        또, 제가 유일하게 하는 게임은 스타크래프트에요! 다들 한몰 간 게임이라고 하지만 저는 아직 재밌더라구요 유즈맵도 계속 업데이트 되고있고 재밌는 맵도 계속 나오고 있어서요! 🎮<br><br>
                        사실 제가 할 줄 아는 유일한 게임이에요 ㅋㅋ
                    </p>
                </div>
            </div>
            `;
        } else if (targetId === "HanSuBin-section") {
            text.innerHTML = `
            <div class = "HanSuBin-Profile">
                <div class = "HanSuBin-text">
                    <h1>ChoHeeJin Profile</h1>
                    <h2>엄마 나 <span class="dev" style="color = red;color: red;">개발자</span>가 될래요!!!</h2>
                    <p>
                        안녕하세요 개린이 한수빈입니다.<br>
                        저는  올해  세라믹디자인과를  졸업하며  내일배움캠프에  참여하게  되었습니다.<br>
                        혹시  ‘세라믹디자인과’를  아시는  분이  계실까요? ‘도예과’라고  하면  그제서야  "아~  사랑과  영혼"을  떠올리시는  분들이 많더라고요☺️<br>
        
                        졸업  후  돈을  벌기  위해  도자기는  잠시  뒤로하고  컴퓨터  앞에  앉게  되었습니다.<br>
                        도자기와  개발은 전혀  연관성  없어  보이지만  결과물을  낸다는  것에  있어,  큰  성취감을  준다는  느낌을  받아  결심하게  되었습니다. <br>
                        <br>
                        이번  프로젝트에서  저는  투두리스트를  구현해보았습니다.  제  MBTI  영향인지는  모르겠지만,  계획을  세울  때  큰  틀만  짜는  것을  좋아해  항목을  4개로  제한해두었습니다.  제  MBTI가  어느  정도  예상되실까요?☺️ <br>
                        <br>
                        이  미니  프로젝트를  진행하는  동안  아둥바둥  쫓아간다고  정말  쉴틈  없었는데요.  
                        그런  저에게  소확행은  팀원분들과  회의하며<br>  피드백  주고받는  것.  유일한  휴식  타임이랄까요?  (물론,  저는  피드백 받는  입장이지만요.^^) <br>
                        <br>
                        아직  배울  것  많고  미숙한  저에게  항상  친절한  저희  '개발세발팀'.  많이  좋아합니다.♥ <br>
                        <br>
                        감사합니다.
                    </p>
                </div>
            </div>
            `;
        } else if (targetId === "ZhangSeongHyun-section") {
            text.innerHTML = `
            <div class = "ZhangSeongHyun-Profile">
                <div class = "ZhangSeongHyun-text">
                    <h2>ZhangSeongHyun Profile</h2>
                    <p>
                        안녕하세요, 저는 비전공자이고, 개발과 관련 없는 직장을 다니다가 흥미가 생겨 배우게 되었습니다.🏢<br>
                        <br>
                        저의 성격은 내성적이고 조용한 성격을 가진 사람입니다.🤫<br>
                        <br>
                        사람들과의 대화보다는 혼자 있는 시간을 더 즐기는 편입니다.☺️ <br>
                        <br>
                        일상 속에서는 종종 게으름을 피우곤 하지만, 관심 있는 분야나 좋아하는 일에는 깊이 몰두하는 순간도 있습니다.<br>
                        <br>
                        좋아하는 것은 캠핑을 좋아합니다.🏕️ 자주 가거나 멋있는 장비가 있지는 않지만 다녀오면 스트레스가 많이 풀리는 것 같습니다.🆙<br>
                    </p>   
                </div>
            </div>
            `;
        }

        teamDiv.appendChild(img);
        teamDiv.appendChild(text);
        container.appendChild(teamDiv);
    }
});