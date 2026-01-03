const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkBoxes);
checkBoxes();
function checkBoxes() {
    /* C'est pour calculer au moment du scrolling
    à partir de quelle hauteur on ajoute une box.
    
    Si boxTop (le haut de la box) est plus petit que le triggerBottom 
    On veut ajouter la classe shox, sinon on veut la retirer*/
    const triggerBottom = window.innerHeight / 5 * 4;
    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;
        if (boxTop < triggerBottom) {
            box.classList.add('show');
        } else {
            box.classList.remove('show');
        }
    })
}