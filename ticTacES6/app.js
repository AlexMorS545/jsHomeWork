'use strict';

class Board {
	constructor() {
		this.gameTableElement = document.getElementById('game');
	}
	
	init(game) {
		this.game = game;
	}

	renderMap() {
		for (let row = 0; row < 3; row++) {
			const tr = document.createElement('tr');
			this.gameTableElement.appendChild(tr);
			for (let col = 0; col < 3; col++) {
				let td = document.createElement('td');
				td.dataset.row = row.toString();
				td.dataset.col = col.toString();
				tr.appendChild(td);
			}
		}
	}

	initEventHandlers() {
		this.gameTableElement.addEventListener('click', event => this.game.cellClickHandler(event));
	}

	isClickByCell(event) {
		return event.target.tagName === 'TD';
	}

	isCellEmpty(event) {
		let row = +event.target.dataset.row;
		let col = +event.target.dataset.col;

		return this.game.mapValues[row][col] === '';
	}

	fillCell(event) {
		let row = +event.target.dataset.row;
		let col = +event.target.dataset.col;

		this.game.mapValues[row][col] = this.game.phase;
		event.target.textContent = this.game.phase;
	}

}

class Game {
	constructor() {
		this.status = 'playing';
		this.mapValues = [
			['', '', ''],
			['', '', ''],
			['', '', ''],
		];
		this.phase = 'X';
	}

	init(board) {
		this.board = board;
	}

	cellClickHandler(event) {
		if (!this.isCorrectClick(event)) {
			return;
		}
		this.board.fillCell(event);
		if (this.hasWon()) {
			this.setStatusStopped();
			this.sayWonPhrase();
		}

		this.togglePhase();
	}

	isCorrectClick(event) {
		return this.isStatusPlaying() && this.board.isClickByCell(event) && this.board.isCellEmpty(event);
	}

	isStatusPlaying() {
		return this.status === 'playing';
	}

	hasWon() {
		return this.isLineWon({ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }) ||
			this.isLineWon({ x: 0, y: 1 }, { x: 1, y: 1 }, { x: 2, y: 1 }) ||
			this.isLineWon({ x: 0, y: 2 }, { x: 1, y: 2 }, { x: 2, y: 2 }) ||

			this.isLineWon({ x: 0, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 }) ||
			this.isLineWon({ x: 1, y: 0 }, { x: 1, y: 1 }, { x: 1, y: 2 }) ||
			this.isLineWon({ x: 2, y: 0 }, { x: 2, y: 1 }, { x: 2, y: 2 }) ||

			this.isLineWon({ x: 0, y: 0 }, { x: 1, y: 1 }, { x: 2, y: 2 }) ||
			this.isLineWon({ x: 0, y: 2 }, { x: 1, y: 1 }, { x: 2, y: 0 });
	}

	isLineWon(a, b, c) {
		let value = this.mapValues[a.y][a.x] + this.mapValues[b.y][b.x] + this.mapValues[c.y][c.x];
		return value === 'XXX' || value === '000';
	}

	setStatusStopped() {
		this.status = 'stopped';
	}

	sayWonPhrase() {
		let figure = this.phase === 'X' ? 'Крестики' : 'Нолики';
		alert(`${figure} выиграли!`);
	}

	togglePhase() {
		this.phase = this.phase === 'X' ? '0' : 'X';
	}
}

window.addEventListener('load', function() {
	const game = new Game();
	const board = new Board();

	board.init(game);
	game.init(board);

	board.renderMap();
	board.initEventHandlers();
});