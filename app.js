const buttons = document.querySelectorAll('button');

const screen = document.getElementById('screen');

for (let button of buttons) {
    button.addEventListener('click', (e) => {
        const buttonText = e.target.innerText;
        console.log(buttonText);
        if (buttonText === 'C') {
            screen.value = "";
        }
        else if(buttonText=='=')
        {
            try{
                screen.value=eval(screen.value);
            }
            catch(e){
                // console.log('Ierror: ',e);
                screen.value='Invalid Operation';
            }

            // screen.value=eval(screen.value);
            // eval() only evaluates valid expressions, else it gives error
        }
        else {
            if (buttonText === 'X')
                screen.value += '*'
            // else if(buttonText==='**'){
            //     screen.value+='^'
            // }
            else
                screen.value += buttonText; //screen.value treated as string type, and chars added char by char to string
        }
    })
}