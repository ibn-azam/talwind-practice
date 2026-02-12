
// This is variable for Numeric
var month = 25;
var year = 2001;
var date = 14/11/2001;
var rate = 1250;
var discount = 250;
console.log(month);
console.log(year);
console.log(rate);

// this is variable for string 
var name ="Farhan Khan";
var address ="amborkhana sylhet";
var country ="Bangladesh";
console.log(name);
console.log(country);
console.log(typeof address);
console.log(address);

// This is variable for boolean 
var isRich = false;
var passed = true;
var failed = false;
console.log(passed);
console.log(typeof failed);

// Practice Task 
var total = 1000;
var orangePrize = 350;
var applePrize = 350;
var totalCost =(orangePrize + applePrize);
var storeName = "Farhan Store";
var isReturned = true;
console.log(total - totalCost);
console.log(typeof totalCost);
console.log(typeof isReturned);
console.log(typeof storeName);

var name = "Farhan Khan";
var birthYear = 2001;
var deathYear = 2048;
var age =(deathYear - birthYear);
console.log(name);
console.log(typeof name);
console.log(typeof birthYear);
console.log(typeof deathYear);
console.log(age);

var name = "Motin Treaders";
var rice = 35;
rice *= 3;
console.log(rice);

var milk = 90;
milk /= 2;
console.log(milk);

var airConditioner = 65000;
airConditioner -= 5000;
console.log(airConditioner);


// conditions 
var banglaPassMark = 33;

if(banglaPassMark <= 33){
    console.log('Student Will pass')
}
else{
    console.log('Student will fail')
}

const old = 10;
const price = 1000;

if(old <= 12){
    console.log('You can eat for free');
}
else if(age >= 60){
    const discount = price * 50 / 100;
    const payAmount = price - discount;
    console.log(payAmount);
}
else{
    console.log(price);
}

var passMark = 33;
var passed = true;

if(passMark <= 33 && passed == true){
    console.log('he can go to the next class');
}
else{
    console.log('he can not');
}

var rate = 300;
var haveId = true;

if(rate >= 350 && haveId == true){
    console.log('he will get discount');
} else{
    console.log('he will not get discount');
}

var methodology = "salafi";
var pray = 5;
var wearNiqab =true;

if(pray >=5 && methodology == "salafi" && wearNiqab == true){
    console.log('a salafi man/woman can marry him/her');
}
else{
    console.log('a salafi man/woman can not marry him/her');
}