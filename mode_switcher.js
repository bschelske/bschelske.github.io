const toggleSwitch = document.getElementById('darkModeToggle');
const darkModeCSS = document.getElementById('darkModeCSS');
const lightModeCSS = document.getElementById('lightModeCSS');
const modeText = document.getElementById('modeText');

// Check for saved dark mode preference
if (localStorage.getItem('darkMode') === 'enabled') {
    darkModeCSS.removeAttribute('disabled'); // Enable dark mode CSS
    lightModeCSS.setAttribute('disabled', 'true'); // Disable light mode CSS
    toggleSwitch.checked = true; // Set toggle to ON
    modeText.textContent = '👽 Mode'; // Update mode text
} else {
    lightModeCSS.removeAttribute('disabled'); // Enable light mode CSS
    darkModeCSS.setAttribute('disabled', 'true'); // Disable dark mode CSS
    toggleSwitch.checked = false; // Set toggle to OFF
    modeText.textContent = 'Light Mode'; // Update mode text
}

// Toggle dark mode when the switch is clicked
toggleSwitch.addEventListener('change', () => {
    if (toggleSwitch.checked) {
        darkModeCSS.removeAttribute('disabled'); // Enable dark mode CSS
        lightModeCSS.setAttribute('disabled', 'true'); // Disable light mode CSS
        localStorage.setItem('darkMode', 'enabled');
        modeText.textContent = '👽 Mode'; // Update mode text
    } else {
        darkModeCSS.setAttribute('disabled', 'true'); // Disable dark mode CSS
        lightModeCSS.removeAttribute('disabled'); // Enable light mode CSS
        localStorage.setItem('darkMode', 'disabled');
        modeText.textContent = 'Light Mode'; // Update mode text
    }
});
