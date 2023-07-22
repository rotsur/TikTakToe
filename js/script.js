'use strict';
let cells = document.querySelectorAll('#field td');
start(cells);
function start(cells) {
    let i = 0;
    for (let cell of cells) {
        cell.addEventListener('click', function step() {
            this.textContent = ['X', 'O'][i % 2];
            this.removeEventListener('click', step);
            i++;
        });
    }
}