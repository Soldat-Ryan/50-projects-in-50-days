const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

jokeBtn.addEventListener('click', generateJoke);

generateJoke();

/* Using async / await 
await devant une fonction asynchrone ce qui est le cas de fetch() et .json()
si on met await dans une fonction on doit mettre async devant
*/
async function generateJoke() {
    const config = {
        headers: {
            'Accept':'application/json'
        }
    }
    const res = await fetch('https://icanhazdadjoke.com', config);
    const data = await res.json();
    jokeEl.innerHTML = data.joke;
}

/* Using .then()
function generateJoke() {
    const config = {
        headers: {
            'Accept':'application/json'
        }
    }
    fetch('https://icanhazdadjoke.com', config)
    .then(res => res.json())
    .then(data => {
        jokeEl.innerHTML = data.joke;
    });
}
*/
