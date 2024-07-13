document.addEventListener("DOMContentLoaded", function() {
    const openModalLink = document.getElementById('open-modal-link');
    const imageModal = document.getElementById('image-modal');
    const fullViewModal = document.getElementById('full-view-modal');
    const fullViewImage = document.getElementById('full-view-image');
    const closeButtons = document.querySelectorAll('.close');
    const galleryImages = document.querySelectorAll('.gallery-img');

    openModalLink.addEventListener('click', function(event) {
        event.preventDefault();
        imageModal.style.display = 'block';
    });

    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            button.closest('.modal').style.display = 'none';
        });
    });

    window.addEventListener('click', function(event) {
        if (event.target === imageModal) {
            imageModal.style.display = 'none';
        }
        if (event.target === fullViewModal) {
            fullViewModal.style.display = 'none';
        }
    });

    galleryImages.forEach(image => {
        image.addEventListener('click', function() {
            fullViewImage.src = image.src;
            fullViewModal.style.display = 'block';
        });
    });
});
