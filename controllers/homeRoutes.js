const router = require('express').Router();
const {User, Category, Purchase} = require('../models');
const auth = require('../utils/auth');

//needs a request to the server to pull category data and send it
//(res.render('homepage', {name of variable});
router.get('/', (req, res) => {
  try {
    res.render('homepage');
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/dashboard',auth, async (req, res) => {
    try {
      
      const categoryData = await Category.findAll({
        where: {user_id: req.session.user_id}
      });
      let category = categoryData.map((category)=> category.get({plain: true}));

      console.log(category);

     res.render('dashboard', {category});

    } catch (err) {
      res.status(500).json(err);
    }

});

router.get('/homepage', (req, res) => {
  res.render('homepage');
});

router.get("/login", (req, res) => {
  res.render("login");
});
router.get("/signup", (req, res) => {
  res.render("signup");
});
router.get('/addcategory',(req,res) => {
res.render('addcategories')

});

module.exports = router;