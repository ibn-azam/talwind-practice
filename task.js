let n =0;
while(n <=200){
    n++;
    if(n >=100){
        break;
    }
    console.log(n);
}
console.log(n);
console.log('number lock here')

for(let num =0; num <=200; num++){
    console.log(num);
    if(num >=100){
        break;  
    }   
}
console.log('for loop stop here');

let sum =0;
let i = 0;
while(i <=200){
    sum = sum +i;
    console.log(i);
     if(sum >=100){
        break;
    }
    i++;
}
console.log('subtotal:' ,sum);

let count =0;
while(count <=40){
    if(count % 2 !== 0){
        count++;
        continue;
    }
    console.log(count);
    count++;
}
console.log('continue to skip odd numbers.');

let n2 =55;
while(n2 <=85){
    if(n2 % 2 === 0){
        n2++;
        continue;
    }
    if(n2 % 5 === 0){
        n2++;
        continue;
    }
    console.log(n2);
    n2++;
}
