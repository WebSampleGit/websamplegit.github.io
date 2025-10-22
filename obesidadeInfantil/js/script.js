document.addEventListener("DOMContentLoaded", function () {
    // Animação de digitação no título
    const title = document.getElementById("typing-title");
    title.textContent = "Guia contra obesidade infantil";

    setTimeout(() => {
      title.classList.add("no-cursor");
    }, 3000);

    // Animação de fade ao rolar
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
        else entry.target.classList.remove('visible');
      });
    }, { threshold: 0.3 });

    document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

    // Expansão das FAQs
    document.querySelectorAll('.faq-question').forEach(btn => {
      btn.addEventListener('click', () => {
        const ans = btn.nextElementSibling;
        const open = ans.style.maxHeight;
        document.querySelectorAll('.faq-answer').forEach(a => a.style.maxHeight = null);
        if (!open || open === "0px") ans.style.maxHeight = ans.scrollHeight + "px";
      });
    });
  });