// Issue DB queries will go here
const pool = require('../config/db');

const insertIssue = async (data) => {
  // INSERT INTO issues ...
};

const fetchAllIssues = async (filters) => {
  // SELECT with filters for category, ward, sort
};

module.exports = { insertIssue, fetchAllIssues };