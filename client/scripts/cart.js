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
  "submit .form-horizontal": function(event, template){
    event.preventDefault();
    Stripe.card.createToken({
      number: $('#ccnum').val(),
      cvc: $('#cvc').val(),
      exp_month: $('#exp-month').val(),
      exp_year: $('#exp-year').val()
    }, function(status, response) {
        if (status !== 200) {
          toastr.error(null, response.message);
          return;
        }
        stripeToken = response.id;
        Meteor.call('chargeCard',
                    stripeToken,
                    Cart.items().fetch() ,
                    Meteor.userId(),
                  function(err, result) {
                    if (err) {
                      toastr.error(null, err);
                    } else {
                      toastr.success(null, 'Compra realizada!');
                      Cart.empty();
                    }
                  });
    });
  }
});
