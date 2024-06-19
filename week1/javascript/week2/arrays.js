const cars = [
    'Mercedes',
    'BMW',
    'Toyota',
    'Honda',
    'Nissan',
    'Peugeot',
    'Audi'
]

// console.log(cars);

cars[7] = 'Hyundai';
cars[5] = 'Ford';
// console.log(cars);

for (let count = 0; count < cars.length; count++){
    console.log(cars[count]);

    if (cars[count] === 'Honda'){
        console.log(cars[count]);
    cars[count] = 'ferrari';
    }
}

cars.push('Rolls Royce');
cars.push('Porsche');
console.log(cars);
cars.pop()
console.log(cars);
console.log(cars.pop())

console.log(cars.length)

console.log(cars.join())



// Exercise 1: The sum of two numbers 

function addition(a, b){
    return a + b
}

console.log(addition(3, 2));
console.log(addition(-3, -6));
console.log(addition(7, 3));


// Exercise 2: Convert Minutes to Seconds
function convert(minutes){
    return minutes * 60;
}

console.log(convert(5))
console.log(convert(3))
console.log(convert(2))


// Exercise 3: 

function increase(number){

return number + 1;

}
console.log(increase(0))
console.log(increase(9))
console.log(increase(-3))


function addUp(number){
    let sum = 0
    for (let count = 1; count <= number; count++){
        sum = sum + count;
    }

    return sum

}



console.log(addUp(4)) 
console.log(addUp(13))
console.log(addUp(600))



function charCount(char, word){
    let total = 0;
    for (let count = 0; count < word.length; count++){
        if (word[count] === char){
            total = total + 1;

        }
    }
    return total;
}

console.log(charCount('a', 'edabit'))
console.log(charCount('c', 'Chamber of secrets'))
 console.log(charCount('b', 'big fat bubble'))
