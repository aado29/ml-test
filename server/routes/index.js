const express = require('express');
const Product = require('../models/Product');
const coorsMiddleware = require('../middlewares/coors');
const authorMiddleware = require('../middlewares/author');

const controllers = require('../controllers');

const router = express.Router();

router.all('*', coorsMiddleware, authorMiddleware)

router.get('/items/:id?', function(req, res) {
  if (req.query.q) {
  	return controllers.searchController(req, res);
  }

  if (req.params.id) {
  	return controllers.singleProductController(req, res);
  }

  res.
  	status(500)
    .send({
    	success: false
    });
});

module.exports = router;
