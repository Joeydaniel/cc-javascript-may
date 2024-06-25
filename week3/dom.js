// const heading = document.getElementById('main-heading');

// console.log(heading.innerHTML);

// let paragraphs = document.getElementsByTagName('p')

// console.log(paragraphs)




// let subHeading = document.getElementsByClassName('sub-heading');

// console.log(subHeading[1]);



// let subHeading = document.getElementsByClassName('sub-heading');
// console.log(subHeading).innerHTML



// let newTopic = document.getElementById('main-heading').innerHTML = 'New Topic'

// let paragraphs = document.getElementsByTagName('p');
// for (let i = 0; i < paragraphs.length; i++){
//     paragraphs[i].innerHTML = 'I sabi Javascript';
    
// }



let paragraphs = document.getElementsByTagName('p');
for (let i = 0; i < paragraphs.length; i++){
    if (i === paragraphs.length - 1){
        paragraphs[i].innerHTML = 'This thing hard sha';
    } else {
        paragraphs[i].innerHTML = 'I sabi javascript'
    }
    
}


let subHeadings = document.getElementsByClassName('sub-heading');
subHeadings[1].style.fontSize = '100px';