function Pizza(toppingOne, toppingTwo, toppingThree, size) {
  this.toppingOne = toppingOne;
  this.toppingTwo = toppingTwo;
  this.toppingThree = toppingThree;
  this.size = size;
}

Pizza.prototype.price = function() {
  return 34;
}


$(function(){


  //user clicks button
  $("#makePizza").click(function(){
    var one = $('#toppingOne').val();
    var two = $('#toppingTwo').val();
    var three = $('#toppingThree').val();
    var size = $('input[type="radio"]:checked').val();
    var pizza = new Pizza(one, two, three, size);
    console.log(pizza);
    $('#cloud').show();
    $('#displayPizza').show();
    $('#displayPizza .price').text(pizza.price());
    $('#displayPizza .toppingOne').text(pizza.toppingOne);
    $('#displayPizza .toppingTwo').text(pizza.toppingTwo);
    $('#displayPizza .toppingThree').text(pizza.toppingThree);
  });


});
