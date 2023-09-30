const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;

    // Check for a saved dark mode preference and apply it
    if (localStorage.getItem('darkMode') === 'enabled') {
      body.classList.add('dark-mode');
      darkModeToggle.textContent = 'Light Mode'; 
    }
    


    // Toggle dark mode when the button is clicked
    darkModeToggle.addEventListener('click', () => {
      body.classList.toggle('dark-mode');
      // Save the dark mode preference to localStorage
      if (body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
        darkModeToggle.textContent='Light Mode';
      } else {
        localStorage.setItem('darkMode', 'disabled');
        darkModeToggle.textContent='Dark Mode';
      }
    });

    //
    const openModalBtn = document.getElementById('openModalBtn');
    const contactModal = document.getElementById('contactModal');
    const closeModalBtn = document.getElementById('closeModal');

    // Open the modal when the button is clicked
    openModalBtn.addEventListener('click', () => {
      contactModal.style.display = 'block';
    });

    // Close the modal when the close button is clicked
    closeModalBtn.addEventListener('click', () => {
      contactModal.style.display = 'none';
    });

    // Close the modal when clicking outside the modal content
    window.addEventListener('click', (event) => {
      if (event.target === contactModal) {
        contactModal.style.display = 'none';
      }
    });

//project 10
const items = document.querySelectorAll('.item');
console.log(items);
const options = {
  threshold: 0.5
}
function addSlideIn(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('slide-in');
    }
  });
}

const observer = new IntersectionObserver(addSlideIn, options)
items.forEach(item => {
  observer.observe(item);
})