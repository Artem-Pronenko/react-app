import React from "react";

export const Notes = ({notes, onRemove}) => (
	<ul className={"list-group"}>
		{notes.map(el => (
			<li className="list-group-item note" key={el.id}>
				<div>
					<strong>{el.title}</strong>
					<small>{el.date}</small>
				</div>
				<button
					onClick={() => onRemove(el.id)}
					type="button"
					className="btn btn-outline-danger btn-sm">&times;</button>
			</li>
		))}
	</ul>
);

