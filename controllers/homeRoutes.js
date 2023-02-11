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
router.get('/homepage', (req, res) => {
  return res.render('homepage');
});

router.get("/login", (req, res) => {
  res.render("login");
});
router.get("/signup", (req, res) => {
  res.render("signup");
});
module.exports = router;