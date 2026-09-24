const express = require('express');

const {
    createProduct,
    getProducts,
    getProductByPid,
    updateProduct,
    deleteProduct
} = require('../controllers/productController');

const router = express.Router();

router.post('/', createProduct);

router.get('/', getProducts);

router.get('/:pid', getProductByPid);

router.put('/:pid', updateProduct);

router.delete('/:pid', deleteProduct);

module.exports = router;