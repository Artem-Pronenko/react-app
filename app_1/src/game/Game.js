import React from 'react';
import './Game.css'

class Game extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			square: Array(9).fill(null),
			mark: 0,
			win: '',
			countX: 0,
			countO: 0,
			restartBtn: ''
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

	toggleActiveClass = color => {
		document.querySelectorAll('.square span').forEach(item => {
			item.parentNode.style.backgroundColor = color;
		});
	};


	restart = () => {
		this.setState({square: Array(9).fill(null), mark: 0, win: ''});
		this.setState({restartBtn: ''});
		this.toggleActiveClass('#282c34')

	};

	winGame = squareIndex => {
		const btnRestart = <div className={'reset-block'}>
			<button onClick={this.restart} className={"restart-btn btn-secondary"}>Restart</button>
		</div>;

		for (let i = 0; i < this.wineLine.length; i++) {
			let line = this.wineLine[i];

			// условия победы
			if (this.state.square[line[0]] === squareIndex
				&& this.state.square[line[1]] === squareIndex
				&& this.state.square[line[2]] === squareIndex) {

				this.setState({win: `"${squareIndex}"  win!`});
				this.setState({restartBtn: btnRestart});

				//оборачиваю выигрышную комбинацию в span, чтобы отследить ее по тегу
				this.state.square[line[0]] = <span>{squareIndex}</span>;
				this.state.square[line[1]] = <span>{squareIndex}</span>;
				this.state.square[line[2]] = <span>{squareIndex}</span>;

				// подсвечиваю выигрышную комбинацию
				setTimeout(() => this.toggleActiveClass('#3bc85824'), 0);

				// счетчик побед
				if (squareIndex === 'X') {
					this.setState({countX: this.state.countX + 1});
					break;
				} else {
					this.setState({countO: this.state.countO + 1});
				}
			} else if (!this.state.square.includes(null)) {
				this.setState({win: 'Draw!'});
				this.setState({restartBtn: btnRestart});
			}
		}
	};

	clickSquare = event => {
		let squareIndex = this.state.square,
			elem = event.target.getAttribute('data-square');

		if (squareIndex[elem]) return;
		squareIndex = this.state.mark % 2 === 0 ? 'X' : 'O';
		this.setState({mark: this.state.mark + 1});


		const newSquare = [...this.state.square];
		newSquare[elem] = squareIndex;
		this.setState({
				square: newSquare
			},
			() => {
				this.winGame(squareIndex);
			});


	};

	render() {
		const square = this.state.square;
		return (
			<div className={'game-block'}>
				<h3 className={'win'}>{this.state.win}</h3>
				<div className="game-area">
					{square.map((elem, index) => {
						return <div key={index} onClick={this.clickSquare} data-square={index}
										className="square">{elem}</div>
					})}
					{this.state.restartBtn}
				</div>
				<div className="who-win">
					<p>X: {this.state.countX}</p>
					<p>O: {this.state.countO}</p>
				</div>
			</div>
		)
	}
}

export default Game;
