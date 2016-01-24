Router.configure({
  layoutTemplate: 'layout',
  notFoundTemplate: '404'
});

Router.route('/', function () {
  this.render('products');
});

Router.route('/about', function () {
  this.render('about');
});

Router.route('/products/:id', function () {
  var that = this;
  var product = Products.findOne({
    _id: new Meteor.Collection.ObjectID(that.params.id)
  });
  this.render('productDetail', {
    data: product
  });
});
