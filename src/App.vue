<template>
  <div>
    <!-- 사이드바 -->
    <div class="sidebar">
      <div class="profile">
        <img src="@/assets/증명사진.jpg" alt="Profile Image" class="profile-image" />
        <h2>고태경</h2>
        <p>Data Analyst</p>
      </div>
      <nav class="nav">
        <ul>
          <li v-for="(item, index) in navItems" :key="index">
            <a href="#" @click.prevent="scrollToSection(item.id)">
              {{ item.name }}
            </a>
          </li>
        </ul>
      </nav>
    </div>
    <!-- main content -->
    <main class="main-content">
      <!-- INTRO -->
      <div id="section-0" class="section">
        <span id="target" class="introduce typing">안녕하세요, 데이터 분석가를 희망하는 고태경입니다.</span>
        <span class="cursor typing">|</span> 
        <div class="contact-info icon">
          <font-awesome-icon :icon="['fas', 'cake-candles']" />
          <span>2004.02.25 (만 20세)</span>
        </div>
        <div class="contact-info icon">
          <font-awesome-icon :icon="['fas', 'phone']" />
          <span>010-2987-5082</span>
        </div>
        <div class="contact-info icon">
          <font-awesome-icon :icon="['fas', 'school']" />
          <span>인하공업전문대학 컴퓨터정보공학과</span>
        </div>
        <div class="contact-info icon">
          <font-awesome-icon :icon="['fas', 'envelope']" />
          <span>202244042@itc.ac.kr</span>
        </div>
        <div class="contact-icon">
          <a href="https://github.com/taegyeong0225" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
              <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/>
            </svg>
          </a>
        </div>
        <div class="contact-icon">
          <a href="https://www.linkedin.com/in/%ED%83%9C%EA%B2%BD-%EA%B3%A0-4902aa2a2/" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/>
            </svg>
          </a>
        </div>
      </div>
      <!-- 학력 -->
      <div id="section-1" class="section">
        <div class="intro-text">
          <h2 class="section-title">EDUCATION</h2>
        </div>
        <div class="education-info icon">
          <table>
            <thead>
              <tr>
                <th>기간</th>
                <th>구분</th>
                <th>학교명</th>
                <th>전공</th>
                <th>학점</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>22.02.28~24.02.15</td>
                <td>전문대학(재학)</td>
                <td>인하공업전문대학</td>
                <td>컴퓨터정보공학과</td>
                <td>4.01 / 4.5</td>
              </tr>
              <tr>
                <td>19.03.02~22.02.15</td>
                <td>고등학교(졸업)</td>
                <td>검단고등학교</td>
                <td>이공계열</td>
                <td>-</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <!-- skills -->
      <div id="section-2" class="section">
        <div class="intro-text">
          <h2 class="section-title">SKILLS</h2>
        </div>
        <div class="skills-name">
          <span>python</span>
        </div>
        <div class="skills-info">
          <p>
            웹 크롤링을 통한 데이터 수집, Matplotlib, Seaborn 등 라이브러리를 통한 데이터 시각화 <br>
            django 프레임워크를 통한 CRUD 구현 및 ajax를 이용한 비동기식 처리
          </p>
        </div>
        <div class="skills-name">
          <span>MySql</span>
        </div>
        <div class="skills-info">
          <p>DDL/DML/DCL문 작성</p>
        </div>
        <div class="skills-name">
          <span>Oracle</span>
        </div>
        <div class="skills-info">
          <p>DDL/DML/DCL 작성 <br> PL/SQL 작성</p>
        </div>
        <div class="skills-name">
          <span>Power Bi</span>
        </div>
        <div class="skills-info">
          <p>쿼리 편집기를 통해 요구 사항에 맞게 데이터를 전처리 및 시각화</p>
        </div>
      </div>
      <!-- 수상내역 -->
      <div id="section-3" class="section">
        <div class="intro-text">
          <h2 class="section-title">수상내역</h2>
        </div>
        <div class="awards-info icon">
          <table>
            <thead>
              <tr>
                <th>수상일자</th>
                <th>수상내용</th>
                <th>수여기관</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2024.02.01</td>
                <td>2023 WOW(World Of Wisdom) 캠프(2) (은상)</td>
                <td>인하공업전문대학</td>
              </tr>
              <tr>
                <td>2023.11.30</td>
                <td>제 21 회 독후감경진대회 (장려상)</td>
                <td>인하공업전문대학</td>
              </tr>
              <tr>
                <td>2023.08.25</td>
                <td>3–In 인증</td>
                <td>인하공업전문대학</td>
              </tr>
              <tr>
                <td>2023.08.03</td>
                <td>2023 FLY 튜터링(1) 우수발표팀 (금상)</td>
                <td>인하공업전문대학</td>
              </tr>
              <tr>
                <td>2023.06.22</td>
                <td>2023 WOW(World Of Wisdom) 캠프(1) (은상)</td>
                <td>인하공업전문대학</td>
              </tr>
              <tr>
                <td>2023.06.01</td>
                <td>제 20 회 독후감경진대회 (장려상)</td>
                <td>인하공업전문대학</td>
              </tr>
              <tr>
                <td>2021.12.31</td>
                <td>표창장 (청소년 운영 위원회 활동)</td>
                <td>인천광역시서구청장</td>
              </tr>
              <tr>
                <td>2021.09.08</td>
                <td>제 23 회 전국중고생자원봉사대회 (동상)</td>
                <td>KB 라이프생명사회공헌재단</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <!-- 활동내역 -->
      <div id="section-4" class="section">
        <div class="intro-text">
          <h2 class="section-title">교내외 활동내역</h2>
        </div>
        <div class="awards-info icon">
          <table>
            <thead>
              <tr>
                <th>활동기관</th>
                <th>활동내용</th>
                <th>활동기간</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2024.07.01~2024.08.30</td>
                <td>부스트코스 data science 2024 - 리드부스터</td>
                <td>네이버 커넥트재단</td>
              </tr>
              <tr>
                <td>2023.04.04~2023.06.03</td>
                <td>2023 SOC 들어오는 노트 공모전</td>
                <td>인하공업전문대학</td>
              </tr>
              <tr>
                <td>2023.08.25</td>
                <td>3–In 인증</td>
                <td>인하공업전문대학</td>
              </tr>
              <tr>
                <td>2023.08.03</td>
                <td>2023 FLY 튜터링(1) 우수발표팀 (금상)</td>
                <td>인하공업전문대학</td>
              </tr>
              <tr>
                <td>2023.06.22</td>
                <td>2023 WOW(World Of Wisdom) 캠프(1) (은상)</td>
                <td>인하공업전문대학</td>
              </tr>
              <tr>
                <td>2023.06.01</td>
                <td>제 20 회 독후감경진대회 (장려상)</td>
                <td>인하공업전문대학</td>
              </tr>
              <tr>
                <td>2022.03.02~2023.03.01</td>
                <td>대학생 기획단 꿈꾼</td>
                <td>검단청소년센터</td>
              </tr>
              <tr>
                <td>2021.12.01~2023.01.31</td>
                <td>데이터 라벨링 아르바이트</td>
                <td>(주)미디어그룹사람과숲</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <!-- 자격증 -->
      <div id="section-5" class="section">
        <div class="intro-text">
          <h2 class="section-title">자격증</h2>
        </div>
        <div class="education-info icon">
          <table>
            <thead>
              <tr>
                <th>자격증명</th>
                <th>발급기관</th>
                <th>취득일</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>데이터 분석 준전문가 (ADSP)</td>
                <td>한국데이터산업진흥원</td>
                <td>2023.03.24</td>
              </tr>
              <tr>
                <td>정보처리산업기사</td>
                <td>한국산업인력공단</td>
                <td>2024.06.18</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <!-- project 이력 -->
      <div id="section-6" class="section">
        <div class="intro-text">
          <h2 class="section-title">프로젝트</h2>
        </div>
        <div class="education-info icon">
          <span> 프로젝트 !! </span>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted() {
    // TypeHangul을 사용하여 타이핑 효과 적용
    if (window.TypeHangul) {
      window.TypeHangul.type('#target', {
        speed: 100,  // 타이핑 속도
        cursor: true, // 커서 활성화
      });
    }
  },
  data() {
    return {
      isScrollDown: false,
      prevScrollTop: 0,
      currentTab: 0,
      tabs: ['ABOUT', 'EDUCATION', 'SKILLS', '수상내역', '교내외 활동내역', '자격증', '프로젝트'],
      navItems: [
        { id: 'section-0', name: 'ABOUT' },
        { id: 'section-1', name: 'EDUCATION' },
        { id: 'section-2', name: 'SKILLS' },
        { id: 'section-3', name: '수상내역' },
        { id: 'section-4', name: '교내외 활동내역' },
        { id: 'section-5', name: '자격증' },
        { id: 'section-6', name: '프로젝트' }
      ]
    };
  },
  methods: {
    handleScroll() {
      const nextScrollTop = window.pageYOffset || 0;
      if (nextScrollTop > this.prevScrollTop) {
        this.isScrollDown = true;
      } else if (nextScrollTop < this.prevScrollTop) {
        this.isScrollDown = false;
      }
      this.prevScrollTop = nextScrollTop;
    },
    scrollToSection(id) {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    },
    tabnav(index) {
      this.currentTab = index;
      this.scrollToSection(this.navItems[index].id);
    }
  }
};
</script>