const express = require('express');
const router = express.Router();

router.get('/test', () => {
  return console.log('Hello web test');
});

module.exports = router;
