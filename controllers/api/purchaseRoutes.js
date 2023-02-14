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
    //would need a parameter to only find purchases between date ranges to work monthly
    console.log(allPurchasesByUser);

    let purchaseData = allPurchasesByUser.map((purchase)=> purchase.get({plain: true}));

    res.render('didiuse', {purchaseData});
  });

  router.get('/totalspent', auth, async (req, res)=> {
    let totalSpent = await Purchase.sum('price', {
      where: {user_id: req.session.user_id},
    });
    let totalSpentUnused = await Purchase.findAll({
      where: {user_id: req.session.user_id},
      attributes: [
        'xused',
        [sequelize.fn('sum', sequelize.col('price')), 'total_unused'],
      ],
      group: ['xused'],
      raw: true
    });
    console.log(totalSpentUnused);
    
    // console.log(totalSpentUnused);
    // console.log(totalSpentUnused[0]);
    
    let unused = totalSpentUnused.filter(unused=> (
     unused.xused===0));
     console.log(unused);
    // currently grabs only the objects with xused:0 and returns an array of objects [ { xused: 0, total_unused: 5 }, etc ]
   
    const totalUnused = unused.reduce((accumulator, price) => accumulator + price.total_unused, 0);
    console.log(totalUnused);
    res.render('totalspent', {totalSpent, totalUnused});
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

//will update xused for each purchase in the array of checked purchases
router.put('/updateused', auth, async (req, res) => {
try {
let names = req.body;

//  const updated = await Purchase.update({ xused: sequelize.literal('xused + 1') }, { where: { name: { [sequelize.Op.in]: names } } });
//  let updateXused = Purchase.findAll({
//  where: {user_id: req.session.user_id} 
 
const updated = await Purchase.update(
  {xused: sequelize.literal('xused + 1')},
  {
    where: {
      name: names,
    },
  }

);

//  })

 if (!updated) {
  res.status(200).json({ message: 'Nothing was used' });
  return;
}
res.status(200).json(updated);
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