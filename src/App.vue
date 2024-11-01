<template>
  <div>
    <!-- header -->
    <header :class="{ scrollDown: isScrollDown }" class="header">
      <h1 class="typing-text">
        <span v-typing="'안녕하세요'" data-delay="200"></span>
        <span class="cursor">|</span> <!-- 커서 추가 -->
      </h1>
      <!-- introduction section -->
      <div class="intro-section">
        <img src="@/assets/증명사진.jpg" alt="Profile Image" class="profile-image">
        <div class="intro-text icon">
          <h2 class="section-title">INTRODUCTION</h2>
          <div class="contact-info icon">
            <font-awesome-icon :icon="['fas', 'venus']" />
            <span>고태경</span>
          </div>
          <div class="contact-info icon">
            <font-awesome-icon :icon="['fas', 'cake-candles']" />
            <span>2004.02.25 (만 20세)</span>
          </div>
          <div class="contact-info icon">
            <font-awesome-icon :icon="['fas', 'phone']" />
            <span>010-2987-5082</span>
          </div>
          <div class="contact-info icon">
            <font-awesome-icon :icon="['fas', 'envelope']" />
            <span>202244042@itc.ac.kr</span>
          </div>
        </div>
      </div>
    </header>
    
    <!-- main content -->
    <main class="main-content">
      <!-- 학력 -->
      <div class="education-section section">
        <div class="intro-text">
          <h2 class="section-title">학력</h2>
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
                <td>4.01/4.5</td>
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
      <div class="skills-section section">
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
      <div class="awards-section section">
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
      <div class="awards-section section">
        <div class="intro-text">
          <h2 class="section-title">교내외 활동내역</h2>
        </div>
        <div class="awards-info icon">
          <table>
            <thead>
              <tr>
                <th>활동기간</th>
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
      <div class="qualifications-section section">
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
      <div class="project-section section">
        <div class="intro-text">
          <h2 class="section-title">PROJECT</h2>
        </div>
        <div class="education-info icon">
          <span>프로젝트 !!!</span>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'App',
  directives: {
    typing: {
      mounted(el, binding) {  // Vue 3에서는 mounted 사용
        let text = binding.value;  // 전달된 텍스트 값
        let delay = parseInt(el.dataset.delay) || 100;  // 기본값을 100ms로 설정
        let index = 0;
        el.innerHTML = '';

        function typeWriter() {
          if (index < text.length) {
            el.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeWriter, delay);
          }
        }

        typeWriter();
      }
    }
  },
  data() {
    return {
      isScrollDown: false, // 스크롤 상태를 관리하는 변수
      prevScrollTop: 0,
      currentTab: 0, // 현재 활성 탭
      tabs: ['성장과정', '성격의 장단점', '대학생활', '지원동기 및 포부'] // 탭 제목
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      const nextScrollTop = window.pageYOffset || 0;
      if (nextScrollTop > this.prevScrollTop) {
        // 스크롤 다운
        this.isScrollDown = true;
      } else if (nextScrollTop < this.prevScrollTop) {
        // 스크롤 업
        this.isScrollDown = false;
      }
      this.prevScrollTop = nextScrollTop;
    },
    // 탭 네비게이션 메소드 추가
    tabnav(index) {
      this.currentTab = index; // 선택된 탭의 인덱스를 currentTab에 저장
    }
  }
}
</script>
