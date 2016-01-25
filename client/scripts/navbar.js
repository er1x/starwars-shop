
Template.navbar.helpers({
  itemsInCart: function() {
    return Cart.numItems();
  }
});
