import React from 'react';
import c from '../Post.module.sass';


const FooterPost = ({like, comments, views}) => {
	return (
		<div className={c.act}>
			<div className={c.act_buttons}>
				<div className={`${c.act_button} ${c.button_like}`}>
					<button className={c.like}>
					</button>
					<strong className={`${c.counter} ${c.counter_like}`}>{like}</strong>
				</div>
				<div className={`${c.act_button} ${c.button_comments}`}>
					<button className={c.comments}>
					</button>
					<strong className={`${c.counter} ${c.counter_comments}`}>{comments}</strong>
				</div>
				<div className={`${c.act_button} ${c.button_share}`}>
					<button className={c.share}>
					</button>
				</div>
			</div>
			<div className={c.views}>{views}</div>
		</div>
	)
};


export default FooterPost;




