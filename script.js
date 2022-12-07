// DECLARATION OF ARRAY AND ELEMENTS //

const colorArray = ['red', 'green', 'blue', 'magenta', 'cyan', 'yellow', 'gray', 'white', 'brown', 'pink', 'orange'];
const btn = document.getElementById('btn');
const color = document.querySelector('.colorName');

// BUTTON ON CLICK FUNCTION //
btn.addEventListener('click', () => {
    let randomNumber = getRandomNumber();

    document.body.style.backgroundColor = colorArray[randomNumber];
    color.textContent = colorArray[randomNumber];
});


let getRandomNumber = () => Math.floor(Math.random() * colorArray.length);
     
    
