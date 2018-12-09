var express = require('express');
var router = express.Router();
var Cart = require('../models/cart');
var Comments = require('../models/comment');
var Product = require('../models/product');
var Order = require('../models/order');
var date = require('date-and-time');
var fs = require('fs'); 
/* GET home page. */
router.get('/', function(req, res, next) {
  if(req.query.search) {
    const regex = new RegExp(escapeRegExp(req.query.search), 'gi');
    Product.find({title: regex}, function(err, products) {
      if(err) {
        console.log(err);
      } else {
        var productChunks = [];
        var chunkSize = 3;
        for(var i = 0; i < products.length; i += chunkSize) {
          productChunks.push(products.slice(i, i + chunkSize));
        }
        res.render('shop/index', {products: productChunks});
      }
    });
  } else {
    Product.find(function(err, docs) {
      var productChunks = [];
      var chunkSize = 3;
      for(var i = 0; i < docs.length; i += chunkSize) {
        productChunks.push(docs.slice(i, i + chunkSize));
      }
      res.render('shop/index', { title: 'PPiW Shop', products: productChunks });
    });
  }
});

router.get('/product/:id', function(req, res, next) {
  Product.findById(req.params.id).populate('comments').exec(function(err, foundProduct) {
    if (err) {
      return res.redirect('/');
    }
  res.render('shop/product', {product: foundProduct, message: req.flash("error")});
  });
});

router.get('/new-product', isLoggedIn, function(req, res, next) {
  res.render('shop/new-product');
});

router.post('/new-product', isLoggedIn, function(req, res, next) {
  Product.create({imagePath: req.body.imagePath, title: req.body.title,
    trailer: req.body.trailer, cover: req.body.cover, price: req.body.price,
    description: req.body.description}, function(err, product) {
      if(err) {
        console.log(err);
      } else {
        product.save();
        res.redirect('/product/' + product._id);
      }
  });
});

router.get('/product/:id/comment/new', isLoggedIn, function(req, res, next) {
  Product.findById(req.params.id, function(err, product) {
    if (err) {
      return res.redirect('/');
    }
    var userVoted = false;
      product.reviewers.forEach(function(reviewer) {
        if(reviewer.equals(req.user._id)) {
          userVoted = true;     
        }
      });
    if(userVoted) {
      req.flash("error", "You already reviewed this product!");
      res.redirect('/product/' + product._id);
    } else {
      res.render('shop/new', {product: product});
    }
  });
});

router.post('/product/:id/comment', isLoggedIn, function(req, res, next) {
  let now = new Date();
  Product.findById(req.params.id, function(err, product) {
    if(err) {
      console.log(err);
      res.redirect('/');
    } else {
      Comments.create({author: req.body.authortxt, content: req.body.contenttxt,
        rating: req.body.ratingval, user: req.user, created: date.format(now, 'YYYY/MM/DD HH:mm:ss')}, function(err, comment) {
        if(err) {
          console.log(err);
        } else {
          comment.product = product;
          comment.save();
          product.comments.push(comment);
          product.reviewers.push(req.user);
          product.totalSumOfVotes += comment.rating;
          var sum = product.totalSumOfVotes;
          product.votes++;
          var newRating = sum / product.votes;
          product.rating = Math.round(newRating * 100) / 100;
          product.save();
          res.redirect('/product/' + product._id);
        }
      });
    }
  });
});

router.get('/add-to-cart/:id', function(req, res, next) {
  var productId = req.params.id;
  var cart = new Cart(req.session.cart ? req.session.cart : {}); //if cart is already in a session then pass it / otherwise pass empty

  Product.findById(productId, function(err, product) {
    if (err) {
      return res.redirect('/');
    }
    cart.add(product, product.id);
    req.session.cart = cart; //saving cart to session
    console.log(req.session.cart);
    res.redirect('/');
  });
});

router.get('/empty', function(req, res, next) {
  req.session.cart = null;
  res.redirect('/shopping-cart');
});

router.get('/reduce/:id', function(req, res, next) {
  var productId = req.params.id;
  var cart = new Cart(req.session.cart ? req.session.cart : {});
  cart.reduceByOne(productId);
  req.session.cart = cart;
  res.redirect('/shopping-cart');
});

router.get('/remove/:id', function(req, res, next) {
  var productId = req.params.id;
  var cart = new Cart(req.session.cart ? req.session.cart : {});
  req.session.cart = cart;
  cart.removeItem(productId);
  res.redirect('/shopping-cart');
});

router.get('/shopping-cart', function(req, res, next) {
  if (!req.session.cart) {
    return res.render('shop/shopping-cart', {products: null});
  }
  var cart = new Cart(req.session.cart);
  res.render('shop/shopping-cart', {products: cart.generateArray(), totalPrice: cart.totalPrice});
});

router.get('/checkout', isLoggedIn, function(req, res, next) {
  if (!req.session.cart) {
    return res.render('shop/shopping-cart', {products: null});
  }
  var cart = new Cart(req.session.cart);   
  res.render('shop/checkout', {products: cart.generateArray(), totalPrice: cart.totalPrice});
});

router.post('/checkout', isLoggedIn, function(req, res, next) {
  if (!req.session.cart) {
    return res.render('shop/shopping-cart', {products: null});
  }
  var cart = new Cart(req.session.cart);
  let now = new Date();
  var cart = new Cart(req.session.cart);
  var order = new Order({
    user: req.user, //from passport
    cart: cart,  //defined above
    created: date.format(now, 'YYYY/MM/DD HH:mm:ss'),
    fullName: req.body.fullName,
    email: req.body.email,
    city: req.body.city,
    address: req.body.address,
    bankInfo: req.body.bankInfo,
    totalPrice: cart.totalPrice
  });

 var boughtProductsInfo = "";
 var productsInCart = cart.generateArray();
 var datetime = date.format(now, 'YYYY/MM/DD HH:mm:ss');
 var time = datetime + '\r\n';
 var dateNumbers = datetime.replace(/[^0-9\.]+/g,'');
 var text = "PPiW bank number: " + req.body.bankInfo + "\r\nOrdered products: \r\n";
 var text2 = "\r\nYour shipping address: \r\nFull name: " + req.body.fullName +
  "\r\nE-mail: " + req.body.email + "\r\nAddress: " + req.body.city + " " + req.body.address + 
  "\r\nCost: " + cart.totalPrice + " €";

 productsInCart.forEach(function(foundItem) {
   boughtProductsInfo += foundItem.quantity + " x " + foundItem.item.title;
   boughtProductsInfo += "\r\n";
 });

 fs.writeFile("Receipt "+ dateNumbers + ".txt", time + text + boughtProductsInfo + text2 , function (err) {
  if (err) return console.log(err);
 });

  order.save(function(err, result) {
    req.flash('success', 'Successfully bought product!');
    req.session.cart = null;
    res.redirect('/');
  });
});

function isLoggedIn(req, res, next) {
  if(req.isAuthenticated()) {
    return next();
  }
  req.flash("error", "You must be logged in to do that!");
  res.redirect('/user/signin');
};

function escapeRegExp(text) {
  return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
};

module.exports = router;