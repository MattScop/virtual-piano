// STEP 1: grab keyCode from key press
// window.addEventListener('keyup', (e) => {
//     console.log(e)
// })

// STEP 2: play a note

window.addEventListener('keyup', (e) => {
    const audio = document.querySelector(`audio[data-key="${e.key}"]`);
    if (!audio) return
    console.log(audio)
    audio.play();
    audio.currentTime = 0;
})

    
    
