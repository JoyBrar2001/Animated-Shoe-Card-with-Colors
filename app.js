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

function changeColor(){
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
    gradients.forEach(g => g.classList.remove('first'));
    gradient.classList.add('first');
}

colors.forEach(color => color.addEventListener('click', changeColor));