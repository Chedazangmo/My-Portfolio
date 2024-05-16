const thumbnailsContainer = document.querySelector('.thumbnails');
const lightbox = document.querySelector('.lightbox');
const lightboxImg = document.querySelector('.lightbox-img');
const caption = document.querySelector('.caption');
const closeBtn = document.querySelector('.close');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

// Generate thumbnails
photos.forEach((photo, index) => {
  const thumbnail = document.createElement('img');
  thumbnail.src = photo;
  thumbnail.classList.add('thumbnail');
  thumbnail.setAttribute('data-index', index);
  thumbnail.addEventListener('click', () => openLightbox(index));
  thumbnailsContainer.appendChild(thumbnail);
});

function openLightbox(index) {
  lightbox.style.display = 'block';
  lightboxImg.src = photos[index];
  caption.textContent = `Photo ${index + 1} of ${photos.length}`;

  closeBtn.addEventListener('click', closeLightbox);
  document.addEventListener('keydown', handleKeyboard);
  prevBtn.addEventListener('click', () => navigate(-1));
  nextBtn.addEventListener('click', () => navigate(1));
}

function closeLightbox() {
  lightbox.style.display = 'none';
  closeBtn.removeEventListener('click', closeLightbox);
  document.removeEventListener('keydown', handleKeyboard);
  prevBtn.removeEventListener('click', () => navigate(-1));
  nextBtn.removeEventListener('click', () => navigate(1));
}

function handleKeyboard(event) {
  if (event.key === 'Escape') {
    closeLightbox();
  } else if (event.key === 'ArrowLeft') {
    navigate(-1);
  } else if (event.key === 'ArrowRight') {
    navigate(1);
  }
}

function navigate(direction) {
  const currentIndex = parseInt(lightboxImg.getAttribute('data-index'));
  let newIndex = currentIndex + direction;
  if (newIndex < 0) {
    newIndex = photos.length - 1;
  } else if (newIndex >= photos.length) {
    newIndex = 0;
  }
  lightboxImg.src = photos[newIndex];
  lightboxImg.setAttribute('data-index', newIndex);
  caption.textContent = `Photo ${newIndex + 1} of ${photos.length}`;
}

// Close lightbox when clicking outside the image
window.addEventListener('click', (event) => {
  if (event.target === lightbox) {
    closeLightbox();
  }
});