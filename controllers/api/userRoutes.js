const router = require('express').Router();
const { User } = require ('../../models');
const withAuth = require('../../utils/auth');


router.post('/', withAuth, async (req, res) => {
  try {
    const userData = await User.create({
      user_name: req.body.user_name,
      email: req.body.email,
      password: req.body.password
    });
    //leave commented out
    // console.log("user create",userData)
    // req.session.save(() => {
    //   req.session.user_id = userData.id;
    //   req.session.loggedIn = true;
    //   req.session.user_name = userData.user_name
    //   req.session.email = userData.email
    //   res.status(200).json(userData);
    // });
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});
  
  router.post('/login', withAuth, async (req, res) => {
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
  
  router.post('/logout', withAuth, (req, res) => {
    if (req.session.loggedIn) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
  });

module.exports = router;