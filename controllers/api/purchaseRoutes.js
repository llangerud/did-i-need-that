const router = require('express').Router();
const { Purchase } = require ('../../models');
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


router.get('/:id', auth, async (req, res) => {
    try {
      const purchaseData = await Purchase.findByPk(req.params.id);
    res.status(200).json(purchaseData);
    } catch (err) {
      res.status(500).json(err);
    }
});


router.post('/', auth, async (req, res) => {
    const body = req.body;
    try {
      const newPurchase = await Purchase.create({
        ...body,
        user_id: req.session.user_id,
      });
  
      res.json(newPurchase);
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