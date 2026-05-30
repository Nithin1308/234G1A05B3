const express = require("express");
const logger = require("./middleware/logger");
const fetchNotifications = require("./services/notificationService");
const calculatePriority = require("./utils/priorityCalculator");

const app = express();

app.use(logger);

app.get("/priority", async (req, res) => {

    try {

        const response = await fetchNotifications();

        const notifications = response.notifications;

        const ranked = notifications.map(n => ({
            ...n,
            priority: calculatePriority(n)
        }));

        ranked.sort((a, b) => b.priority - a.priority);

        const top10 = ranked.slice(0, 10);

        res.json(top10);

    } catch (error) {

        console.log(error);

        res.status(500).json({
            error: error.message
        });

    }

});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});