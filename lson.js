// Function to toggle the menu visibility
function toggleMenu(event) {
  const menu = document.querySelector('.ready');
  menu.classList.toggle('active');  // Toggle the 'show' class to display the menu
  
}

// Function to close the menu when clicking anywhere outside
document.body.addEventListener('click', function(event) {
  const menu = document.querySelector('.ready');
  const menuButton = document.querySelector('.menu');

  // If the click is outside the menu or the menu button, hide the menu
  if (!menu.contains(event.target) && !menuButton.contains(event.target)) {
      menu.classList.remove('active');
  }
});

//slides start here!
let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

// Function to show the slide based on the current index
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = 'none';
        dots[i].classList.remove('active');
    });

    slides[index].style.display = 'flex';
    dots[index].classList.add('active');

    // Apply animation to text
    const text = slides[index].querySelector('.text');
    text.style.animation = 'none'; // Reset animation
    text.offsetHeight; // Trigger reflow to restart animation

    // Apply slide direction based on the button clicked
    if (text.dataset.slideDirection === 'left') {
        text.style.animation = 'slideInText 1s forwards'; // Apply slide left animation
    } else {
        text.style.animation = 'slideRight 1s forwards'; // Apply slide right animation
    }
}

// Function to move to the next slide
function nextSlide() {
    slideIndex = (slideIndex + 1) % slides.length; // Increment and wrap around
    updateDirection('right'); // Set direction to right for next
    showSlide(slideIndex);
}

// Function to move to the previous slide
function prevSlide() {
    slideIndex = (slideIndex - 1 + slides.length) % slides.length; // Decrement and wrap around
    updateDirection('left'); // Set direction to left for prev
    showSlide(slideIndex);
}

// Function to update the direction based on button clicked
function updateDirection(direction) {
    const text = slides[slideIndex].querySelector('.text');
    text.dataset.slideDirection = direction; // Store the direction in a custom data attribute
}

// Add event listeners to the prev and next buttons
prevButton.addEventListener('click', prevSlide);
nextButton.addEventListener('click', nextSlide);

// Function to show a specific slide based on the clicked dot
function currentSlide(index) {
    slideIndex = index;
    updateDirection(index % 2 === 0 ? 'left' : 'right'); // Set default direction based on index
    showSlide(slideIndex);
}

// Initialize the slider to show the first slide
showSlide(slideIndex);
//slides ends here!
//for the light toggle button
const toggleSwitch = document.getElementById('toggleSwitch');

// Function to initialize the toggle state
const initializeToggleState = () => {
    const activeTheme = localStorage.getItem('activeTheme') === 'true'; // Retrieve the theme state
    if (activeTheme) {
        toggleSwitch.classList.add('active'); // Set the toggle to active state
        toggleSwitch.setAttribute('aria-pressed', true);
        document.body.classList.add('active-theme'); // Apply the active theme to the body
    } else {
        toggleSwitch.classList.remove('active'); // Set the toggle to inactive state
        toggleSwitch.setAttribute('aria-pressed', false);
        document.body.classList.remove('active-theme'); // Remove the active theme from the body
    }
};

// Add click event listener to toggle the state and save it
toggleSwitch.addEventListener('click', () => {
    const isActive = toggleSwitch.classList.toggle('active'); // Toggle the active state
    toggleSwitch.setAttribute('aria-pressed', isActive);

    if (isActive) {
        document.body.classList.add('active-theme'); // Apply the active theme
        localStorage.setItem('activeTheme', 'true'); // Save the active state
    } else {
        document.body.classList.remove('active-theme'); // Remove the active theme
        localStorage.setItem('activeTheme', 'false'); // Save the inactive state
    }
});

// Initialize the toggle state when the page loads
initializeToggleState()
