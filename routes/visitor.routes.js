const express = require('express');
const router = express.Router();

const visitControl = require('../controllers/visitor.controller');

router.get('/home', visitControl.getVisitor);

/* router.get('/products/:id',productContr.getProductDetails); */

module.exports = router;