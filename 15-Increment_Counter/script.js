const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
    counter.innerText = 0;

    const updateCounter = () => {
        /* le + permet de convertir en type number */
        const target = +counter.getAttribute('data-target');
        const c = +counter.innerText;

        /* l'unité qui sera ajouté à chaque fois avant d'arriver à data-target */
        const increment = target / 200;

        if (c < target) {
            counter.innerText = `${Math.ceil(c + increment)}`;
            setTimeout(updateCounter, 1);
        } else {
            counter.innerText = target;
        }
    }

    updateCounter();
})