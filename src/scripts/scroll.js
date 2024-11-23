export function handleScroll(prevScrollTop) {
    const nextScrollTop = window.pageYOffset || 0;
    let isScrollDown = false;
    if (nextScrollTop > prevScrollTop) {
      isScrollDown = true;
    } else if (nextScrollTop < prevScrollTop) {
      isScrollDown = false;
    }
    return { isScrollDown, nextScrollTop };
  }
  
  export function scrollToSection(id) {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
  