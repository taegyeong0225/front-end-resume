<template>
  <div>
    <!-- header -->
    <header :class="{ scrollDown: isScrollDown }" class="header">
      <h1 class="typing-text">
        <span v-typing="'ABCDEFG'" data-delay="200"></span>
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

      <h2 class="section-title">자기소개서</h2>

      <!-- 탭 추가 시작 -->
      <div id="tabs">
        <ul class="tab-menu">
          <li v-for="(tab, index) in tabs" 
              v-bind:key="index"
              v-bind:class="{ active: currentTab === index }">
            <a href="#" v-on:click.prevent="tabnav(index)">{{ tab }}</a>
          </li>
        </ul>

        <div class="tab-content">
          <div v-show="currentTab === 0">
            저의 항상 적극적이고 타인을 돕는 것을 좋아하는 학생이었습니다. 
            학창시절에 전학 온 친구에게 먼저 다가가서 친구가 학교 생활을 잘 할 수 있도록 돕는 것으로 시작하였습니다.
            대외에서는 대학생 기획단을 통해 사회 문제를 주제로 프로그램을 기획하는 활동을 진행하였습니다. 
            청소년들의 직업 체험 기회 마련의 기회와 결부하여 현직 기자 분을 초청하여 기사 작성법과 같은 특강을 듣고, 이를 바탕으로 기사를 작성하는 프로그램을 기획 및 운영하였습니다.
            대내 활동으로 3년간 반대표를 도맡아오며 학과 학생들을 위해 봉사할 수 있도록 하였습니다. 〈1 학년 때 낮은 성적을 극복하기 위해 교내 튜터링 등에 참여하여 3점대 중반의 성적에서 4점대의 성적으로 성장할 수 있었습니다. 
          </div>
          <div v-show="currentTab === 1">
            저의 장점은 실행력과 리더십입니다. 
            먼저 리더십을 갖고 주변 사람들을 위해 노력했던 경험이 있습니다.
            학창 시절에는 서구에서 운영하는 청소년 운영 위원회에서 2 년간 정책분과장을 맡아 관내 욕구조사를 진행하였던 기억이 있으며, 이 경험을 바탕으로 전국봉사대회에서 동상을 수상할 수 있었습니다.
            욕구조사를 통해 서구 관내 청소년들의 욕구를 들어보았습니다. 학업으로 지친 청소년들에게 놀거리가 부족하다는 점을 많은 청소년들이 문제로 삼았고, 프로그램기획분과와 협업하여 청소년축제 'YOUTH DAY'를 기획 및 운영하였습니다.
            이 경험을 바탕으로 전국청소년자원봉사대회에서 동상을 수상할 수 있었습니다. 
            제 성격의 단점은 부탁을 거절하는 것을 잘 못한다는 점입니다. 
            인간 관계에 있어 신경을 많이 쓰는 성격을 가지고 있어 상대의 부탁을 거절하는 것이 부담스럽게 다가왔습니다. 이러한 부분을 보완하기 위해 강정적인 관점보다 이성적 인 관정에서 바라보려 노력하였습니다. 
            예를 들어 해당 부탁을 들어주지 않은 것이 타인과의 관계에서 악영향을 끼치 지 않을 지가 아닌 이 부탁을 들어줬을 때 나는 내가 해야 할 업무에 영향이 가지 않는지 다른 타인에게 부정적인 영향 을 주는 부탁인지와 같은 기준을 정해 판단하여 극복하였습니다. 
          </div>
          <div v-show="currentTab === 2">
            대학교 2학년 때 수강했던 데이터베이스 및 ORACLE PL/SQL 과목을 통해 데이터 속에서 필요한 정보를 추출하고, 여러 테이블을 조합해 의미 있는 결과를 도출하는 기술을 습득했습니다. 
            관계형 데이터베이스에서 필요한 정보를 추출하고, 필요한 정보를 추출하기 위해 여러 테이블들을 JOIN 하는 과정에서 흥미를 느꼈습니다. 테이블들을 통해 테이블을 추출하는 작업에서 나아가 보다 직관적으로 시각적으로 표현하는 능력을 기르고 싶어 3학년 1 학기에 알기 쉬운 데이터 분석 기초라는 강의를 수강하였습니다. 
            이를 통해 POWER Bl, 아나콘다를 사용하는 법을 학습할 수 있었습니다. 대학생 기획단에서 환경 문제에 관련하여 관심을 가졌던 것을 토대로 2 학년 1 학기 SW 프로젝트에서 냉장고 재료관리 시스템을 개발하였습니다. 
            사용되지 않은 식재료가 보관만 되어있다가 폐기되는 것에 대한 문제를 인식한 파이썬 라이브러리 것을 바탕으로 기획을 진행하였습니다. 알림 기능을 수행하기 위해 파이썬 라이브러리 APScheduler (backgroundscheduler)를 학습하여 이용하였습니다. 
            또한 수업 내용을 정리하고 추가적으로 궁금한 것을 기록하는 기술 블로그를 운영 중에 있습니다. 이를 통해 학습한 내용을 직접 글로 남에게 설명하는 시간을 가지는 경험을 가질 수 있었습니다. 
            교내에서는 선후배 간 튜터링, 유학생 멘토링을 통해 데이터베이스 등 교과 과목에 대한 지식을 가르쳐주는 활동을 하였고, 이를 통해 배운 개념들에 대해 후배 및 동기들에게 지식을 나누었습니다. 
            또한 3 년간 반대표를 도맡아 공지사항 전달이나 학과 일정 관리 등으로 학과 사람들에게 도움을 주기 위해 노력하였습니다. 또한 유학생분들이나 학과의 적응이 어려운 학우와 함께 공부하는 시간을 갖는 등 모든 학우들의 컴퓨터공학부로서 성장할 수 있도록 도왔습니다. 
          </div>
          <div v-show="currentTab === 3">
            저의 경험을 돌이켜보며, 리더로서의 역할을 수행하면서 다양한 의사결정 상황에서 의견을 제시하고 타인을 설득할 때 객관적인 사실을 기반한 근거가 큰 도움이 된다고 생각하게 되었습니다. 
            추상적이거나 감정적인 내용이 당긴 근거는 타인을 설득하는 것에 있어 주관적인 의견 차이가 있을 수 있지만, 객관적인 근거는 그렇지 않기 때문입니다. 
            데이터를 시각적으로 표현하는 것은 직관적으로 근거를 제공하며, 이는 팀원들과의 커뮤니케이션을 명확하게 하고, 효과적인 의사결정을 이끌어낼 수 있게 해준다고 생각합니다.
            대학에서 관련 과목을 수강하고 프로젝트를 진행했던 학문적 배경과 실무 경험을 바탕으로, 귀사의 데이터 분석가로서 제 역량을 발휘하여 조직의 의사결정 과정에 기여하고 싶습니다.
            해당 과목을 통해 데이터를 통해 유의미한 의미를 도출해내는 것에 대한 흥미가 생기게 되었고, 귀사의 데이터 분석가로서 제 역량을 발휘하여 조직의 핵심 가치와 목표 달성에 기여하고자 지원하게 되었습니다. 
            저는 데이터 분석가로서 귀사에 기여하고자 하는 몇 가지 구체적인 포부를 가지고 있습니다. 첫째, 고급 분석 기법과 최신 데이터 시각화 도구를 활용하여, 의사결정 과정에서 데이터 기반의 통찰을 제공하는 것입니다. 
            둘째, 교육 및 멘토링 프로그램을 통해 다른 팀원들도 데이터를 이해하고 활용할 수 있도록 지원하려고 합니다. 
            마지막으로, 지속적인 학습과 기술 향상을 통해 데이터 분석 분야에서의 최신 동향을 적극적으로 반영하고자 합니다. 저의 능력과 열정을 바탕으로 귀사의 미래 성장에 기여하며, 함께 발전해 나가는 과정에서 제 경력도 함께 성장시키고 싶습니다. 
          </div>
        </div>
      </div>
      <!-- 탭 추가 끝 -->

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
