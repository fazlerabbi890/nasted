// discount

const price = 1200;

if(price >= 5000){
    const discount = price * 25 / 100;
    const payment = (price - discount);
    console.log(payment);
}
else if( price>=2000){
    const discount = price * 5 /100;
    const payment = price - discount;
    console.log(payment)
}
else{
    console.log(price)
}



// resturant- discount

const age = 70;
const money = 500;
if(age<=12){
    console.log("You can free for food")
}
else if(age>=60){
    const discount = money * 50 / 100;
    const payment = money - discount;
    console.log( payment)
}
else{
    console.log(money);
}