// Smooth Scrolling for Internal Links
document.querySelectorAll('a[href^="projects.html#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      // Prevent default behavior if on the same page
      if (window.location.pathname === '/projects.html') {
        e.preventDefault();
        const targetId = this.getAttribute('href').split('#')[1];
        document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
  
  // Filtering Projects
const filterInputs = document.querySelectorAll('.btn-check[name="project-filter"]');
const projectItems = document.querySelectorAll('.project-item');

filterInputs.forEach((input) => {
  input.addEventListener('change', () => {
    if (input.checked) {
      const filterValue = input.getAttribute('data-filter');

      projectItems.forEach((item) => {
        const itemCategory = item.getAttribute('data-category');

        if (filterValue === 'all' || itemCategory === filterValue) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    }
  });
});
