// script.js

const images = [
    { full: 'image1.jpeg', thumbnail: 'image1.jpeg', caption: 'Poppy flowers contain alkaloids like morphine, used for pain relief for centuries.' },
    { full: 'image2.jpeg', thumbnail: 'image2.jpeg', caption: 'Sunflowers have been grown for over 5,000 years for their nutrient-rich seeds and oil.' },
    { full: 'image3.jpeg', thumbnail: 'image3.jpeg', caption: 'Bluebells are known for their vibrant color and symbol of humility.' },
    { full: 'image4.jpeg', thumbnail: 'image4.jpeg', caption: 'Dahlias are prized for their vibrant, intricate blooms and symbolize strength and elegance.' },
    { full: 'image5.jpeg', thumbnail: 'image5.jpeg', caption: 'Daffodils are a symbol of renewal and are one of the first flowers to bloom in spring.' },
  ];
  
  function buildThumbnails() {
    const thumbnailList = document.getElementById('thumbnailList');
    images.forEach((image, index) => {
      const listItem = document.createElement('li');
      const thumbnail = document.createElement('img');
      thumbnail.src = image.thumbnail;
      thumbnail.alt = image.caption;
      thumbnail.classList.add('thumbnail');
      thumbnail.dataset.index = index; // Store the index of the image
      listItem.appendChild(thumbnail);
      thumbnailList.appendChild(listItem);
    });
  }
  
  function changeFeaturedImage(index) {
    const featuredImage = document.getElementById('featuredImage');
    const featuredCaption = document.getElementById('featuredCaption');
    featuredImage.classList.remove('loaded');  // Reset class for fade-in effect
    setTimeout(() => {
      featuredImage.src = images[index].full;
      featuredCaption.textContent = images[index].caption;
      featuredImage.classList.add('loaded');  // Apply fade-in effect
    }, 100); // Small delay to ensure the image change happens after the class reset
  
    // Animate active/inactive thumbnails
    const thumbnails = document.querySelectorAll('.thumbnail');
    thumbnails.forEach(thumbnail => {
      thumbnail.classList.remove('active');
      thumbnail.classList.add('inactive');
    });
    thumbnails[index].classList.add('active');
    thumbnails[index].classList.remove('inactive');
  }
  
  function addThumbnailEventListeners() {
    const thumbnails = document.querySelectorAll('.thumbnail');
    thumbnails.forEach(thumbnail => {
      thumbnail.addEventListener('click', () => {
        const index = thumbnail.dataset.index;
        changeFeaturedImage(index);
      });
    });
  }
  
  // Initialize the gallery with dynamic thumbnails and transitions
  function initGallery() {
    buildThumbnails();
    changeFeaturedImage(0); // Set the first image as featured initially
    addThumbnailEventListeners();
  }
  
  initGallery();
  