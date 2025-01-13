// Select all images in the gallery
const galleryImages = document.querySelectorAll('#gallery-container img');
const images = Array.from(galleryImages); // Convert nodeList to an array

// Select all elements for lightbox
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

let currentIndex = 0; //Track the currently displayed image

// Open lightbox and synchronize currentIndex when an image is clicked
images.forEach((image, index) => {
    image.addEventListener('click', () => {
        currentIndex = index;
        lightboxImg.src = image.src;
        lightbox.classList.add('visible');
    });
});

// Close lightbox when clicking outside the content
lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) {
    lightbox.classList.remove('visible');
    }

});

function moveImageRight() {
    currentIndex = (currentIndex + 1) % images.length;
    lightboxImg.src = images[currentIndex].src;
};

function moveImageLeft() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    lightboxImg.src = images[currentIndex].src;
};

// show next image in the lightbox
document.getElementById('next').addEventListener('click', () => {
    moveImageRight();
});

// show previous image in the lightbox
document.getElementById('prev').addEventListener('click', () => {
    moveImageLeft();
});

// Keyboard navigation for the lightbox
document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
        moveImageRight();
    }
    else if (event.key === 'ArrowLeft') {
        moveImageLeft();
    }
    else if (event.key === 'Escape') {
        lightbox.classList.remove('visible');
    }
});