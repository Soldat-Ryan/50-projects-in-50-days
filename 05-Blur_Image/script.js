const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

let load = 0;

/* Toutes les 30ms, on appelle la fonction blurring*/
let int = setInterval(blurring, 30);

function blurring() {
    load++;

    if (load > 99) {
        /* Stop la fonction setInterval */
        clearInterval(int);
    }
    loadText.innerText = `${load}%`;
    loadText.style.opacity = scale(load, 0, 100, 1, 0);
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}

/* opacity takes 1 or 0, we want to map to 0% and 100% */
// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}