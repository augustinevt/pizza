function Pizza(toppingOne, toppingTwo, toppingThree, size) {
  this.toppingOne = toppingOne;
  this.toppingTwo = toppingTwo;
  this.toppingThree = toppingThree;
  // this.toppingFour = toppingFour;
  this.size = size;
}

Pizza.prototype.price = function() {
  if (this.size === "large") {
    return 18;
  } else if ( this.size === "medium") {
    return 15;
  }else{
    return 10;
  }
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
      $('#displayPizza .size').text(pizza.size);
    $('#displayPizza .price').text(pizza.price());
    $('#displayPizza .toppingOne').text(pizza.toppingOne);
    $('#displayPizza .toppingTwo').text(pizza.toppingTwo);
    $('#displayPizza .toppingThree').text(pizza.toppingThree);
  //   $('#displayPizza .toppingFour').text(pizza.toppingFour);
  });

  $("#displayPizza").click(function(){
    $('#cloud').fadeOut();
    $('#displayPizza').fadeOut();
  });


});
