 document.addEventListener("DOMContentLoaded", function () {
    // Get elements by data-testid
    const slackUserName = document.querySelector("[data-testid='slackUserName']");
    const slackDisplayImage = document.querySelector("[data-testid='slackDisplayImage']");
    const currentDayOfTheWeek = document.querySelector("[data-testid='currentDayOfTheWeek']");
    const currentUTCTime = document.querySelector("[data-testid='currentUTCTime']");
    const myTrack = document.querySelector("[data-testid='myTrack']");

    // Update dynamic data
    slackUserName.textContent = "Slack Name is Ifeanyichukwu Azuka";
    currentDayOfTheWeek.textContent = "Day of the Week: " + new Date().toLocaleDateString("en-US", { weekday: 'long' });
    currentUTCTime.textContent = "Current UTC Time: " + Date.now() + " milliseconds";
    myTrack.textContent = "My Track: Frontend";
    // You can fetch and update the Slack display picture here if needed.
});
