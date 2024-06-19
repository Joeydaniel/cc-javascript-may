// ASSIGNMENT TWO

function fiftyThirtyTwenty(income){
    const needs = income * (50/100);
    const wants = income * (30/100);
    const savings = income * (20/100);

    return {
        'needs': needs,
        'wants': wants,
        'savings': savings
    }

}
// console.log(fiftyThirtyTwenty(1000))



// ASSIGNMENT THREE

/* create a function that takes two argument. Both arguments are integers a and b 
return tue if one of them is 10 or if their sum is 10*/
function makesTen(a,b){
    if (a === 10 || b ===10 || a + b === 10){
        return true;
} else {
    return false;
}
}



// minMax

function minMax(array){
    let smallest = Math.min(...array);
    let largest = Math.max(...array);

    return [smallest, largest];
}

// console.log(minMax([1, 2, 3, 4, 5]));



// create a functioon that changes specific words into emooticons
function emotify(sentence){
    sentence = sentence + ' ';
    let word = '';
    let newSentence = '';
for (let count = 0; count < sentence.length; count++){
    if (sentence[count] === ' '){
        if (word === 'smile'){
            word = ':D';
        } else if (word === 'grin'){
            word = ':)';
            } else if (word === 'sad'){
                word = ':(';
                } else if (word === 'mad'){
                    word = ':P';
        }
 newSentence = newSentence + word + ' ';
 word = '';
    } else {
        word = word + sentence[count];
    }
}
console.log(newSentence);
}
emotify('Make me smile');




// Exercise: how many vowels are in teh following words

// function countVowels(string){
//     let vowels = 'aeiou';
//     let count = 0;
// }
//     for (let i = 0; i < string.length; i++){
//         if (vowels.includes(string[i].toLowerCase())){

//     }
//     return count;
//     }
//     console.log(countVowels('hello'));



    function countVowels(string){
        let noOfVowels = 0;
        for (let count = 0; count < string.length; count++){
            if (string[count] === 'a' || string[count] === 'e' || string[count] === 'i' || 
            string[count] === 'o' || string[count] ==='u'){
                noOfVowels++;
            }
        }
        return noOfVowels;
    }

    console.log(countVowels('Celebration'))




    // Exercise Reverse the case
    function reverseCase(string){
        let newString = '';
        for (let count = 0; count < string.length; count++){
            if (string[count] === string[count].toUpperCase()){
                newString += string[count].toLowerCase();
                } else {
                    newString += string[count].toUpperCase();
        }
    }

    return newString;
    }

    console.log(reverseCase('Happy Birthday'))
    console.log(reverseCase('MANY THANKS'))
    console.log(reverseCase('spOnTanNeOus'))













