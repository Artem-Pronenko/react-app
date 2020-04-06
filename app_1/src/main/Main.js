import React from 'react';
import './Main.css'

class Main extends React.Component {
	render() {
		return (
			<main className={'container mt-5'}>
				<article>
					<header>
						<h1>header 1</h1>
					</header>
					<p>Параграф хедера 1 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate debitis dolore
						eos esse, facilis ipsam nihil nobis officiis perferendis sapiente! Eligendi, non, omnis. Consectetur,
						dolorem doloribus laudantium optio repellat voluptatum?</p>
				</article>
			</main>
		)
	}
}

export default Main;
