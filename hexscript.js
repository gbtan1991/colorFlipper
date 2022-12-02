// DECLARATION OF ARRAY AND ELEMENTS //

const colorArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 'A', 'B', 'C', 'D', 'E', 'F'];
const btn = document.getElementById('btn');
const color = document.querySelector('.colorName');

// BUTTON ON CLICK FUNCTION //
btn.addEventListener('click', () => {
    
    let hexColor = '#';
    for(let i = 0; i < 6; i++) {
        hexColor += colorArray[getRandomNumber()];
    
    }
    
    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;

});


let getRandomNumber = () => Math.floor(Math.random() * colorArray.length);
     
    
