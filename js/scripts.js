// Business Logic
function Pizza(size) {
  this.pizzaSize = size;
  this.price = 0;
  this.toppings = [];
}

// function Order(customerName, orderNumber) {
//   this.customerName = customerName;
//   this.orderNumber = orderNumber;
// }

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
// function displayOrder() {
//   var html;
//   $('.show-order').append(
//     html += '<ul>';
//     customerPizza.toppings.forEach(function(topping) {
//       html += '<li>' + topping + '</li>';
//     });
//     html += '</ul>';
//   );
// }

// User Interface Logic
$(function() {
  $('form#customer-input').submit(function(e) {
    var inputtedToppings =  $('input:checkbox[name="toppings"]:checked');
    var inputtedSize = $('#input-size').val();
    var customerPizza = new Pizza(inputtedSize);
    inputtedToppings.each(function() {
      customerPizza.toppings.push($(this).val());
    });
    customerPizza.cost();
    //displayOrder();
    console.log(customerPizza);
    e.preventDefault();
  });

});
