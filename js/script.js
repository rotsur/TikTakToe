'use strict';
let cells = document.querySelectorAll('#field td');

let i = 0;

const step = function () {
    this.textContent = ['X', 'O'][i % 2];
    this.removeEventListener('click', step);

    if (isVictory(cells)) {
        alert(`${this.textContent} WIN`);
        resetGame();
        i = 0;
    } else if (i == 8) {
        alert('ничья');
        resetGame();
        i = 0;
    } else {
        i++;
    }
};

start(cells);

function start(cells) {
    for (let cell of cells) {
        cell.addEventListener('click', step);
    }
}

function isVictory(cells) {
    let combs = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (let comb of combs) {
        if (
            cells[comb[0]].textContent == cells[comb[1]].textContent &&
            cells[comb[1]].textContent == cells[comb[2]].textContent &&
            cells[comb[0]].textContent != ''
        ) {
            return true;
        }
    }

    return false;
}

function resetGame() {
    for (let cell of cells) {
        cell.removeEventListener('click', step);
        cell.textContent = '';
        cell.addEventListener('click', step);
    }
}