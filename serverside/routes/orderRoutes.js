const mongoose = require('mongoose');
const product = require('../db/dbToys.js');

module.exports = app => {
  app.get('/api/orders', (req, res) => {
    res.send(product);
  });

  app.get('/api/wishlist', (req, res) => {
    res.send('Page Wishlist');
  });

  app.get('/api/cart', (req, res) => {
    console.log('Page Cart');
    res.send(product);
  });


  /*app.post('/api/orders', (req, res) => {
    console.log(req.body);
    res.send({
      type: 'POST',
      name: req.body.name
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


