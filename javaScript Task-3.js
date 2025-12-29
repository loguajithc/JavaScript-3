
    var num = prompt("Enter a number:");
  num = Number(num);
  if(num > 0) {
    console.log("The number is Positive");
  } 
  else if (num <0){
    console.log("The number is Negative");
  } 
  else if (num ===0){
    console.log("The number is Zero");
  } 
  else {
    console.log("Invalid input");
  } 


   function welcomeMessage() {
    let hour= prompt("hour:");
    hour =Number(hour);
    if (hour>=0&& hour<12) {
      console.log("Good Morning");
    } 
    else if(hour >=12 && hour < 18) {
      console.log("Good Afternoon");
    } 
    else if (hour >=18 && hour <=23) {
      console.log("Good Evening");
    } 
    else {
      console.log("Invalid hour");
    }
  }
  welcomeMessage();



   var n= prompt("number:");
  n =Number(n);
  for (var  a=1;a<=n; a++) {
    let pattern = "";

    for (let b=1; b<= a;b++) {
      pattern = pattern+b;
    }
    console.log(pattern);
  }



    var num = prompt("Enter a number:");
  num = Number(num);
  var sum =0;
  while (num >0) {
    var digit =num%10;  
    sum= sum + digit;    
    num= Math.floor(num/10);
  }
  console.log("Sum of digits is: "+sum);



    var limit= prompt("Enter the limit:");
  limit =Number(limit)
  var count =0;
  for(var a = 1; a<= limit;a++){
    if(a %2!==0) {
      count++;
    }
  }
  console.log("Total odd numbers "+limit +count)



   var a = prompt("Enter first number:");
  var b = prompt("Enter second number:");
  var c = prompt("Enter third number:");
  a = Number(a);
  b = Number(b);
  c = Number(c);
  if(a <=b && a<=c) {
    console.log("Smallest number is:"+a);
  } 
  else if(b <=a && b<=c){
    console.log("Smallest number is:"+b);
  } 
  else {
    console.log("Smallest number is: "+c);
  }



    var items= prompt("Enter number of items:");
  var price= prompt("Enter price per item:");
  items =Number(items);
  price =Number(price);
  var total= items*price;
  alert("Total Bill Amount is:"+total);



    let num =prompt("Enter a number:");
  num = Number(num);
  let sum =0;
  while (num> 0) {
    let digit= num%10; 
    sum=sum + digit;          
    num= Math.floor(num/ 10); 
  }
  console.log("Sum of digits is: "+sum);


   let base = prompt("Enter the base number:");
  let exponent = prompt("Enter the exponent:");
  base = Number(base);
  exponent = Number(exponent);
  let result= 1;
  for (let i=1; i<=exponent;i++) {
    result =result *base;
  }
  alert(base +"power is:" + exponent+ result);



    var rupees= prompt("Enter amount in Rupees:");
  rupees =Number(rupees);
  var rate =83;
  var dollars = rupees / rate;
  console.log("₹"+rupees + "= $" +dollars.toFixed(2));



