<template>
  <div>
    <header :class="{ scrollDown: isScrollDown }" class="header">
      <h1 v-typing="'책임감 있는 데이터 분석가 고태경입니다.'" data-delay="200" class="typing-text"></h1>
    </header>
    <main class="main-content">
      <div class="intro-section">
        <img src="@/assets/증명사진.jpg" alt="Profile Image" class="profile-image">
        <div class="intro-text">
          <h2>| INTRODUCTION</h2>
          <div class="contact-info">
            <font-awesome-icon :icon="['fas', 'venus']" />
            <p>고태경</p>
          </div>

          <div class="contact-info">
            <font-awesome-icon :icon="['fas', 'cake-candles']" />
            <p>2004.02.25 (만 20세)</p>
          </div>
          <div class="contact-info">
            <font-awesome-icon :icon="['fas', 'phone']" />
            <p>010-2987-5082</p>
          </div>
          <div class="contact-info">
            <font-awesome-icon :icon="['fas', 'envelope']" />
            <p>202244042@itc.ac.kr</p>
          </div>
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