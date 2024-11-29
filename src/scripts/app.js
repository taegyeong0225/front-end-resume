// app.js

import { handleScroll, scrollToSection } from './scroll';
import { typingEffect } from './typing';

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
        { id: 'section-2', name: 'PORTFOLIO' },
        { id: 'section-3', name: 'PROJECT' },
      ],
      projects: [
        {
          title: "Vue.js Portfolio",
          summary: "Vue.js로 만든 개인 포트폴리오 웹사이트",
          image: "https://via.placeholder.com/300",
          techStack: [
            "https://img.shields.io/badge/Vue.js-4FC08D?style=for-the-badge&logo=vue.js&logoColor=white",
            "https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black",
          ],
        },
        {
          title: "Python Web Scraping",
          summary: "Python을 이용한 웹 크롤링 프로젝트",
          image: "https://via.placeholder.com/300",
          techStack: [
            "https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white",
            "https://img.shields.io/badge/BeautifulSoup-0084B3?style=for-the-badge&logo=python&logoColor=white",
          ],
        },
        {
          title: "React Dashboard",
          summary: "React를 이용한 대시보드 프로젝트",
          image: "https://via.placeholder.com/300",
          techStack: [
            "https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white",
            "https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=redux&logoColor=white",
          ],
        },
        {
          title: "Django REST API",
          summary: "Django로 구현한 RESTful API 서버",
          image: "https://via.placeholder.com/300",
          techStack: [
            "https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=white",
            "https://img.shields.io/badge/REST-FF5733?style=for-the-badge&logo=rest&logoColor=white",
          ],
        },
      ],
    };
  },
  mounted() {
    console.log("project content: ", this.projects);

    this.$nextTick(() => {
      if (window.TypeHangul) {
        setTimeout(() => {
          window.TypeHangul.type('#target', {
            speed: 100,
            cursor: true,
          });
        }, 200);
      }
      typingEffect();
    });
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
    },
  },
};
