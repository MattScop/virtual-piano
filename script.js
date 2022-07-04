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

    if (!keyPress) return // add class if data-key is found
    keyPress.classList.add('keyPressed');

    if (!audio) return // check if audio exists and note is not repeated
    if (!e.repeat) {
        audio.currentTime = 0; // rewind the audio from start each press
        audio.play();

        if (para.innerText.length > 8) {
            para.textContent = ''; // clear screen after 3 notes
        }
        para.textContent += `${keyPress.dataset.name} `; 
        display.appendChild(para); // print note played
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

