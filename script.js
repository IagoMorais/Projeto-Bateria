document.body.addEventListener('keyup', () => {
    playSound(event.code.toLowerCase());
})


document.querySelector('.composer button').addEventListener('click', ()=> {
    let song = document.querySelector('#input').value;

    if(song !== '') {
        let songArray = song.split('');
        playComposition(songArray);
    }
})


function playSound(sound) {
    let audioElemente = document.querySelector(`#s_${sound}`);
    let keyElement = document.querySelector(`div[data-key="${sound}"]`);

    if (audioElemente) {
        audioElemente.currentTime = 0;
        audioElemente.play();
    }

    if (keyElement) {
        keyElement.classList.add("active");

        setTimeout(()=>{
            keyElement.classList.remove("active");
        }, 300);
    }
}

function playComposition(songArray) {
    let wait = 0;


    for(let sonItem of songArray) {
        setTimeout(()=>{
            playSound(`key${sonItem}`);
        }, wait);

        wait += 250;
      
    }
}