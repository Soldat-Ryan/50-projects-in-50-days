const sounds = ['camera-shutter', 'glass-break','heartbeat','thunder','lighting','mouse-click','zip', 'kiss','cat-meow', 'cat-polka', 'cat-arguing', 'cat-german', 'cat-happy'];


sounds.forEach(sound => {
    const btn = document.createElement('button');
    btn.classList.add('btn');
    btn.innerText = sound;

    btn.addEventListener('click', () => {
        stopSounds();
        document.getElementById(sound).play();
    })

    document.getElementById('buttons').appendChild(btn);
})

function stopSounds() {
    sounds.forEach(sound => {
        const song = document.getElementById(sound);
        song.pause();
        song.currentTime = 0;
    })
}