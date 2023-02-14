const router = require('express').Router();
const { User } = require ('../../models');
const auth = require('../../utils/auth');
require('dotenv').config();
const nodemailer = require ('nodemailer');

let transporter = nodemailer.createTransport({
  service: 'hotmail',
  auth: {
    user: process.env.NM_USER, 
    pass: process.env.NM_PASS, 
  },
  
});

router.post('/', async (req, res) => {
  try {
    const userData = await User.create({
      user_name: req.body.user_name,
      email: req.body.email,
      password: req.body.password
    });
    
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      req.session.user_name = userData.user_name
      req.session.email = userData.email
      res.status(200).json(userData);
    
    });
    let emailed = await transporter.sendMail({
      from: '"You" <did_i_need_that@hotmail.com>', 
      to: "did_i_need_that@hotmail.com", 
      subject: `"Welcome to DINT!"`, 
      text: `"Thanks for joining us at DINT! Start logging your purchases now to learn more about your spending habits."`, 
      html: `<b>"Thanks for joining us at DINT! Start logging your purchases now to learn more about your spending habits."<b>`,
    });
    console.log(emailed);
    } catch (err) {
    console.log(err);
    
    res.status(400).json(err);
  }
});
  
  router.post('/login', async (req, res) => {
    try {
      const userData = await User.findOne({ where: { email: req.body.email } });
  
      if (!userData) {
        res
          .status(400)
          .json({ message: 'Incorrect email or password, please try again' });
        return;
      }
  
      const validPassword = await userData.checkPassword(req.body.password);
  
      if (!validPassword) {
        res
          .status(400)
          .json({ message: 'Incorrect email or password, please try again' });
        return;
      }
  
      req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.logged_in = true;
        
        res.json({ user: userData, message: 'You are now logged in!' });
      });
  
    } catch (err) {
      res.status(400).json(err);
    }
  });
  
  router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
  });

module.exports = router;