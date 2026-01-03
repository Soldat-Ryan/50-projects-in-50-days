const tagsEl = document.getElementById('tags');
const textarea = document.getElementById('textarea');

textarea.focus()

// https://developer.mozilla.org/en-US/docs/Web/API/Element/keyup_event
textarea.addEventListener('keyup', (e) => {
    // console.log(e); // keyup
    // console.log(e.target); // l'élément  textarea
    // console.log(e.target.value); // la value de l'élément textarea (le caractère tapé au clavier)
    createTags(e.target.value);

    // Au bout de 10 milliseconds, on reset textarea
    if (e.key === 'Enter') {
        setTimeout(() => {
            e.target.value = '';
        }, 10)
        randomSelect()
    }
})

function createTags(input) {
    /* 
    https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
    https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/String/trim
    https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/map
    D'abord crée un array dont les éléments sont split selon les virgules
    On filtre sur les éléments non vide avec -> tag.trim() != ''
    On supprimer ensuite les espaces autour des mots avec la map()
    */
    const tags =  input.split(',').filter(tag => tag.trim() != '').map(tag => tag.trim());
    tagsEl.innerHTML = '';
    tags.forEach(tag => {
        const tagEl = document.createElement('span');
        tagEl.classList.add('tag');
        tagEl.innerText = tag;
        tagsEl.appendChild(tagEl);
    })
}

function randomSelect() {
    const times = 30; //nb of highlights before a choice is seleted

    /* 
    La fonction pickRandomTag va être appelée toutes les 100 millisecondes
    Elle renvoie un tag aléatoire parmi tous les tags dispos
    À cet élément on lui applique la classe highlight
    Puis on lui retire au bout de 100 millisecondes
    */
    
    const interval = setInterval(() => {
        const randomTag = pickRandomTag();

        highlightTag(randomTag);

        setTimeout(() => {
            unhighlightTag(randomTag)
        }, 100);
    }, 100);

    /*
    https://developer.mozilla.org/fr/docs/Web/API/Window/clearInterval
    Ici ça permet de stopper le highlight/unhighlight en continue 
    du code précédent
    La méthode globale clearInterval() permet d'annuler une action 
    répétée minutée initiée via un appel à setInterval()
    Puis de faire juste l'action aléatoire de choix du tag une seule fois
    */

    setTimeout(() => {
        clearInterval(interval)

        setTimeout(() => {
            const randomTag = pickRandomTag();
            highlightTag(randomTag);
        }, 100)

    }, times * 100);
}

function pickRandomTag() {
    const tags = document.querySelectorAll('.tag');
    return tags[Math.floor(Math.random() * tags.length)]
}

function highlightTag(tag) {
    tag.classList.add('highlight');
}

function unhighlightTag(tag) {
    tag.classList.remove('highlight');
}