// Business Logic
function Pizza(size) {
  this.pizzaSize = size;
  this.price = 0;
  this.toppings = [];
}

function Order(customerName, pizza) {
  this.customerName = customerName;
  this.pizza = pizza;
}

Pizza.prototype.cost = function() {
  if (this.pizzaSize === 'small') {
    this.price = 6;
  } else if (this.pizzaSize === 'medium') {
    this.price += 9;
  } else if (this.pizzaSize === 'large') {
    this.price += 12;
  }
  for (var i=0; i < this.toppings.length; i++) {
    this.price += 1;
  }
}



// User Interface Logic
Order.prototype.showOrder = function() {
  var html = '<h2>Thanks for your order, ';
  html += this.customerName;
  html += '</h2>';
  html += '<h3>Your toppings include:</h3>';
  html += '<ul>';
  console.log(this);
  for (var i=0; i<this.pizza.toppings.length; i++) {
    html += '<li>' + this.pizza.toppings[i] + '</li>';
  }
  $('.show-order').append(html);
}

$(function() {
  $('form#customer-input').submit(function(e) {
    var inputtedToppings =  $('input:checkbox[name="toppings"]:checked');
    var inputtedSize = $('#input-size').val();
    var customerPizza = new Pizza(inputtedSize);
    var inputtedName = $('input#name').val();
    var customerOrder = new Order(inputtedName, customerPizza);
    inputtedToppings.each(function() {
      customerPizza.toppings.push($(this).val());
    });
    customerPizza.cost();
    customerOrder.showOrder();
    // $('.show-order').text(customerPizza.toppings);
    e.preventDefault();
  });

});
