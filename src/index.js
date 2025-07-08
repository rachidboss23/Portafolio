// src/index.js - 

document.addEventListener('DOMContentLoaded', () => {
  const certificadosWrapper = document.querySelector('.certificados-wrapper');

  const handleScroll = () => {
    if (certificadosWrapper) {
      const rect = certificadosWrapper.getBoundingClientRect();
      console.log('Certificados rect:', rect);
    }
  };

  if (certificadosWrapper) {
    document.addEventListener('scroll', handleScroll);
  }

  const prevBtn = document.getElementById('prevCert');
  const nextBtn = document.getElementById('nextCert');

  if (prevBtn && certificadosWrapper) {
    prevBtn.addEventListener('click', () => {
      certificadosWrapper.scrollBy({ left: -200, behavior: 'smooth' });
    });
  }

  if (nextBtn && certificadosWrapper) {
    nextBtn.addEventListener('click', () => {
      certificadosWrapper.scrollBy({ left: 200, behavior: 'smooth' });
    });
  }
});
