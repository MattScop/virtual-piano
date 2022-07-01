// **STEP 1: grab keyCode from key press**
// window.addEventListener('keyup', (e) => {
//     console.log(e)
// })

// **STEP 2: play a note**

// window.addEventListener('keyup', (e) => {
//     const audio = document.querySelector(`audio[data-key="${e.key}"]`);
//     if (!audio) return // stop the function if no data-key is found
//     audio.currentTime = 0;
//     audio.play();
// })

// **STEP 3: add class if played**

window.addEventListener('keyup', (e) => {
    const keyPress = document.querySelector(`div[data-key="${e.key}"]`);
    const audio = document.querySelector(`audio[data-key="${e.key}"]`);

    keyPress.classList.add('keyPressed')
    keyPress.addEventListener('transitionend', () => {
        console.log("hello")
    });

    if (!audio) return // stop the function if no data-key is found
    audio.currentTime = 0;
    audio.play();
})
    
    
