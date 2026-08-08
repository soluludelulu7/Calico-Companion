const calico = document.createElement('img');
calico.style.position = 'fixed';
calico.style.height = '50px';
calico.style.zIndex = '1000000';

const sit = chrome.runtime.getURL('images/sit.png');
const walk1 = chrome.runtime.getURL('images/walk(1).png');
const walk2 = chrome.runtime.getURL('images/walk(2).png');

calico.src = sit;
document.body.appendChild(calico);

window.addEventListener('mousemove', moveTheCalico);

let sitTimer;
function moveTheCalico(event) {
    calico.style.left = (event.clientX + 15) + 'px';
    calico.style.top = (event.clientY + 15) + 'px';

    if (event.movementX < 0) {
        calico.style.transform = 'scaleX(1)';
    }
    else {
        calico.style.transform = 'scaleX(-1)';
    }

    if (Math.floor(Date.now() / 350) % 2 == 0) {
        calico.src = walk1;
    }
    else {
        calico.src = walk2;
    }

    clearTimeout(sitTimer);
    sitTimer = setTimeout(() => {
        calico.src = sit;
    }, 500);
}
