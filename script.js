document.addEventListener("DOMContentLoaded", function() {
    
    const eventDate = new Date("2025-04-15T00:00:00").getTime();
    const timerElement = document.getElementById("timer");
    if (!timerElement) {
        console.error("Timer element not found!");
        return;
    }

    function updateTimer() {
        const now = new Date().getTime();
        const days = Math.floor((eventDate - now) / (1000 * 60 * 60 * 24));
        timerElement.innerHTML = days + " days left";
    }

    setInterval(updateTimer, 1000);
    updateTimer();

    document.getElementById("registerForm")?.addEventListener("submit", function(event) {
        event.preventDefault();
        const name = document.getElementById("name").value;
        const password = document.getElementById("password").value;
        const message = document.getElementById("message");

        if (name.length < 3) {
            message.textContent = "Name must be at least 3 characters.";
            return;
        }

        if (password.length < 6) {
            message.textContent = "Password must be at least 6 characters.";
            return;
        }

        message.textContent = "Registration successful!";
    });
});