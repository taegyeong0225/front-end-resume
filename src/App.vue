<template>
  <div>
    <!-- 디렉티브에 문자열 값을 직접 전달합니다 -->
    <h1 v-typing="'책임감 있는 데이터 분석가 고태경입니다.'" data-delay="200" class="typing-text"></h1>
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
  }
}
</script>

<style>
body {
  background-color: #ffcdcd; /* 전체 배경색 설정 */
}

.typing-text {
  text-align: center; /* 텍스트 중앙 정렬 */
  display: block;
  margin: 0 auto; /* 중앙 정렬 유지, 상단 마진 제거 */
  font-size: 2em; /* 글자 크기 */
  background-color: #ffb3b3; /* 헤더 배경색 */
  padding: 10px; /* 텍스트 주변 여백 */
}
</style>