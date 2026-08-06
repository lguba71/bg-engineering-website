(() => {
  const forms = document.querySelectorAll('[data-static-form]');

  forms.forEach((form) => {
    form.addEventListener('submit', (event) => {
      event.preventDefault();

      if (typeof form.reportValidity === 'function' && !form.reportValidity()) {
        return;
      }

      const formType = form.getAttribute('data-static-form') || 'form';
      const thankYouUrl = form.getAttribute('data-thank-you') || '/koszonjuk/';

      try {
        sessionStorage.setItem(
          'bgEngineeringLastFormDemo',
          JSON.stringify({
            formType,
            submittedAt: new Date().toISOString(),
            note: 'Static MVP only. No data was sent to a server.'
          })
        );
      } catch (_error) {
        // Session storage is optional. The redirect should still work.
      }

      window.location.assign(thankYouUrl);
    });
  });
})();
