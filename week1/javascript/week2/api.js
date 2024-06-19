async function test(){
    let url = 'https://catfact.ninja/fact';
    let response = await fetch(url);
    let catInfo = await response.json();
    console.log(catInfo.length);
    console.log(catInfo.fact);
}

test()


let text = 'visit w3schools'
let n = text.search('w3schools')
console.log(n);

let string = 'Make me smile and we can all smile together';
let word = string.replace(/[abc]/ig, ':D');
console.log(word);

function isLessCharacterN(string){
    if(string[string.length = 1] === 'n'){
        return true
    }
    else{
        return false
    }
}

console.log(isLessCharacterN)