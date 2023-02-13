const router = require('express').Router();
const { Category } = require ('../../models');
const auth = require('../../utils/auth');

router.get('/', auth, async (req, res) => {
    try {
      const categoryData = await Category.findAll();
      res.status(200).json(categoryData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.get('/:id', auth, async (req, res) => {
    try {
      const categoryData = await Category.findByPk(req.params.id);
    res.status(200).json(categoryData);
    } catch (err) {
      res.status(500).json(err);
    }
});


  router.post('/', async (req, res) => {
    try {
      
      let categories = req.body;
      let createCat = categories.map(category =>({name:category.name, user_id:req.session.user_id}));
      const newCategory = await Category.bulkCreate(
        createCat
      );
  
      res.json(newCategory);
    } catch (err) {
      res.status(500).json(err);
    }
});


module.exports = router;