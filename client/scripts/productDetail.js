Template.productDetail.events({
  'click button': function(event, template){
    Cart.add({
      relationType: 'Products',
      relationId: template.data._id._str,
      quantity: 1
    });
    toastr.success(null, 'Item añadido');
  }
});
