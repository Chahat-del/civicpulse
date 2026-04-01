// Claude API integration for classification and duplicate detection
const classifyIssue = async (description, imageUrl) => {
  // Will call Claude API here
  return { category: 'pending', isDuplicate: false };
};

const detectSpam = async (issueId) => {
  // Will check similarity score
  return false;
};

module.exports = { classifyIssue, detectSpam };