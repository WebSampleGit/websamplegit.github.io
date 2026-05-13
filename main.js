// ============ NAV SCROLL ============
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
});

// ============ REVEAL ON SCROLL ============
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -50px 0px' });
reveals.forEach(el => observer.observe(el));

// ============ GALLERY FILTERS ============
document.querySelectorAll('.filter').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});

// ============ FORM TO WHATSAPP ============
document.getElementById('quoteForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const f = e.target;
  const nome = f.nome.value.trim();
  const tel = f.tel.value.trim();
  const servico = f.servico.value;
  const msg = f.msg.value.trim();
  const text = `Olá! Sou ${nome}.%0AContato: ${tel}%0AServiço: ${servico}%0A%0A${msg ? 'Detalhes: ' + msg : 'Gostaria de um orçamento.'}`;
  window.open(`https://wa.me/5511989334712?text=${text}`, '_blank');
});

// ============ TESTIMONIALS CAROUSEL ============
(function(){
  const track = document.getElementById('testimonialsTrack');
  const dotsWrap = document.getElementById('testimonialsDots');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  if(!track || !dotsWrap) return;

  const items = Array.from(track.children);
  const total = items.length;

  function getVisible(){
    if (window.innerWidth <= 1024) return 1;
    return 3;
  }

  let visible = getVisible();
  let pages = Math.max(1, total - visible + 1);
  let current = 0;
  let autoTimer = null;
  const AUTO_MS = 5000;

  function buildDots(){
    dotsWrap.innerHTML = '';
    pages = Math.max(1, total - visible + 1);
    for (let i = 0; i < pages; i++){
      const b = document.createElement('button');
      b.className = 'dot-btn' + (i === 0 ? ' active' : '');
      b.setAttribute('aria-label', `Ir para depoimento ${i+1}`);
      b.addEventListener('click', () => goTo(i, true));
      dotsWrap.appendChild(b);
    }
  }

  function update(){
    const gap = 24;
    const trackWidth = track.parentElement.clientWidth - 16;
    const itemWidth = (trackWidth - gap * (visible - 1)) / visible;
    items.forEach(it => {
      it.style.flex = `0 0 ${itemWidth}px`;
    });
    const offset = current * (itemWidth + gap);
    track.style.transform = `translateX(-${offset}px)`;

    Array.from(dotsWrap.children).forEach((d, i) => {
      d.classList.toggle('active', i === current);
    });

    prevBtn.disabled = false;
    nextBtn.disabled = false;
  }

  function goTo(i, userAction){
    current = ((i % pages) + pages) % pages;
    update();
    if (userAction) restartAuto();
  }

  function next(userAction){ goTo(current + 1, userAction); }
  function prev(userAction){ goTo(current - 1, userAction); }

  function startAuto(){
    stopAuto();
    autoTimer = setInterval(() => next(false), AUTO_MS);
  }
  function stopAuto(){
    if (autoTimer) clearInterval(autoTimer);
  }
  function restartAuto(){
    stopAuto();
    startAuto();
  }

  prevBtn.addEventListener('click', () => prev(true));
  nextBtn.addEventListener('click', () => next(true));

  const section = track.closest('.testimonials-wrap');
  section.addEventListener('mouseenter', stopAuto);
  section.addEventListener('mouseleave', startAuto);

  let touchStartX = 0;
  let touchDeltaX = 0;
  track.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX;
    stopAuto();
  }, { passive: true });
  track.addEventListener('touchmove', (e) => {
    touchDeltaX = e.touches[0].clientX - touchStartX;
  }, { passive: true });
  track.addEventListener('touchend', () => {
    if (Math.abs(touchDeltaX) > 50){
      if (touchDeltaX < 0) next(true);
      else prev(true);
    }
    touchDeltaX = 0;
    startAuto();
  });

  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      const newVisible = getVisible();
      if (newVisible !== visible){
        visible = newVisible;
        current = 0;
        buildDots();
      }
      update();
    }, 150);
  });

  buildDots();
  update();
  startAuto();
})();
