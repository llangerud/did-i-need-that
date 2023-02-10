const router = require('express').Router();
const { Category } = require ('../../models');

router.get('/', async (req, res) => {
    try {
      const categoryData = await Category.findAll();
      res.status(200).json(categoryData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.get('/:id', async (req, res) => {
    try {
      const categoryData = await Category.findByPk(req.params.id);
    res.status(200).json(categoryData);
    } catch (err) {
      res.status(500).json(err);
    }
});


  router.post('/', async (req, res) => {
    const body = req.body;
    try {
      const newCategory = await Category.create({
        ...body,
        user_id: req.session.user_id,
      });
  
      res.json(newCategory);
    } catch (err) {
      res.status(500).json(err);
    }
});


module.exports = router;