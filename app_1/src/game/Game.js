import React from 'react';
import './Game.css'

class Game extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			square: Array(9).fill(null),
			mark: 0,
			win: ''
		};

		this.wineLine = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6],
		]
	}

	winGame = squareIndex => {
		for (let i = 0; i < this.wineLine.length; i++) {
			let line = this.wineLine[i];

			if (this.state.square[line[0]] === squareIndex
				&& this.state.square[line[1]] === squareIndex
				&& this.state.square[line[2]] === squareIndex) {
				this.setState({win: `"${squareIndex}"  win!`});
				setTimeout(() => {
					this.setState({square: Array(9).fill(null), mark: 0, win: ''})
				}, 1000);
			}
		}
	};

	clickSquare = event => {
		this.winGame();
		let squareIndex = this.state.square,
			elem = event.target.getAttribute('data-square');

		if (squareIndex[elem]) return;
		squareIndex = this.state.mark % 2 === 0 ? 'X' : 'O';
		this.setState({mark: this.state.mark + 1});
		this.state.square[elem] = squareIndex;
		this.winGame(squareIndex);

	};

	render() {
		const square = this.state.square;
		return (
			<div className={'mt-3 mb-5'}>
				<h3 className={'win'}>{this.state.win}</h3>
				<div className="game-area">
					{square.map((elem, index) => {
						return <div key={index} onClick={this.clickSquare} data-square={index}
										className="square">{elem}</div>
					})}
				</div>
			</div>
		)
	}
}

export default Game;
