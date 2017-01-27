function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
  this.price = 0;
}

function Order(customerName, orderNumber) {
  this.customerName = customerName;
  this.orderNumber = orderNumber;
}

Pizza.prototype.pizzaCost = function() {
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
  for (var i=0; i < this.toppings.length; i++) {
    this.price += 1;
    console.log(this);
  }
}

var newPizza = new Pizza(['olives', 'pepperoni'], 'medium');
