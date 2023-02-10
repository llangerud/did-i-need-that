const router = require('express').Router();
const {User, Category, Purchase} = require('../models');
const auth = require('../utils/auth');


router.get('/', (req, res) => {
  try {
    res.render('homepage');
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/dashboard', (req, res) => {
  return res.render('dashboard');
});


module.exports = router;