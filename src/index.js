document.addEventListener('DOMContentLoaded', () => {
  const certificadosWrapper = document.querySelector('.certificados-wrapper');

  const handleScroll = () => {
    const wrapper = document.querySelector('.certificados-wrapper');
    if (wrapper) {
      const rect = wrapper.getBoundingClientRect();
      console.log('Certificados rect:', rect);
    } else {
      console.warn('certificadosWrapper NO existe (scroll ignorado)');
    }
  };

  document.addEventListener('scroll', handleScroll);

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
