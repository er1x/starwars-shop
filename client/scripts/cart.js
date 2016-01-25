Template.cart.helpers({
  items: function(){
    var items = [];
    Cart.items().forEach(function(item) {
      items.push({
        _id: item.relationId,
        item: Products.findOne({_id: new Meteor.Collection.ObjectID(item.relationId)}),
        amount: item.quantity
      });
    });
    console.log(items);
    return items;
  },
  numItems: function(){
    return Cart.numItems();
  },
  totalPrice: function() {
    var price = 0;
    Cart.items().forEach(function(item) {
      var product = Products.findOne({_id: new Meteor.Collection.ObjectID(item.relationId)});
      price += item.quantity * product.price;
    });
    return price;
  }
});

Template.cart.events({
  "click #pay": function(event, template){
    alert('pagando!');
  }
});


/*
_id: "hwmxBQdzSYmHShLFb"
quantity: 1
relationId: "569019022a1195022eb52132"
relationType: "Products"
*/
