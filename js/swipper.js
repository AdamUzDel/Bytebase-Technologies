// Swiper initialization
var swiper = new Swiper(".mySwiper", {
    loop: false,
    centeredSlides: false,
    slidesPerView: 1,
    spaceBetween: 30,
    observer: true,
    observeParents: true,
    lazy: true,
    effect: 'coverflow',
    coverflowEffect: {
      rotate: 30,
      slideShadows: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      // Responsive breakpoints
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });
  
  // Get all initial slides
  const allSlides = Array.from(document.querySelectorAll('.swiper-slide')).map(
    (slide) => slide.outerHTML
  );
  
  // Filtering functionality
    const filterInputs = document.querySelectorAll('.btn-check');
  
    filterInputs.forEach((input) => {
        input.addEventListener('change', () => {
          if (input.checked) {
            const filterValue = input.getAttribute('data-filter');
      
            // Filter slides
            filterSlides(filterValue);
          }
        });
      });
      
      function filterSlides(category) {
        // Remove all slides
        swiper.removeAllSlides();
      
        // Filter slides
        const filteredSlides = allSlides.filter((slideHTML) => {
          const tempDiv = document.createElement('div');
          tempDiv.innerHTML = slideHTML.trim();
          const slide = tempDiv.firstChild;
          const slideCategory = slide.getAttribute('data-category');
          return category === 'all' || slideCategory === category;
        });
      
        if (filteredSlides.length > 0) {
          // Add filtered slides to Swiper
          swiper.appendSlide(filteredSlides);
        } else {
          // If no slides match, display a message
          swiper.appendSlide(
            '<div class="swiper-slide no-results">No projects found in this category.</div>'
          );
        }
      
        // Update Swiper
        swiper.update();

        // Deep Linking: Update the URL hash when a filter is selected, 
        // allowing users to share links to specific categories.
        window.location.hash = category;
      }

  // On page load, check for hash and apply filter
    window.addEventListener('load', () => {
        const hash = window.location.hash.replace('#', '');
        const validCategories = ['all', 'development', 'design']; // Update as needed
        if (validCategories.includes(hash)) {
        document.querySelector(`.filter-btn[data-filter="${hash}"]`).click();
        }
    });
  