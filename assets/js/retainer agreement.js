// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Function to get today's date in the format "YYYY-MM-DD"
    function getTodayDate() {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');
        return `${month}/${day}/${year}`;
    }

    // Get the element where you want to display the date
    const datePlaceholder = document.getElementById('date');

    // Set the innerHTML of the element to today's date
    datePlaceholder.innerHTML = getTodayDate();
});
