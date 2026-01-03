const labels = document.querySelectorAll('.form-control label');

labels.forEach(label => {
    label.innerHTML = label.innerText
    .split('') // mettre chaque lettre dans un array
    .map((letter, ind) => `<span style="transition-delay:${ind * 50}ms">${letter}</span>`) // ajouter le span
    .join(''); // reconvertir en une chaine
})