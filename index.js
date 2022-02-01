function paymentDew(customerOrder,productPrice,moneyRecept){
    var paymantTotal = customerOrder*productPrice;
    console.log('Total biil:',paymantTotal);
   var bilOrder = paymantTotal;
   var totalDew = bilOrder - moneyRecept;
   return totalDew;


}

var productOrder = 5 ;
var perProductPrice = 40 ;
var customerMoney = 180;
var totalDewOrder= paymentDew(productOrder,perProductPrice,customerMoney)
console.log('dew bill:', totalDewOrder);