// script.js
document.getElementById('toggle-mode').addEventListener('click', function () {
    const body = document.body;
    body.classList.toggle('night-mode');

    // Change button text based on mode
    const isNightMode = body.classList.contains('night-mode');
    this.textContent = isNightMode ? 'Activer Mode Jour' : 'Activer Mode Nuit';
});