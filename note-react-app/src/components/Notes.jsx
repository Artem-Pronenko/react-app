import React from "react";

export const Notes = ({notes}) => {
	return (
		<ul className={"list-group"}>
			{notes.map(el => (
				<li className="list-group-item note" key={el.id}>
					<div>
						<strong>{el.title}</strong>
						<small>{new Date().toLocaleDateString()}</small>
					</div>
					<button
						type="button"
						className="btn btn-outline-danger btn-sm">&times;</button>
				</li>
			))}
		</ul>
	)
};