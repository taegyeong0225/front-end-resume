// src/scripts/app.js

import { handleScroll, scrollToSection } from './scroll'; // 스크롤 관련 함수들
import { typingEffect } from './typing'; // 타이핑 효과 함수

export default {
  name: 'App',
  data() {
    return {
      isScrollDown: false,
      prevScrollTop: 0,
      currentTab: 0,
      tabs: ['ABOUT', 'SKILLS', '수상내역', '교내외 활동내역', '자격증', '프로젝트'],
      navItems: [
        { id: 'section-0', name: 'ABOUT' },
        { id: 'section-1', name: 'SKILLS' },
        { id: 'section-2', name: '수상내역' },
        { id: 'section-3', name: '교내외 활동내역' },
        { id: 'section-4', name: '자격증' },
        { id: 'section-5', name: '프로젝트' }
      ]
    };
  },
  mounted() {
    // TypeHangul을 사용하여 타이핑 효과를 적용
    if (window.TypeHangul) {
      window.TypeHangul.type('#target', {
        speed: 100,  // 타이핑 속도
        cursor: true  // 커서 활성화
      });
    }
    // 추가적으로 typingEffect를 사용
    typingEffect();
  },  
  methods: {
    tabnav(index) {
      this.currentTab = index;
      this.scrollToSection(this.navItems[index].id);
    },
    scrollToSection(id) {
      scrollToSection(id);
    },
    handleScroll() {
      const { isScrollDown, nextScrollTop } = handleScroll(this.prevScrollTop);
      this.isScrollDown = isScrollDown;
      this.prevScrollTop = nextScrollTop;
    }
  }
};
