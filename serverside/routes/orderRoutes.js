const mongoose = require('mongoose');
const Article = mongoose.model('articles');

module.exports = app => {
  app.get('/api/orders', (req, res) => {
    res.send('Hello from orderAuth');
  });


  /*
  app.post('/api/orders', requireLogin, (req, res) => {
    const { title, description, price } = req.body;

    const article = new Article({
    title,
    description,
    price,
    _user: req.user.id});
  });
};

  */

}

