var express = require('express');
var router = express.Router();
var csrf = require('csurf');
var passport = require('passport');
var csrfProtection = csrf();

var Order = require('../models/order');
var Cart = require('../models/cart');

router.use(csrfProtection);

router.get('/profile', isLoggedIn, function(req, res, next) {
  Order.find({user: req.user}, function(err, orders) {
    if(err) {
      return res.write('Error!');
    }
    var cart;
    orders.forEach(function(order) {
      cart = new Cart(order.cart);
      order.items = cart.generateArray();
    });
    res.render('user/profile', { orders: orders, name: req.user.email});
  });
});

router.get('/logout', isLoggedIn, function(req, res, next) {
  req.logout();
  res.redirect('/');
});

router.use('/', notLoggedIn, function(req, res, next) {
  next();
});

router.get('/signup', function(req, res, next) {
  res.render('user/signup', {csrfToken: req.csrfToken(), message: req.flash("error")});
});

router.post('/signup', passport.authenticate('local.signup' , {
  successRedirect: '/user/profile',
  failureRedirect: '/user/signup',
  failureFlash: true
}));

router.get('/signin', function(req, res, next) {
  res.render('user/signin', {csrfToken: req.csrfToken(), message: req.flash("error") });
});

router.post('/signin', passport.authenticate('local.signin', {
  successRedirect: '/user/profile',
  failureRedirect: '/user/signin',
  failureFlash: true
}));

module.exports = router;

function isLoggedIn(req, res, next) {
  if(req.isAuthenticated()) {
    return next();
  }
  req.flash("error", "You must be logged in to do that!");
  res.redirect('/');
}

function notLoggedIn(req, res, next) {
  if(!req.isAuthenticated()) {
    return next();
  }
  res.redirect('/');
}