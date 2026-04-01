const express = require('express');
const router = express.Router();
const { getFlaggedIssues, removeIssue } = require('../controllers/adminController');

router.get('/flagged', getFlaggedIssues);
router.delete('/issues/:id', removeIssue);

module.exports = router;