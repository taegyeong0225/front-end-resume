<template>
  <div>
    <!-- 사이드바 -->
    <div class="sidebar">
      <div class="profile">
        <img src="@/assets/증명사진.jpg" alt="Profile Image" class="profile-image" />
        <h2>고태경</h2>
        <p>Data Analyst</p>
      </div>
      <nav class="nav">
        <ul>
          <li v-for="(item, index) in navItems" :key="index">
            <a href="#" @click.prevent="scrollToSection(item.id)">
              {{ item.name }}
            </a>
          </li>
        </ul>
      </nav>
    </div>
    <!-- main content -->
    <main class="main-content">
      <!-- about -->
      <div id="section-0" class="section">
        <span id="target" class="introduce typing">안녕하세요, 데이터 분석가를 희망하는 고태경입니다.</span>
        <span class="cursor typing">|</span> 
        <div class="contact-info icon">
          <font-awesome-icon :icon="['fas', 'cake-candles']" />
          <span>2004.02.25 (만 21세)</span>
        </div>
        <div class="contact-info icon">
          <font-awesome-icon :icon="['fas', 'phone']" />
          <span>010-2987-5082</span>
        </div>
        <div class="contact-info icon">
          <font-awesome-icon :icon="['fas', 'envelope']" />
          <span>202244042@itc.ac.kr</span>
        </div>
        <div class="contact-info icon">
          <font-awesome-icon :icon="['fas', 'house']" />
          <span>인천광역시 서구 마전동</span>
        </div>
        <div class="contact-info icon">
          <font-awesome-icon :icon="['fas', 'school']" />
          <span>인하공업전문대학 컴퓨터정보공학과 (3년제 전문학사 졸업)</span>
          <span>인하공업전문대학 컴퓨터정보공학과 전공심화 (학사과정 졸업예정)</span>
        </div>
        <div class="education">
          <p>4.08 / 4.5 &nbsp; | &nbsp;2022.02 ~ 2025.02</p>
          <p>4.45 / 4.5 &nbsp; | &nbsp;2025.02 ~ </p>
        </div>
        <div class="contact-icon">
          <a href="https://github.com/taegyeong0225" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
              <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/>
            </svg>
          </a>
        </div>
        <div class="contact-icon">
          <a href="https://www.linkedin.com/in/%ED%83%9C%EA%B2%BD-%EA%B3%A0-4902aa2a2/" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/>
            </svg>
          </a>
        </div>
      </div>
      <!-- skills -->
      <div id="section-1" class="section">
        <div class="intro-text">
          <h2 class="section-title">SKILLS</h2>
        </div>

        <h2>main skills</h2>
        <!-- Skills Table -->
        <table class="skills-table">
            <tbody>
              <!-- Python Skill -->
              <tr>
                <td><img src="https://static.cdnlogo.com/logos/p/3/python.svg" width="50"></td>
                <td>Python</td>
                <td>
                  <p>
                    웹 크롤링을 통한 데이터 수집, Matplotlib, Seaborn 등 라이브러리를 통한 데이터 시각화 <br>
                    django 프레임워크를 통한 CRUD 구현 및 ajax를 이용한 비동기식 처리
                  </p>
                  <progress class="progress" value="80" max="100"></progress>
                  <span class="progress-text">80%</span>
                </td>
              </tr>

              <!-- MySQL Skill -->
              <tr>
                <td><img src="https://www.vectorlogo.zone/logos/mysql/mysql-official.svg" alt="mysql" width="60"/></td>
                <td>MySQL</td>
                <td>
                  <p>DDL/DML/DCL문 작성</p>
                  <progress class="progress" value="80" max="100"></progress>
                  <span class="progress-text">80%</span>
                </td>
              </tr>

              <!-- Oracle Skill -->
              <tr>
                <td><img src="https://seekvectorlogo.com/wp-content/uploads/2017/12/oracle-vector-logo.png" height="45"/></td>
                <td>Oracle</td>
                <td>
                  <p>DDL/DML/DCL 작성 <br> PL/SQL 작성</p>
                  <progress class="progress" value="75" max="100"></progress>
                  <span class="progress-text">75%</span>
                </td>
              </tr>

              <!-- Power BI Skill -->
              <tr>
                <td><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/New_Power_BI_Logo.svg/600px-New_Power_BI_Logo.svg.png?20210102182532" width="60"/></td>
                <td>Power BI</td>
                <td>
                  <p>쿼리 편집기를 통해 요구 사항에 맞게 데이터를 전처리 및 시각화</p>
                  <progress class="progress" value="70" max="100"></progress>
                  <span class="progress-text">70%</span>
                </td>
              </tr>

              <!-- Java Skill -->
              <tr>
                <td><img src="https://static.cdnlogo.com/logos/j/86/java.svg" width="60"></td>
                <td>Java</td>
                <td>
                  <p>spring 프레임워크를 통한 CRUD 구현</p>
                  <progress class="progress" value="75" max="100"></progress>
                  <span class="progress-text">75%</span>
                </td>
              </tr>
            </tbody>
        </table>


        <!-- Framework & Tools Table -->
        <h2>Framework & Tools</h2>
        <table class="skills-table">
            <tbody>
              <!-- Git -->
              <tr>
                <td><img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-ar21.svg" alt="git" width="90" height="50"></td>
                <td>Git</td>
                <td>
                  <p>버전 관리 도구, 분산형 개발 시스템</p>
                  <progress class="progress" value="70" max="100"></progress>
                  <span class="progress-text">70%</span>
                </td>
              </tr>
              <!-- Vue.js -->
              <tr>
                <td><img src="https://www.vectorlogo.zone/logos/vuejs/vuejs-ar21.svg" alt="vue" width="80" height="60"></td>
                <td>Vue.js</td>
                <td>
                  <p>프론트엔드 웹 애플리케이션을 위한 프로그레시브 프레임워크</p>
                  <progress class="progress" value="60" max="100"></progress>
                  <span class="progress-text">60%</span>
                </td>
              </tr>

              <!-- Spring -->
              <tr>
                <td><img src="https://www.vectorlogo.zone/logos/springio/springio-ar21.svg" alt="spring" width="80" height="50"></td>
                <td>Spring</td>
                <td>
                  <p>자바 기반의 엔터프라이즈 애플리케이션 프레임워크</p>
                  <progress class="progress" value="75" max="100"></progress>
                  <span class="progress-text">75%</span>
                </td>
              </tr>

              <!-- Django -->
              <tr>
                <td><img src="https://www.vectorlogo.zone/logos/djangoproject/djangoproject-ar21.svg" alt="spring" width="80" height="50"></td>
                <td>Django</td>
                <td>
                  <p>파이썬 기반의 고급 웹 프레임워크</p>
                  <progress class="progress" value="80" max="100"></progress>
                  <span class="progress-text">80%</span>
                </td>
              </tr>
            </tbody>
        </table>

      </div>
      <!-- portfolio -->
      <div id="section-2" class="section">
        <div class="intro-text">
          <h2 class="section-title">PORTFOLIO</h2>
        </div>

        <h2>수상내역</h2>
        <div class="awards-info">
          <table class="portfolio">
            <thead>
              <tr>
                <th>수상일자</th>
                <th>수상내용</th>
                <th>수여기관</th>
              </tr>
            </thead>
            <tbody>
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
        
        <h2>교내외 활동내역</h2>
        <div class="awards-info">
          <table class="portfolio">
            <thead>
              <tr>
                <th>활동기관</th>
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
                <td>2024.04.01~2024.06.03</td>
                <td>2024 FLY 튜터링(1)</td>
                <td>인하공업전문대학</td>
              </tr>
              <tr>
                <td>2023.04.04~2023.06.03</td>
                <td>2023 SOC 들어오는 노트 공모전</td>
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

        <h2>자격증</h2>
        <div class="awards-info">
          <table class="portfolio">
            <thead>
              <tr>
                <th>자격증명</th>
                <th>발급기관</th>
                <th>취득일</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2023.03.24</td>
                <td>데이터 분석 준전문가 (ADSP)</td>
                <td>한국데이터산업진흥원</td>
              </tr>
              <tr>
                <td>2024.06.18</td>
                <td>정보처리산업기사</td>
                <td>한국산업인력공단</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- project 이력 -->
      <div id="section-3" class="section">
        <div class="intro-text">
          <h2 class="section-title">프로젝트</h2>
          <p class="project-note">상자를 누르면 GitHub로 이동합니다.</p>
        </div>
        <div class="project-info icon">
          <div class="projects">
            
            <!-- v-for로 프로젝트 데이터를 순회 -->
            <a
              v-for="(project, index) in projects"
              :key="index"
              :href="project.url"
              target="_blank"
              class="project-card"
              style="text-decoration: none; color: inherit;"
            >
              <img :src="project.image" alt="Project Image" class="project-image" />
              <div class="project-info">
                <h3 class="project-title">{{ project.title }}</h3>
                <p class="project-summary">{{ project.summary }}</p>
                <div class="tech-stack">
                  <img
                    v-for="(tech, techIndex) in project.techStack"
                    :key="techIndex"
                    :src="tech"
                    class="tech-badge"
                  />
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import appScript from './scripts/app';


export default {
  ...appScript,
};
</script>