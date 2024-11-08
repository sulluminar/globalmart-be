const express = require('express');
const router = new express.Router();

const productController = require('../Controllers/productController');
const jwtMiddleWare = require('../Middleware/jwtMiddleware');
const cartController= require('../Controllers/cartController')


//defing paths
router.get('/all-products', productController.getAllProductsController);

router.get('/get-product/:id', productController.getProductDetailsByIdController);

router.post('/add-wishlist', jwtMiddleWare, productController.addToWishlistController);

router.get('/allwishlistitems', jwtMiddleWare, productController.getAllWishlistitemsController);
router.delete('/wishlist/removeItem/:id', jwtMiddleWare, productController.deleteItemWishlistController);
router.post('/add-cart',jwtMiddleWare, cartController.addTocartControllerApi)
router.get('/allCartitems',jwtMiddleWare,cartController.gettAllCartItemsControllerApi)

module.exports = router;

