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

const para = document.createElement('p');
para.style.cssText = "color: white; padding: 10px; text-align: center; font-size: 20px; letter-spacing: 0.25em; font-style: italic;";

const display = document.querySelector('.display');

window.addEventListener('keydown', (e) => {
    const keyPress = document.querySelector(`div[data-key="${e.key}"]`);
    const audio = document.querySelector(`audio[data-key="${e.key}"]`);
    
    if (!keyPress) return // stop the function if no data-key is found
    keyPress.classList.add('keyPressed');
    
    if (!audio) return // stop the function if no data-key is found
    if (!e.repeat) {
        audio.currentTime = 0; // rewind the audio from start each press
        audio.play();
    }

    para.textContent += e.key;
    display.appendChild(para);
})

window.addEventListener('keyup', (e) => {
    const keyPress = document.querySelector(`div[data-key="${e.key}"]`);

    if (!keyPress) return
    keyPress.classList.remove('keyPressed')
})
    
    
