// /Users/gotaegyeong/Desktop/front-end-resume/src/scripts/app.js

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
          title: "My Portfolio",
          summary: "Vue.js로 만든 개인 포트폴리오 웹사이트",
          image: "/images/vue.png",
          techStack: [
            "https://img.shields.io/badge/Vue.js-4FC08D?style=for-the-badge&logo=vue.js&logoColor=white",
            "https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"
          ],
          url: "https://github.com/taegyeong0225/front-end-resume"
        },
        {
          title: "jango",
          summary: "Python django를 이용한 냉장료 재료 관리 웹 사이트",
          image: "/images/django.jpg",
          techStack: [
            "https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white",
            "https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=white",
            "https://img.shields.io/badge/BeautifulSoup-0084B3?style=for-the-badge&logo=python&logoColor=white",
            "https://img.shields.io/badge/Ajax-005571?style=for-the-badge&logo=javascript&logoColor=white",
          ],
          url: "https://github.com/taegyeong0225/django_calender"
        },
        {
          title: "환전 은행 시스템",
          summary: "java swing을 이용한 환전 은행 시스템",
          image: "/images/swing.png",
          techStack: [
            "https://img.shields.io/badge/Java-007396?style=for-the-badge&logo=java&logoColor=white", // Java 배지
            "https://img.shields.io/badge/Swing-F29111?style=for-the-badge&logo=java&logoColor=white" // Swing을 추가적으로 강조
          ],
          url: "https://github.com/taegyeong0225/java-final-project-bank"
        },
        {
          title: "오늘 뭐 먹지",
          summary: "학교 주변 맛집 추천 어플",
          image: "/images/android.png",
          techStack: [
            "https://img.shields.io/badge/Java-007396?style=for-the-badge&logo=java&logoColor=white", // Java 배지
            "https://img.shields.io/badge/Android-3DDC84?style=for-the-badge&logo=android&logoColor=white", // Android 배지
            "https://img.shields.io/badge/Google%20Maps%20API-4285F4?style=for-the-badge&logo=google-maps&logoColor=white" // Google Maps API 배지
          ]
          ,
          url: "https://github.com/taegyeong0225/inha-food-review-app"
        }
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
