import React from "react";
import {CSSTransition, TransitionGroup} from 'react-transition-group';

export const Notes = ({notes, onRemove}) => (

	<TransitionGroup component="ul" className={"list-group"}>
		{notes.map(el => (
			<CSSTransition
				key={el.id}
				classNames={'note'}
				timeout={700}
			>
				<li className="list-group-item note">
					<div>
						<strong>{el.title}</strong>
						<small>{el.date}</small>
					</div>
					<button
						onClick={() => onRemove(el.id)}
						type="button"
						className="btn btn-outline-danger btn-sm">&times;</button>
				</li>
			</CSSTransition>
		))}
	</TransitionGroup>
);

