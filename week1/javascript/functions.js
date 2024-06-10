function sayHello(name){
    console.log("Hello " + name);
}

sayHello("Joseph");
sayHello("Mike");
sayHello("John");
sayHello("Michael");
sayHello("Stephen");
sayHello("collins");
sayHello("Fatima");

function square(number){
    // return number * number;
    let answer = number * number;
    return answer;
}

alert(square(5));
console.log(square(5));
document.getElementById('display').innerHTML = square(5);