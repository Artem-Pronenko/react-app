import React from 'react';
import './Main.css'

class Main extends React.Component {

	render() {
		const infoList = {
			'Репозиторий': 'https://github.com/Artem-Pronenko/courses-react',
			'Документация': 'https://ru.reactjs.orghttps://wakatime.com/dashboard',
			'WakaTime': 'https://wakatime.com/dashboard',
		};
		return (
			<main className={'container mt-2'}>
				<h3>Сделано на React</h3>
				<p>Мой первый проект на react для практики</p>
				<ul className={'info-list'}>


					{Object.keys(infoList).map((elem, index) => {
						return <li key={index}><a href={infoList[elem]}>{elem}</a></li>
					})}

				</ul>
			</main>
		)
	}
}

export default Main;
