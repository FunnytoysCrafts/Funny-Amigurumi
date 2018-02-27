const mongoose = require('mongoose');
const product = require('../db/dbToys.js');
const Product = mongoose.model('articles');

mongoose.connect('mongodb://localhost:27017/funny_toys_demo');

module.exports = app => {
//  app.use('/api/product', product);

  app.get('/api/orders', (req, res) => {
    res.send(product);
  });

  app.get('/api/wishlist', (req, res) => {
    res.send('Page Wishlist');
  });

  app.get('/api/products', (req, res) => {
    console.log(req.params);
  });

  app.get('/api/products/:id', (req, res) => {
    console.log(req.params);
    Product.find({}, function(err, product) {
      if (err) {
        console.log('error');
        return res.sendStatus(500);
      }
      res.send(req.params);
    });
  });

/*
  app.get('/api/products/:id', (req, res) => {
    const id = req.params.id;
    console.log(id);
    Product.findById(id, (err, data) => {
      console.log(index);
      if (err) {
        console.log('error');
        return res.sendStatus(500);
      } else {
        res.send(id);
      }
    });
  });
  */

}

  /*
  app.post('/api/orders', requireLogin, (req, res) => {
    const { title, description, price } = req.body;

    const article = new Article({
    title,
    description,
    price,
    _user: req.user.id});
  });
  article.save();
};

  */


