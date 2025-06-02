window.addEventListener('load', function () {
  if (window.emailjs) {
    emailjs.init('Hj3sC7fOFKJuPj-GF'); // Your public key
  }

  const form = document.getElementById('model-form');
  const messageBox = document.getElementById('success01');

  if (!form) {
    console.error('Form element not found');
    return;
  }

  console.log('Form submit listener attached');

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log('Form submitted, sending email...');

    emailjs.sendForm('service_qf4krf9', 'template_bnefqjt', this)
      .then(() => {
        messageBox.innerHTML = `
          <div class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
            <strong class="font-bold">Success!</strong>
            <span class="block sm:inline">Votre message a été envoyé avec succès !</span>
          </div>
        `;
        form.reset();

        // Remove message after 5 seconds
        setTimeout(() => {
          messageBox.innerHTML = '';
        }, 5000);
      })
      .catch((error) => {
        messageBox.innerHTML = `
          <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
            <strong class="font-bold">Erreur!</strong>
            <span class="block sm:inline">Une erreur s'est produite lors de l'envoi du message.</span>
          </div>
        `;

        console.error(error);

        // Remove message after 5 seconds
        setTimeout(() => {
          messageBox.innerHTML = '';
        }, 3000);
      });
  });
});
