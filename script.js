let screen = document.getElementById('screen')
let buttons = document.querySelectorAll('button');
let screenValue = 0;
for(item of buttons){
item.addEventListener('click', (e) => {
    buttonText = e.target.innerText;
    console.log('The button text is', buttonText)
    if(buttonText == 'X'){
        buttonText = '*';
        screenValue += buttonText; 
        screen.value = screenValue;
    }
    else if(buttonText == 'C'){
        screenValue = 0;
        screen.value = screenValue;
    }
    else if(buttonText == '='){
        screen.value = eval(screenValue)

    }
    else{
        screenValue += buttonText; 
        screen.value = screenValue;
    }
})
}