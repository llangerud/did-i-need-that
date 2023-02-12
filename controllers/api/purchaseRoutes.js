const router = require('express').Router();
const { Purchase } = require ('../../models');


router.get('/', async (req, res) => {
      const purchaseData = await Purchase.findAll();
      res.render('didiuse', {purchaseData});
    }
  );


router.get('/:id', async (req, res) => {
    try {
      const purchaseData = await Purchase.findByPk(req.params.id);
    res.status(200).json(purchaseData);
    } catch (err) {
      res.status(500).json(err);
    }
});


router.post('/', async (req, res) => {
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


router.put('/:id', (req, res) => {
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
router.delete('/:id', async (req, res) => {
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