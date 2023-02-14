const router = require('express').Router();
const userRoutes = require ('./userRoutes');
const purchaseRoutes = require ('./purchaseRoutes');
const categoryRoutes = require ('./categoryRoutes');


router.use('/users', userRoutes);
router.use('/purchases', purchaseRoutes);
router.use('/categories', categoryRoutes);




module.exports = router;