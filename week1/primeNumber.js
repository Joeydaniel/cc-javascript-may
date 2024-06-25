let number = 23;

for (let count = number -1; count >= 1; count--){
    console.log(number + ' / ' + count + ' = ' + (Math.floor(number / count)) + ' r ' + (number %  count))
    if (number != 1 && number % count === 0 ){
        console.log(number + ' is not a prime number');
        break;
    } 
    if (count === 1){
        console.log(number + ' is a prime number');
    }
}



