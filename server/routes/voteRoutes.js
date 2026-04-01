const express = require('express');
const router = express.Router();
const { castVote } = require('../controllers/voteController');

router.post('/:id/vote', castVote);

module.exports = router;