// Lightbox Functionality
function openLightbox(title) {
    const lightbox = document.getElementById('lightbox');
    const lightboxTitle = document.getElementById('lightbox-title');
    const lightboxImg = document.getElementById('lightbox-img');
    
    lightboxTitle.textContent = title;
    lightboxImg.src = `https://via.placeholder.com/600x800?text=${title}`;
    lightbox.style.display = 'flex';
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
}