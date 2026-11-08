/* =====================================================
DOWERGLEN HIGH SCHOOL
PREFECT INDUCTION CEREMONY 2027
BLACK & PEARLS

EVENT DATE: 20 NOVEMBER 2026
EVENT TIME: 17:30 SAST
===================================================== */


/* =====================================================
1. SET THE EVENT DATE
===================================================== */

// South African Standard Time (UTC+2)
const eventDate = new Date(
"2026-11-20T17:30:00+02:00"
).getTime();



/* =====================================================
2. CONNECT HTML ELEMENTS
===================================================== */

// Countdown numbers
const daysElement = document.getElementById("days");

const hoursElement = document.getElementById("hours");

const minutesElement = document.getElementById("minutes");

const secondsElement = document.getElementById("seconds");


// Countdown section
const countdownSection = document.querySelector(
".countdown-section"
);

const countdownHeading = document.querySelector(
".countdown-section h2"
);

const countdownNote = document.querySelector(
".countdown-note"
);

const countdownContainer = document.querySelector(
".countdown"
);


// Enter button
const enterButton = document.querySelector(
".enter-button"
);



/* =====================================================
3. COUNTDOWN FUNCTION
===================================================== */

let countdownTimer;


function updateCountdown() {

// Get the current time
const now = Date.now();

// Calculate the time remaining
const distance = eventDate - now;


// Check if the ceremony has started
if (distance <= 0) {

countdownHeading.textContent =
"The moment has arrived.";

countdownNote.textContent =
"Welcome to the Prefect Induction Ceremony.";

countdownContainer.innerHTML =
"<p class='event-started'>The next chapter begins now.</p>";

clearInterval(countdownTimer);

return;
}


// Calculate remaining days
const days = Math.floor(
distance / (1000 * 60 * 60 * 24)
);


// Calculate remaining hours
const hours = Math.floor(
(distance % (1000 * 60 * 60 * 24)) /
(1000 * 60 * 60)
);


// Calculate remaining minutes
const minutes = Math.floor(
(distance % (1000 * 60 * 60)) /
(1000 * 60)
);


// Calculate remaining seconds
const seconds = Math.floor(
(distance % (1000 * 60)) / 1000
);


// Display the countdown
daysElement.textContent =
String(days).padStart(2, "0");

hoursElement.textContent =
String(hours).padStart(2, "0");

minutesElement.textContent =
String(minutes).padStart(2, "0");

secondsElement.textContent =
String(seconds).padStart(2, "0");

}



/* =====================================================
4. START THE COUNTDOWN
===================================================== */

// Display countdown immediately
updateCountdown();

// Update countdown every second
countdownTimer = setInterval(updateCountdown, 1000);



/* =====================================================
5. ENTER THE EXPERIENCE BUTTON
===================================================== */

if (enterButton) {

enterButton.addEventListener("click", function() {

// Find the countdown section
if (countdownSection) {

// Smoothly scroll to the countdown
countdownSection.scrollIntoView({

behavior: "smooth",

block: "start"

});

}

});

}



/* =====================================================
6. WEBSITE INITIALISATION
===================================================== */

console.log(
"Dowerglen High School Prefect Induction webpage loaded successfully."
);

console.log(
"Countdown set for 20 November 2026 at 17:30 SAST."
);