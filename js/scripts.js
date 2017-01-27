// Business Logic
function Pizza(size) {
  this.toppings = [];
  this.size = size;
  this.price = 0;
}

function Order(customerName, orderNumber) {
  this.customerName = customerName;
  this.orderNumber = orderNumber;
}

Pizza.prototype.cost = function() {
  if (this.size === 'small') {
    this.price = 6;
    console.log(newPizza.price);
  } else if (this.size === 'medium') {
    this.price = 9;
    console.log(newPizza.price);
  } else if (this.size === 'large') {
    this.price = 12;
    console.log(newPizza.price);
  }
  for (i=0; i < this.toppings.length; i++) {
    this.price += 1;
    console.log(this);
  }
}


// User Interface Logic


var customerPizza = new Pizza('medium');

$(function() {
  $('form#customer-input').submit(function(e) {
    var inputtedToppings =  $('input:checkbox[name="toppings"]:checked').each(function() {
      customerPizza.toppings.push($(this).val());
    });
    console.log(customerPizza.toppings);
    e.preventDefault();
  });

});
