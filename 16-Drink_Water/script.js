const smallCups = document.querySelectorAll('.cup-small');
const liters = document.getElementById('liters');
const percentage = document.getElementById('percentage');
const remained = document.getElementById('remained');

updateBigCup();

smallCups.forEach((cup, idx) => {
    // idx : index des noeuds
    cup.addEventListener('click', () => {
        highlightCups(idx)
    })
})

function highlightCups(idx) {
    // Si l'index est déjà full mais que son voisin ne l'est pas on décrémente le full
    if (smallCups[idx].classList.contains('full') 
    && !smallCups[idx].nextElementSibling.classList.contains('full')) {
        idx--
    }
    // On veut colorer toutes les cups de 0 à idx
    smallCups.forEach((cup, idx2) => {
        if (idx2 <= idx) {
            cup.classList.add('full');
        }
        else {
            cup.classList.remove('full');
        }
    })
    updateBigCup();
}

function updateBigCup() {
    const fullCups = document.querySelectorAll('.cup-small.full').length
    const totalCups = smallCups.length;
    console.log(fullCups);
    console.log(totalCups);

    if(fullCups === 0) {
        percentage.style.visibility = 'hidden';
        percentage.style.height = 0;
    } else {
        // nb de cups full / total de cups * taille de la grande cup
        percentage.style.visibility = 'visible';
        percentage.style.height = `${fullCups / totalCups * 330}px`
        percentage.innerText = `${fullCups / totalCups * 100 }%`;
    }

    if (fullCups === totalCups) {
        remained.style.visibility = 'hidden';
        remained.style.height = 0;
    } else {
        remained.style.visibility = 'visible';
        liters.innerText = `${2 - (250 * fullCups / 1000)}L`
    }
}