<template>
  <div>
    <!-- header -->
    <header :class="{ scrollDown: isScrollDown }" class="header">
      <h1 v-typing="'ABCDEFG'" data-delay="200" class="typing-text"></h1>
      
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
      <!-- education -->
      <div class="education-section section">
        <div class="intro-text">
          <h2 class="section-title">EDUCATION</h2>
        </div>
        <div class="education-info icon">
          <font-awesome-icon :icon="['fas', 'school']" />
          <span>2022.03~2025.02 | 인하공업전문대학 컴퓨터정보공학과 | 4.01 / 4.5</span>
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
        <div class="skill-info">
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

      <p>What is Lorem Ipsum?
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

Why do we use it?
It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).


Where does it come from?
Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.

      </p>
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