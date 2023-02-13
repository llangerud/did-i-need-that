const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Purchase, Category } = require ('../../models');
const auth = require('../../utils/auth');



router.get('/', auth, async (req, res) => {
    try {
      const purchaseData = await Purchase.findAll();
      res.status(200).json(purchaseData);
    }
    catch {
      console.log('error');
    }
  });

  router.get('/byuser', auth, async (req, res)=> {
    let allPurchasesByUser = await Purchase.findAll({
      where: {user_id: req.session.user_id}
    });
    console.log(allPurchasesByUser);

    let purchaseData = allPurchasesByUser.map((purchase)=> purchase.get({plain: true}));
    console.log(purchaseData);

    res.render('didiuse', {purchaseData});
  });

  router.get('/totalspent', auth, async (req, res)=> {
    let totalSpent = await Purchase.sum('price');
    let totalSpentUnused = await Purchase.findAll({
      where: {user_id: req.session.user_id},
      attributes: [
        'xused',
        [sequelize.fn('sum', sequelize.col('price')), 'total_unused'],
      ],
      group: ['xused'],
      raw: true
    });
    console.log(totalSpent);
    console.log(totalSpentUnused);

    res.render('totalspent', {totalSpent, totalSpentUnused});
  });
  

router.get('/:id', auth, async (req, res) => {
    try {
      const purchaseData = await Purchase.findByPk(req.params.id);
    res.status(200).json(purchaseData);
    } catch (err) {
      res.status(500).json(err);
    }
});


router.post('/addnew', async (req, res) => {
    try {
      const id = await Category.findOne({
        where: {name: req.body.category}
      });
          let price = parseInt(req.body.price);
          

      const newPurchase = await Purchase.create({
        name: req.body.name,
        price: price,
        mood: req.body.mood,
        user_id: req.session.user_id,
        category_id: id.dataValues.id
      });
      
      res.status(200).json(newPurchase);
    } catch (err) {
      res.status(500).json(err);
    }
});


router.put('/:id', auth, (req, res) => {
  Purchase.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((updatedPurchase) => {
      res.json(updatedPurchase);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});





router.put('/:id', auth, (req, res) => {
    Purchase.update(req.body, {
      where: {
        id: req.params.id,
      },
    })
      .then((updatedPurchase) => {
        res.json(updatedPurchase);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  });

//currently NOT WORKING!!
router.delete('/:id', auth, async (req, res) => {
    try {
      const purchaseData = await Purchase.destroy({
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      });
  
      if (!purchaseData) {
        res.status(404).json({ message: 'No purchases found with this id!' });
        return;
      }
  
      res.status(200).json(purchaseData);
    } catch (err) {
      res.status(500).json(err);
    }
  });


module.exports = router;