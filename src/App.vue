<template>
  <div>
    <header :class="{ scrollDown: isScrollDown }" class="header">
      <h1 v-typing="'ABCDEFG'" data-delay="200" class="typing-text"></h1>
    </header>
    <main class="main-content">
      <!-- introduction -->
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

      <!-- education -->
      <div class="education-section">
        <div class="intro-text">
          <h2 class="section-title">EDUCATION</h2>
        </div>
        <div class="education-info icon">
            <font-awesome-icon :icon="['fas', 'school']" />
            <span>2022.03~2025.02 |  인하공업전문대학 컴퓨터정보공학과  | 4.01 / 4.5</span>
          </div>
      </div>

      <!-- skills -->
      <div class="skills-section">
        <div class="intro-text">
          <h2 class="section-title">SKILLS</h2>
        </div>

        <div class="skills-name">
            <span>python</span>
        </div>
        <div class="skill-info">
          <p>
            웹 크롤링을 통한 데이터 수집, Matplotlib, Seaborn 등 라이브러리를 통한  데이터 시각화 <br>
             django 프레임워크를 통한 CRUD 구현 및 ajax를 이용한 비동기식 처리/
          </p>
        </div>

        <div class="skills-name">
            <span>MySql</span>
        </div>
        <div class="skill-info">
          <p>DDL/DML/DCL문 작성</p>
        </div>

        <div class="skills-name">
            <span>Oracle</span>
        </div>
        <div class="skill-info">
          <p>DDL/DML/DCL 작성 <br>
             PL/SQL 작성
          </p>
        </div>

        <div class="skills-name">
            <span>Power Bi</span>
        </div>
        <div class="skill-info">
          <p>쿼리 편집기를 통해 요구 사항에 맞게 데이터를 전처리 및 시각화</p>
        </div>
        
      </div>

      <p>여기에 포트폴리오 콘텐츠가 들어갑니다.</p>
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
      prevScrollTop: 0
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
    }
  }
}
</script>