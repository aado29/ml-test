const express = require('express');
const Product = require('../models/Product');
const authorMiddleware = require('../middlewares/author');

const controllers = require('../controllers');

const router = express.Router();

router.get('/items/:id?', authorMiddleware, function(req, res) {
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
