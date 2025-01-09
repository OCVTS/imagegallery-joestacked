const galleryImages = document.querySelectorAll('#gallery-container img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

galleryImages.forEach(image => {
    image.addEventListener('click', () => {
        lightboxImg.src = image.src;
        lightbox.classList.add('visible');
    })
})

lightbox.addEventListener('click', () => {
    lightbox.classList.remove('visible');
})