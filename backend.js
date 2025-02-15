let checkInCounter = 0;  // Initialize the counter

// Generate the calendar for the current month
function generateCalendar() {
    const calendar = document.getElementById("calendar");
    const today = new Date();
    const currentMonth = today.getMonth(); // 0 to 11 (Jan to Dec)
    const currentYear = today.getFullYear();

    // Get the first day of the current month and the last day of the current month
    const firstDay = new Date(currentYear, currentMonth, 1);
    const lastDay = new Date(currentYear, currentMonth + 1, 0);  // Last day of the month

    const totalDays = lastDay.getDate();  // Get total days in the month

    // Display the current month at the top
    const monthDisplay = document.getElementById("monthDisplay");
    monthDisplay.textContent = `${firstDay.toLocaleString('default', { month: 'long' })} ${currentYear}`;

    // Create the days in the calendar
    for (let i = 1; i <= totalDays; i++) {
        const dayDiv = document.createElement("div");
        dayDiv.classList.add("day");
        dayDiv.textContent = i;
        dayDiv.setAttribute("data-day", i);
        calendar.appendChild(dayDiv);
    }
}

// Handle the check-in process
function checkIn() {
    const today = new Date();
    const currentDay = today.getDate();

    // Disable the check-in button
    document.getElementById("checkInButton").disabled = true;

    // Turn the day green when user checks in
    const dayToCheckIn = document.querySelector(`.day[data-day="${currentDay}"]`);
    if (dayToCheckIn && !dayToCheckIn.classList.contains("checked-in")) {
        dayToCheckIn.classList.add("checked-in");
        checkInCounter++; // Increment the check-in counter
        document.getElementById("checkInCount").textContent = checkInCounter; // Update the display
        

    }

    // Enable the button the next day
    setTimeout(() => {
        const nextDay = new Date();
        nextDay.setDate(today.getDate() + 1);
        
        // Check if it's the next day, enable the button
        if (new Date().toDateString() === nextDay.toDateString()) {
            document.getElementById("checkInButton").disabled = false;
        }
    }, 86400000); // 24 hours (86400000ms)
}




// Initialize the calendar on page load
window.onload = function () {
    generateCalendar();
};

//banner animation
// Array of messages to show on the banner
const messages = [
    "Welcome to our website! Stay tuned for updates.",
    "Check out our new features!",
    "Limited time offer! Get 20% off on all products.",
    "Don't miss our latest blog post about tech innovations.",
    "Join our newsletter to get the latest news."
];

let currentMessageIndex = 0;

// Function to change the banner message every 2 minutes
function changeBannerMessage() {
    const banner = document.getElementById('floatingBanner');
    currentMessageIndex = (currentMessageIndex + 1) % messages.length; // Cycle through the messages
    banner.textContent = messages[currentMessageIndex];
}

// Change the message every 2 minutes (120000 milliseconds)
setInterval(changeBannerMessage, 120000); // 2 minutes


