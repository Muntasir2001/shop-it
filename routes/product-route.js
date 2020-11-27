const router = require('express').Router();

//importing product model
let Product = require('../models/product-model');

//get request
router.route('/').get((req, res) => {
   Product.find()
      .then(exercises => res.json(exercises))
      .catch(err => res.status(400).json(`Error: ${err}`));
});

//post request
router.route('/add').post((req, res) => {
   const name = req.body.name;
   const description = req.body.description;
   const address = req.body.address;
   // const date = Date.parse(req.body.date);

   const newProduct = new Product({
      name,
      description,
      address
      // date
   });

   newProduct.save()
      .then(() => res.json(`Product added!`))
      .catch(err => res.status(400).json(`Error: ${err}`));
});

//finding specific exercise by id
router.route('/:id').get((req, res) => {
   Product.findById(req.params.id)
      .then(product => res.json(product))
      .catch(err => res.status(400).json(`Error: ${err}`));
});

//delete exercise
router.route('/:id').delete((req, res) => {
   Product.findByIdAndDelete(req.params.id)
      .then(() => res.json(`Product deleted.`))
      .catch(err => res.status(400).json(`Error: ${err}`));
});

//update exercise
router.route('/update/:id').post((req, res) => {
   Product.findById(req.params.id)
      .then(product => {
         product.name = req.body.name;
         product.description = req.body.description;
         product.address = req.body.address;
         // exercise.date = Date.parse(req.body.date);

         product.save()
            .then(() => res.json(`Product updated!`))
            .catch(err => res.status(400).json(`Error: ${err}`));
      })
      .catch(err => res.status(400).json(`Error: ${err}`));
});

module.exports = router;