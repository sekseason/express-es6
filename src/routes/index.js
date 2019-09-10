import express from 'express';

const router = express.Router();

router.get('/', (req, res, next) => {
  res.json({
    info: 'Express API'
  });
});

module.exports = router;
