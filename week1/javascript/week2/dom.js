const elementByTag = document.getElementsByTagName('h1')
const elementById = document.getElementById('port').style.color = 'red'
const elementByContext = document.getElementsByClassName('paragraph')

elementById.textContent('we have a lot in common') 
elementByContext.length('we have a lot in common')
elementByTag.textContent('h3')
elementByTag.length('h3')

if (elementByContext > 0){
elementByTag[0].textContent = 'This paragraph has been updated';
}


const button = document.getElementById('btn')
button.addEventListener(function(){
    alert('go out');
});


function changeText(id){
    id.innerHTML = 'WELCOME';
}
