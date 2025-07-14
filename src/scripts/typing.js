// src/scripts/typing.js

export function typingEffect(el, binding) {

  const targetElement = document.getElementById('target');
  if (!targetElement) {
    console.error('Target element not found for typing effect.');
    return;
  }
  
    const text = binding.value;
    const delay = parseInt(el.dataset.delay) || 100;  // 타이핑 속도 (기본값 100ms)
    let index = 0;
  
    el.textContent = '';  // 텍스트 초기화
  
    function typeWriter() {
      if (index < text.length) {
        el.textContent += text.charAt(index);
        index++;
        setTimeout(typeWriter, delay);  // 타이핑 속도에 맞게 다음 문자 출력
      }
    }
  
    typeWriter();
  }
  