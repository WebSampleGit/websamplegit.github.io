// script.js - interações: modal, formulário, smooth scroll, small analytics simulada
document.addEventListener('DOMContentLoaded', function () {
  // Elements
  const buyBtns = document.querySelectorAll('#buyBtn, #buyBtn2, #buyBtn3');
  const modal = document.getElementById('purchase-modal');
  const modalClose = modal.querySelector('.modal-close');
  const modalCancel = modal.querySelector('.modal-cancel');
  const purchaseForm = document.getElementById('purchaseForm');
  const purchaseSuccess = document.getElementById('purchase-success');
  const yearEl = document.getElementById('year');

  // Set current year
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // // Open modal
  // buyBtns.forEach(btn => {
  //   btn.addEventListener('click', () => openModal());
  // });

  // function openModal() {
  //   modal.setAttribute('aria-hidden', 'false');
  //   // focus for accessibility
  //   modal.querySelector('input, button').focus();
  //   document.body.style.overflow = 'hidden';
  // }

  // function closeModal() {
  //   modal.setAttribute('aria-hidden', 'true');
  //   document.body.style.overflow = '';
  //   // Reset form visuals
  //   purchaseForm.classList.remove('hidden');
  //   purchaseSuccess.classList.add('hidden');
  //   purchaseForm.reset();
  // }

  modalClose.addEventListener('click', closeModal);
  modalCancel.addEventListener('click', closeModal);

  // close modal when clicking outside panel
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  // Form validation & simulated purchase flow
  purchaseForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = purchaseForm.name.value.trim();
    const email = purchaseForm.email.value.trim();

    if (!name || !validateEmail(email)) {
      alert('Por favor, insira nome e e-mail válidos.');
      return;
    }

    // show success state; in real site you would call your payment gateway here
    purchaseForm.classList.add('hidden');
    purchaseSuccess.classList.remove('hidden');

    // Simulate sending lead to server (replace with actual fetch)
    console.log('Compra simulada:', { name, email, product: 'Ebook - Segredo dos Cuidados com a Pele', price: 47.90 });

    // Optional: redirect to payment or show payment widget...
    // For now we keep the modal open with success message.
  });

  // Simple email validation
  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '') return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Accessibility: close on Escape
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      if (modal.getAttribute('aria-hidden') === 'false') closeModal();
    }
  });
});
