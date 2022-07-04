// **STEP 1: grab keyCode from key press**
// DONE
// **STEP 2: play a note**
// DONE
// **STEP 3: add class if played**
// DONE



const para = document.createElement('p');
para.style.cssText = "color: white; padding: 10px; text-align: center; font-size: 20px; letter-spacing: 0.25em; font-style: italic; margin-top: 0";

const display = document.querySelector('.display');
const keys = document.querySelectorAll('[data-name]')

window.addEventListener('keydown', (e) => {
    const keyPress = document.querySelector(`div[data-key="${e.key}"]`);
    const audio = document.querySelector(`audio[data-key="${e.key}"]`);
    
    if (para.innerText.length > 8) {
        para.textContent = ''; // clear screen after 3 notes
    }
    
    if (!keyPress) return // stop the function if no data-key is found
    keyPress.classList.add('keyPressed');
    
    if (!audio) return // stop the function if no data-key is found
    if (!e.repeat) {
        audio.currentTime = 0; // rewind the audio from start each press
        audio.play();
        para.textContent += `${keyPress.dataset.name} `;
        display.appendChild(para);    
    }
})

window.addEventListener('keyup', (e) => {
    const keyPress = document.querySelector(`div[data-key="${e.key}"]`);
    
    if (!keyPress) return
    keyPress.classList.remove('keyPressed')
})

window.onload = () => {
    alert("Virtual Piano is Designed to work ONLY with a Computer and a Keyboard. Press OK to continue")
}
    
