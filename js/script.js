  document.addEventListener("DOMContentLoaded", function () {
    // Animação de digitação
    const title = document.getElementById("typing-title");
    title.textContent = "Mounjaro de Pobre";

    setTimeout(() => {
      title.classList.add("no-cursor");
    }, 3200);

    // Animação de fade-up ao rolar
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    }, { threshold: 0.3 });

    document.querySelectorAll('.fade-up').forEach(el => {
      observer.observe(el);
    });

    // Expansão e colapso das perguntas frequentes
    const faqButtons = document.querySelectorAll('.faq-question');
    faqButtons.forEach(button => {
      button.addEventListener('click', () => {
        const answer = button.nextElementSibling;
        const isOpen = answer.style.maxHeight;

        // Fecha todas as respostas
        document.querySelectorAll('.faq-answer').forEach(a => {
          a.style.maxHeight = null;
        });

        // Abre a resposta clicada, se ainda não estiver aberta
        if (!isOpen || isOpen === "0px") {
          answer.style.maxHeight = answer.scrollHeight + "px";
        }
      });
    });
  });