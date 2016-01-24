Products = new Meteor.Collection('products');

Cart.configure({
  Products: {
    collection: Products
  }
});
