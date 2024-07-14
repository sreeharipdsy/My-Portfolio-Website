document.addEventListener('DOMContentLoaded', function () {
    const modalTriggers = document.querySelectorAll('.modal-trigger');
    const modals = document.querySelectorAll('.modal');
    const fullImageModal = document.getElementById('fullImageModal');
    const fullImage = document.getElementById('fullImage');
    const closes = document.querySelectorAll('.close');

    modalTriggers.forEach(trigger => {
        trigger.addEventListener('click', function (event) {
            event.preventDefault();
            const modalId = this.getAttribute('data-modal');
            document.getElementById(modalId).style.display = 'block';
            
        });
    });

    modals.forEach(modal => {
        modal.addEventListener('click', function (event) {
            if (event.target === this) {
                this.style.display = 'none';
            }
        });

        const images = modal.querySelectorAll('.modal-image');
        images.forEach(image => {
            image.addEventListener('click', function () {
                fullImage.src = this.src;
                fullImageModal.style.display = 'block';
            });
        });
    });

    closes.forEach(close => {
        close.addEventListener('click', function () {
            this.parentElement.parentElement.style.display = 'none';
        });
    });

    fullImageModal.addEventListener('click', function (event) {
        if (event.target === this || event.target === fullImage) {
            this.style.display = 'none';
        }
    });
});
