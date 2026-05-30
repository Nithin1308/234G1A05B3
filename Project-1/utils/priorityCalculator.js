const weights = {
    Placement: 5,
    Result: 4,
    Event: 3
};

function calculatePriority(notification) {

    const weight = weights[notification.Type] || 1;

    const ageHours =
        (Date.now() - new Date(notification.Timestamp)) /
        (1000 * 60 * 60);

    const recency = Math.max(0, 100 - ageHours);

    return (weight * 100) + recency;
}

module.exports = calculatePriority;