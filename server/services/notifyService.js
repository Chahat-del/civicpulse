// Firebase Cloud Messaging for push notifications
const sendNotification = async (userId, message, issueId) => {
  // Will call FCM here
  console.log(`Notify user ${userId}: ${message}`);
};

module.exports = { sendNotification };