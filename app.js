// Code to Change Sizes

const sizes = document.querySelectorAll('.size');

function changeSize(){
    sizes.forEach((size) => size.classList.remove('active'));

    this.classList.add('active');
}

sizes.forEach((size) => {
    size.addEventListener('click', changeSize);
});


// Colors ka code

const colors = document.querySelectorAll('.color');
const shoes = document.querySelectorAll('.shoe');
const gradients = document.querySelectorAll('.gradient');

let prevColor = "blue";
let animationEnd = true;

function changeColor(){

    if(animationEnd === false){
        console.log("Error");
        return;
    }
    // Color Dot
    let primary = this.getAttribute('primary');

    colors.forEach(color => color.classList.remove('active'));
    this.classList.add('active');
    
    // Setting the color value to primary color
    document.documentElement.style.setProperty('--primary', primary);

    // Changing the image of the show to the color
    let color = this.getAttribute('color');
    let shoe = document.querySelector(`.shoe[color="${color}"]`);

    shoes.forEach(shoe => shoe.classList.remove('show'));
    shoe.classList.add('show');

    // Displaying the Gradient
    let gradient = document.querySelector(`.gradient[color="${color}"]`);
    let prevGradient = document.querySelector(`.gradient[color="${prevColor}"]`)

    gradients.forEach(g => g.classList.remove('first', 'second'));
    prevGradient.classList.add('second');
    gradient.classList.add('first');

    prevColor = color;

    animationEnd = false;

    gradient.addEventListener('animationend', () => {
        animationEnd = true;
    })
}

colors.forEach(color => color.addEventListener('click', changeColor));




let x = window.matchMedia("(max-width: 1000px)");

const shoeBg = document.querySelector('.shoeBackground');

function changeHeight(){
    if(x.matches){
        let shoeHeight = shoes[0].offsetHeight;
        shoeBg.style.height = `${shoeHeight * 0.9}px`;
    }
    else{
        shoeBg.style.height = "475px";
    }
}

changeHeight();

window.addEventListener('resize', changeHeight);