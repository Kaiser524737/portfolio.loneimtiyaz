// // Select the menu icon and the menu list
const menuIcon = document.querySelector('.showmenu');
const menu = document.querySelector('.menu');

// // Add a click event to the icon
menuIcon.addEventListener('click', () => {
//     // Toggle the 'active' class on the menu
    menu.classList.toggle('active');
});
const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

// 1. Check Local Storage or System Preference on Load
const currentTheme = localStorage.getItem('theme');
const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (currentTheme === 'dark' || (!currentTheme && systemPrefersDark)) {
    body.classList.add('dark-mode');
    toggleButton.textContent = '☀️';
}

// 2. Handle Click Event
toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    // Update Button Text
    if (body.classList.contains('dark-mode')) {
        toggleButton.textContent = '☀️';
        localStorage.setItem('theme', 'dark'); // Save preference
    } else {
        toggleButton.textContent = '🌙';
        localStorage.setItem('theme', 'light'); // Save preference
    }
});
