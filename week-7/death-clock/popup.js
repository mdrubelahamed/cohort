document.getElementById("start").addEventListener("click", function() {
    const message = document.getElementById("message").value;
    const eventDate = new Date(document.getElementById("event-date").value);

    if (!message || isNaN(eventDate.getTime())) {
        alert("Please enter both event title and a valid date.");
        return;
    }

    document.getElementById("event-title").textContent = message;
    const countdownBox = document.getElementById("countdown-box");
    countdownBox.classList.remove("hidden");

    const updateCountdown = () => {
        const now = new Date();
        const timeDiff = eventDate - now;

        if (timeDiff < 0) {
            countdownBox.innerHTML = "<div>Event has passed!</div>";
            clearInterval(timer);
            return;
        }

        const years = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 365));
        const months = Math.floor((timeDiff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
        const days = Math.floor((timeDiff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

        countdownBox.innerHTML = `
            <div>${years} year(s)</div>
            <div>${months} month(s)</div>
            <div>${days} day(s)</div>
            <div>${hours} hour(s)</div>
            <div>${minutes} minute(s)</div>
            <div>${seconds} second(s)</div>
        `;
    };

    const timer = setInterval(updateCountdown, 1000);
    updateCountdown();
});
