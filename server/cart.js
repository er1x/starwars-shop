Meteor.methods({
  'chargeCard': function(stripeToken, items, user) {
    var amount = getAmount(items);
    var Stripe = StripeAPI(Meteor.settings.private.stripe_sk);
    Stripe.charges.create({
      amount: amount,
      currency: 'eur',
      source: stripeToken
    }, function(err, charge) {
      console.log(err, charge);
    });
  }
});

function  getAmount(items) {
  return 99999;
}
