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