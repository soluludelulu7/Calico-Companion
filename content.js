const calico = document.createElement('img');
calico.style.position = 'fixed';
calico.style.height = '50px';
calico.style.zIndex = '1000000';
calico.style.pointerEvents = 'none';

const sit = chrome.runtime.getURL('images/sit.png');
const walk1 = chrome.runtime.getURL('images/walk(1).png');
const walk2 = chrome.runtime.getURL('images/walk(2).png');

calico.src = sit;
document.body.appendChild(calico);

window.addEventListener('mousemove', moveTheCalico);
let sitTimer;
let xPosition = 0;
let lastSwitchTime = 0;
let isItWalk1 = true;
function moveTheCalico(event) {
    calico.style.left = (event.clientX + 15) + 'px';
    calico.style.top = (event.clientY + 15) + 'px';

    const time = Date.now();
    if (event.clientX < xPosition) {
        calico.style.transform = 'scaleX(1)';
    }
    else {
        calico.style.transform = 'scaleX(-1)';
    }
    if (time - lastSwitchTime > 350) {
        if (isItWalk1 == true) {
            calico.src = walk2;
        }
        else {
            calico.src = walk1;
        }
        isItWalk1 = !isItWalk1;
        lastSwitchTime = time
    }
    xPosition = event.clientX;

    clearTimeout(sitTimer);
    sitTimer = setTimeout(() => {
        calico.src = sit;
    }, 500);
}