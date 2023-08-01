function toggleNav() {
    const sidebar = document.querySelector('.sidebar');
    const sidebarOverlay = document.getElementById('sidebar-overlay');
    sidebar.classList.toggle('active');
    sidebarOverlay.classList.toggle('active');
  }
  
  function closeNav() {
    const sidebar = document.querySelector('.sidebar');
    const sidebarOverlay = document.getElementById('sidebar-overlay');
    sidebar.classList.remove('active');
    sidebarOverlay.classList.remove('active');
  }
  
  window.addEventListener('click', (e) => {
    const sidebar = document.querySelector('.sidebar');
    if (e.target === sidebar) {
      closeNav();
    }
  });
  
  function checkScreenWidth() {
    const toggleButton = document.querySelector('.navbar-toggle');
    const menu = document.getElementById('menu');
    if (window.innerWidth <= 1200) {
      toggleButton.style.display = 'block';
      menu.style.display = 'none';
    } else {
      toggleButton.style.display = 'none';
      menu.style.display = 'flex';
    }
  }
  
  window.addEventListener('resize', checkScreenWidth);
  checkScreenWidth();

  // slider
  const items = document.querySelector('.items');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const itemWidth = document.querySelector('.item').clientWidth;
let currentSlide = 0;

function goToSlide(slideIndex) {
  items.style.transform = `translateX(-${slideIndex * itemWidth}px)`;
  currentSlide = slideIndex;
}

prevBtn.addEventListener('click', () => {
  if (currentSlide > 0) {
    goToSlide(currentSlide - 1);
  }
});

nextBtn.addEventListener('click', () => {
  if (currentSlide < items.children.length - 1) {
    goToSlide(currentSlide + 1);
  }
});