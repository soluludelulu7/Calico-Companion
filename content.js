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
let walkTimer;
function moveTheCalico(event) {
    calico.style.top = (event.clientY + 35) + 'px';
    calico.style.left = (event.clientX + 0) + 'px';

    if (event.movementX < 0) {
        calico.style.transform = 'scaleX(1)';
    }
    else {
        calico.style.transform = 'scaleX(-1)';
    }

    if (!walkTimer) {
        walkTimer = setTimeout(() => {
            if (calico.src.includes('walk(1).png')) {
                calico.src = walk2;
            }
            else {
                calico.src = walk1;
            }
            walkTimer = null;
        }, 350);
    }

    clearTimeout(sitTimer);
    sitTimer = setTimeout(() => {
        clearTimeout(walkTimer);
        walkTimer = null;
        calico.src = sit;
    }, 500);
}