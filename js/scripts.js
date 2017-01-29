// Business Logic
function Pizza(size) {
  this.pizzaSize = size;
  this.price = 0;
  this.toppings = [];
}

function Order(customerName, address, pizza) {
  this.customerName = customerName;
  this.address = address;
  this.pizza = pizza;
  this.orderNumber = 0;
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

function genericOrderNumber() {
  return Math.round(Math.random() * (1000000) + 1);
}


// User Interface Logic
function resetForm() {
  var inputtedToppings =  $('input:checkbox[name="toppings"]');
  var inputtedSize = $('#input-size').val("");
  var inputtedName = $('input#name').val("");
  var inputtedAddress = $('#address').val("");
}

Order.prototype.showOrder = function() {
  var html = "";
  // if (!this.pizza.toppings[0] || !this.customerName) {
  //   console.log(this);
  //   html += '<h2 id="thankMessage">Thanks, Please come back again!</h2>';
  // } else {
    html = '<h1>Thanks for your order, ';
    html += this.customerName;
    html += '!</h1>';
    html += '<h2>Order # is ';
    html += genericOrderNumber();
    html += '</h2>';
    html += '<h2>Total: $';
    html += this.pizza.price;
    html += '</h2>';
    html += '<p>Your <span class="key-words">';
    html += this.pizza.pizzaSize;
    html += ' </span>pizza with:'
    html += '<ul>';
    for (var i=0; i<this.pizza.toppings.length; i++) {
      html += '<li>' + this.pizza.toppings[i] + '</li>';
    }
    if (this.address) {
      html += '</br><p>will be delivered to :</p><h2>';
      html += this.address;
      html += '</h2>';
      html += '<p>within <span class="key-words">1 hour</span> guaranteed!</p></br></br>';
    }
  // }

      html += '<button type="submit" id="anotherOrder" class="btn btn-danger">Place another Order</button>';
  $('.show-order').append(html);
}

$(function() {
  $('form#customer-input').submit(function(e) {
    var inputtedToppings =  $('input:checkbox[name="toppings"]:checked');
    var inputtedSize = $('#input-size').val();
    var customerPizza = new Pizza(inputtedSize);
    var inputtedName = $('input#name').val();
    var inputtedAddress = $('#address').val();
    var customerOrder = new Order(inputtedName, inputtedAddress, customerPizza);
    inputtedToppings.each(function() {
      customerPizza.toppings.push($(this).val());
    });
    customerPizza.cost();
    customerOrder.showOrder();
    $('form#customer-input').hide();
    resetForm();
    e.preventDefault();
    $('button#anotherOrder').click(function() {
      $('.show-order').hide();
      $('form#customer-input').show();
      $('#thankMessage').hide();
    });
  });
});
