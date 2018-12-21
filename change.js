var cointypes = [200,100,50,20,10,5,2,1];
function getChange(price, paid) {
  var difference = paid - price;
  var change = [];
  cointypes.forEach(function(coin) {
    while (difference >= coin) {
      change.push(coin);
      difference = difference - coin;
    }
  });
  return change;
}
